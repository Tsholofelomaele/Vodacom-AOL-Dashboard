// ✅ Unified dashboard script

async function loadData() {
  // Load both CSVs
  const campaignData = await d3.csv('Campaign AOL 22 June 2026.csv');
  const outcomeData = await d3.csv('Agent Performance Summary_June-2026.csv');

  // Join by CampaignID and OutcomeID
  const mergedData = joinByKeys(campaignData, outcomeData, 'CampaignID', 'OutcomeID');

  // Render metrics
  renderDashboard(mergedData);

  // Render chart
  renderChart(mergedData);
}

// Generic join function
function joinByKeys(campaigns, outcomes, campaignKey, outcomeKey) {
  const outcomeMap = new Map(outcomes.map(o => [o[outcomeKey], o]));
  return campaigns.map(c => {
    const matchedOutcome = outcomeMap.get(c[campaignKey]);
    return {
      ...c,
      ...matchedOutcome, // merge outcome fields into campaign record
    };
  });
}

// Dashboard metrics
function renderDashboard(data) {
  const totalLeads = data.length;
  const successfulContacts = data.filter(d => d.Status === 'Contacted').length;
  const rpcRate = ((successfulContacts / totalLeads) * 100).toFixed(1);
  const totalSales = data.filter(d => d.Sale === 'Yes').length;
  const conversionRate = ((totalSales / totalLeads) * 100).toFixed(1);

  document.getElementById('total-leads').textContent = totalLeads;
  document.getElementById('successful-contact').textContent = successfulContacts;
  document.getElementById('rpc-rate').textContent = `${rpcRate}%`;
  document.getElementById('total-sales').textContent = totalSales;
  document.getElementById('conversion-rate').textContent = `${conversionRate}%`;
}

// Chart.js visualization
function renderChart(data) {
  const newConnections = data.filter(d => d.Type === 'New Connection').length;
  const upgrades = data.filter(d => d.Type === 'Upgrade').length;

  new Chart(document.getElementById('connectionChart'), {
    type: 'bar',
    data: {
      labels: ['New Connections', 'Upgrades'],
      datasets: [{
        label: 'Leads',
        data: [newConnections, upgrades],
        backgroundColor: ['#3b82f6', '#a855f7']
      }]
    }
  });
}

// Run after DOM loads
document.addEventListener('DOMContentLoaded', loadData);

async function loadData() {
  const outcomes = await d3.csv('data/outcomes.csv');
  const campaigns = await d3.csv('data/outcomes_to_campaigns.csv');

  // Example aggregation
  const totalLeads = campaigns.length;
  const successfulContacts = outcomes.filter(o => o.status === 'Contacted').length;

  document.getElementById('total-leads').textContent = `Total Leads: ${totalLeads}`;
  document.getElementById('successful-contact').textContent = `Successful Contacts: ${successfulContacts}`;
}

loadData();
const ctx = document.getElementById('connectionChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['New Connections', 'Upgrades'],
    datasets: [{
      label: 'Leads',
      data: [3053, 4209],
      backgroundColor: ['#3b82f6', '#a855f7']
    }]
  }
});
async function loadData() {
  const campaignData = await d3.csv('Campaign AOL 22 June 2026.csv');
  const agentData = await d3.csv('Agent Performance Summary_June-2026.csv');

  // Example: merge by campaign ID
  const merged = campaignData.map(c => ({
    ...c,
    agent: agentData.find(a => a.AgentID === c.AgentID)?.AgentName || 'Unknown'
  }));

  renderDashboard(merged);
}
function renderDashboard(data) {
  const totalLeads = data.length;
  const successfulContacts = data.filter(d => d.Status === 'Contacted').length;
  const rpcRate = ((successfulContacts / totalLeads) * 100).toFixed(1);

  document.getElementById('total-leads').textContent = totalLeads;
  document.getElementById('successful-contact').textContent = successfulContacts;
  document.getElementById('rpc-rate').textContent = `${rpcRate}%`;
}

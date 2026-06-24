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

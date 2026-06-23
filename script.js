// Lead Volume Chart
const ctx1 = document.getElementById('leadVolumeChart');
new Chart(ctx1, {
  type: 'bar',
  data: {
    labels: ['New Connections', 'Upgrade'],
    datasets: [{
      label: 'Leads',
      data: [3053, 4209],
      backgroundColor: ['#4e79a7', '#f28e2b']
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});

// Performance Metrics Chart
const ctx2 = document.getElementById('performanceChart');
new Chart(ctx2, {
  type: 'bar',
  data: {
    labels: ['Contact Rate', 'RPC Rate', 'Conversion'],
    datasets: [
      { label: 'New Connection', data: [83.4, 75.2, 19.9], backgroundColor: '#4e79a7' },
      { label: 'Upgrade', data: [80.3, 76.7, 3.5], backgroundColor: '#f28e2b' }
    ]
  },
  options: {
    scales: { y: { beginAtZero: true } }
  }
});
fetch('Campaign AOL 22 June 2026.csv')
fetch('Agent Performance Summary_June.csv')
Papa.parse('Agent Performance Summary_June.csv', {
  download: true,
  header: true,
  complete: function(results) {
    console.log(results.data); // This shows your CSV rows as objects

    // Example: use the data to update a chart
    const leads = results.data.map(row => parseInt(row.Leads));
    const campaigns = results.data.map(row => row.Campaign);

    new Chart(document.getElementById('leadVolumeChart'), {
      type: 'bar',
      data: {
        labels: campaigns,
        datasets: [{
          label: 'Leads',
          data: leads,
          backgroundColor: ['#4e79a7', '#f28e2b']
        }]
      }
    });
  }
});
Papa.parse('Campaign AOL 22 June 2026.csv', {
  download: true,
  header: true,
  complete: function(results) {
    // Use this data for your second chart
    const contactRates = results.data.map(row => parseFloat(row.ContactRate));
    const rpcRates = results.data.map(row => parseFloat(row.RPCRate));
    const conversions = results.data.map(row => parseFloat(row.Conversion));

    new Chart(document.getElementById('performanceChart'), {
      type: 'bar',
      data: {
        labels: ['Contact Rate', 'RPC Rate', 'Conversion'],
        datasets: [
          { label: 'New Connection', data: contactRates, backgroundColor: '#4e79a7' },
          { label: 'Upgrade', data: rpcRates, backgroundColor: '#f28e2b' }
        ]
      }
    });
  }
});

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

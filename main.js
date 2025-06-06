  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Total Sales',
        data: [50000, 30000, 60000, 40000, 45000, 70000, 55000],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const transactionSection = document.querySelector('.transaction-section');
  const canvas = document.getElementById('myChart');
  
  // Set canvas dimensions relative to transaction section
  canvas.style.width =  transactionSection.width;
  canvas.style.height = transactionSection.height -20+"px";
  
  // Make chart responsive to container size
  const resizeObserver = new ResizeObserver(entries => {
    for (let entry of entries) {
      const width = entry.contentRect.width;
      const height = entry.contentRect.height;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      myChart.resize();
    }
  });
  
  resizeObserver.observe(transactionSection);







  const currentDateElement = document.getElementById('currentDate');
  
  const now = new Date();
  const options = { 
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    weekday: 'long'
  };
  const formattedDate = now.toLocaleDateString('en-US', options);
  const [date, weekday] = formattedDate.split(', ');
  currentDateElement.style.textTransform = 'capitalize';
  currentDateElement.textContent = `${date} | ${weekday}`;
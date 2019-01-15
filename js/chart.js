var chart1 = document.getElementById('myChart1').getContext('2d');
const hourlyLabels = ["1-4", "5-8", "9-12", "13-16", "17-20", "21-24"];
const dailyLabels = ["S", "M", "T", "W", "T", "F", "S"];
const weeklyLabels = ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"];
const monthlyLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const hourlyData = [50, 20, 70, 35, 60, 95];
const dailyData = [75, 100, 175, 125, 225, 200, 100];
const weeklyData = [950, 665, 1300, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250];
const monthlyData =[800, 300, 550, 400, 1200, 1500, 1400, 2200, 850, 2500, 2000, 2900];
const hourly = document.querySelector('.hourly_trafic');
const daily = document.querySelector('.daily_trafic');
const weekly = document.querySelector('.weekly_trafic');
const monthly = document.querySelector('.monthly_trafic');
const options = {
  legend: {
          display: false
        },
  responsive: true,
  maintainAspectRatio: false,
  radius: 5,
  scales: {
        yAxes: [{
            ticks: {
                beginAtZero:true
            }
        }]
    }
};

let lineChart = null;

function trafic(labels, data) {
  const myLineChart = new Chart(chart1, {
      type: "line",
      data: {
            labels: labels,
            datasets: [{
            lineTension: 0,
            backgroundColor: 'rgba(149, 159, 193, 0.5)',
            borderColor: 'rgb(149, 159, 193)',
            pointBorderWidth:12,
            pointRadius: 1,
            showLines: true,
            drawOnChartArea: false,
            data: data
          }],
        },
      options: options
  });
  // Returs the most recent chart object
  return myLineChart;
}

// Bar Chart

const chart2 = document.getElementById('myChart2').getContext('2d');
const myBarChart = new Chart(chart2, {
    type: 'bar',
      data: {
            labels: dailyLabels,
            datasets: [{
            lineTension: 0,
            backgroundColor: '#8B74C4',
            data: dailyData,
          }],
        },
      options: options
  });

  const chart3 = document.getElementById('myChart3').getContext('2d');
  const myDoughnutChart = new Chart(chart3, {
      type: 'doughnut',
      data: {
            rotation: -1 * Math.PI,
            labels: [
             'Phones',
             'Tablets',
             'Desktop'],
            datasets: [{
            backgroundColor: ['#56b35f', '#6fb3ad', '#8B74C4'],
            borderWidth: [0,0,0],
            data: [16, 14, 70],
          }],
        },
      options: {
        legend:{
         	position:"right",
          onClick: null,
          labels: {
            boxWidth: 15,
            fontSize: 15,
            padding: 20
          }
        },
        responsive: true,
        maintainAspectRatio: false
      }
  });



lineChart = trafic(weeklyLabels, weeklyData);

hourly.addEventListener('click', () => {
  lineChart.destroy();
  lineChart =  trafic(hourlyLabels, hourlyData);
});

daily.addEventListener('click', () => {
  lineChart.destroy();
  lineChart = trafic(dailyLabels, dailyData);

});

weekly.addEventListener('click', () => {
  lineChart.destroy();
  lineChart =  trafic(weeklyLabels, weeklyData);
});

monthly.addEventListener('click', () => {
  lineChart.destroy();
  lineChart =  trafic(monthlyLabels, monthlyData);
});



// Create a required field

const search2 = document.querySelector("#searchInput");
const message = document.querySelector("#messageUser");
search2.required = true;
message.required = true;


// Submit the form
const form = document.querySelector("#form");
const submit = document.querySelector('#submitButton');


submit.addEventListener('click', () => {
  if(search2.value !== '' && message.value !== '' ) {
  window.alert('Your message has been sent!');
}
});

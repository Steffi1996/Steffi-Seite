const ctx = document.getElementById('myChart');

Chart.defaults.font.size = 16;
Chart.defaults.font.weight = 'bold';
Chart.defaults.color = 'white';

new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['HTML', 'CSS', 'SCSS/SASS', 'JavaScript', 'C#', 'ASP.NET', 'Datenbanken', 'MacOS', 'Windows'],
        datasets: [{
            label: '',
            data: [80, 80, 20, 25, 25, 25, 25, 75, 20, 100],
            borderWidth: 1,
            backgroundColor: (context) => {
                const chart = context.chart;
                const { ctx, chartArea, scales } = chart;
                if (!chartArea) {
                    return null
                };
                return getGradient(ctx, chartArea, scales)

            }
            // [
            //     'rgba(255, 159, 64, 1)',
            //     'rgba(255, 159, 64, 1)',
            //     'rgba(255, 205, 86, 0.2)',
            //     'rgba(75, 192, 192, 0.2)',
            //     'rgba(54, 162, 235, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(201, 203, 207, 0.2)',
            //     'rgba(153, 102, 255, 0.2)',
            //     'rgba(201, 203, 207, 0.2)'
            // ]
        }],

    },
    options: {
        indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
                // labels: {
                //     // This more specific font property overrides the global property
                //     font: {
                //         size: 18,
                //         weight: 'bold',
                //         color: 'white',
                //     }
                // }
            }
        }
    }
});

function getGradient(ctx, chartArea, scales) {
    const gradientBg = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);

    gradientBg.addColorStop(0, 'red');
    gradientBg.addColorStop(0.5, 'yellow');
    gradientBg.addColorStop(0.7, 'green');
    gradientBg.addColorStop(1, 'green');

    return gradientBg
}


import ReactApexChart  from 'react-apexcharts';

function ColumnChart() {
  const mokData = {

    series: [{
      name: 'Estabilidade',
      data: [44, 55, 41, 67]
    }, {
      name: 'Influência',
      data: [13, 23, 20, 8]
    }, {
      name: 'Cautela',
      data: [11, 17, 15, 15]
    }, {
      name: 'Dominância',
      data: [21, 7, 25, 13]
    }],

    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          borderRadius: 8,
          horizontal: false,
        },
      },
      xaxis: {
        type: 'category',
        categories: ['Paulo Sérgio', 'Lucimar', 'Edmundo', 'Julio Cesar'
        ],
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    },

  
  };
  return (
    <ReactApexChart options={mokData.options} series={mokData.series} type="bar" height={350} />
  );
}

export default ColumnChart;

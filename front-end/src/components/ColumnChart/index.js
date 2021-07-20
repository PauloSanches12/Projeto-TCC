import ReactApexChart from 'react-apexcharts';

function ColumnChart() {
  const mokData = {

    series: [{
      name: 'Estabilidade',
      data: [44, 10, 36, 20]
    }, {
      name: 'Influência',
      data: [13, 23, 25, 15]
    }, {
      name: 'Cautela',
      data: [22, 32, 21, 30]
    }, {
      name: 'Dominância',
      data: [21, 35, 18, 35]
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

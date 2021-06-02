import ReactApexChart  from 'react-apexcharts';

function DonutChart() {

  const mockData = {
    series: [477138, 499928, 444867, 220426],
    labels: ['Estabilidade', 'Influência', 'Cautela', 'Dominância']
  }

  const options = {
    legend: {
      show: true
    }
  }

  return (
    <ReactApexChart  options={{ ...options, labels: mockData.labels }} series={mockData.series} type="pie" height="240" />
  );
}

export default DonutChart;

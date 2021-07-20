import ReactApexChart from 'react-apexcharts';

function DonutChart() {

  const mockData = {
    series: [40, 20, 30, 10],
    labels: ['Estabilidade', 'Influência', 'Cautela', 'Dominância']
  }

  const options = {
    legend: {
      show: true
    }
  }

  const mockData2 = {
    series: [35, 28, 25, 12],
    labels: ['Estabilidade', 'Influência', 'Cautela', 'Dominância']
  }

  const options2 = {
    legend: {
      show: true
    }
  }
  const mockData3 = {
    series: [26, 23, 33, 18],
    labels: ['Estabilidade', 'Influência', 'Cautela', 'Dominância']
  }

  const options3 = {
    legend: {
      show: true
    }
  }

  return (
    <>
      <ReactApexChart options={{ ...options, labels: mockData.labels }} series={mockData.series} type="pie" height="190" />
      <ReactApexChart options={{ ...options2, labels: mockData2.labels }} series={mockData2.series} type="pie" height="190" />
      <ReactApexChart options={{ ...options3, labels: mockData3.labels }} series={mockData3.series} type="pie" height="190" />
    </>
  );
}

export default DonutChart;

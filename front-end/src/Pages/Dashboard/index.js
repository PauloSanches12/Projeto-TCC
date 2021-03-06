import ColumnChart from "../../components/ColumnChart";
import DataTable from "../../components/DataTable";
import DonutChart from "../../components/DonutChart";


function Dashboard() {
  return (
    <div className="container">
      <h1 className="text-primary py-3"> Dashboard de Candidatos </h1>
      <div className="row px-3">
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Perfil dos Candidatos (%)</h5>
          <ColumnChart />
        </div>
        <div className="col-sm-6">
          <h5 className="text-center text-secondary">Perfis Ideais</h5>
          <DonutChart />
        </div>
      </div>
      <div className="py-3">
        <h2 className="text-primary">Lista de Candidatos</h2>
      </div>
      <DataTable />
    </div>
  );
}

export default Dashboard;

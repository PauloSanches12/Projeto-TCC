function DataTable() {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Estabilidade</th>
            <th>Influência</th>
            <th>Cautela</th>
            <th>Dominância</th>
          </tr>
        </thead>
        <tbody>

          <tr>
            <td>02/06/2021</td>
            <td>Paulo Sérgio</td>
            <td>paulo_sanches2012@hotmail.com</td>
            <td>30%</td>
            <td>20%</td>
            <td>10%</td>
            <td>20%</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

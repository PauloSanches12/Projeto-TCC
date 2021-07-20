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
            <td>04/06/2021</td>
            <td>Paulo Sérgio</td>
            <td>paulo_sanches2012@hotmail.com</td>
            <td>30%</td>
            <td>20%</td>
            <td>10%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>03/06/2021</td>
            <td>Lucimar</td>
            <td>lucimar@hotmail.com</td>
            <td>55%</td>
            <td>23%</td>
            <td>17%</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>02/06/2021</td>
            <td>Edmundo</td>
            <td>edmundo@hotmail.com</td>
            <td>40%</td>
            <td>20%</td>
            <td>15%</td>
            <td>25%</td>
          </tr>
          <tr>
            <td>02/06/2021</td>
            <td>Julio Cesar</td>
            <td>julioc@hotmail.com</td>
            <td>20%</td>
            <td>15%</td>
            <td>30%</td>
            <td>35%</td>
          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default DataTable;

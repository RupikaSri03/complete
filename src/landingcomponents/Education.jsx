import Table from 'react-bootstrap/Table';

function StripedRowExample() {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Education</th>
          <th>University</th>
          <th>Percentage</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Master's Degree</td>
          <td>GITAM University</td>
          <td>8.03</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Bachelor's Degree</td>
          <td>Kakathiya University</td>
          <td>83%</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Intermediate</td>
          <td>Pratibha Junior College</td>
          <td>88%</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default StripedRowExample;
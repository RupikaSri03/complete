import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


// import Placeholder from 'react-bootstrap/Placeholder';

function CardExample() {
  return (
    <div className="d-flex justify-content-around bg">
      <Card style={{ width: '20rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>TODO LIST</Card.Title>
          <Card.Text>
          By using this application we can add, edit and delete our tasks
          </Card.Text>
          <Button variant="primary" onClick={() => window.location.href='./Todos'}>GO</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>WEATHER APP</Card.Title>
          <Card.Text>
          By using this application we check weather update in different cities.
          </Card.Text>
          <Button variant="primary" onClick={() => window.location.href='./Weatherapp'}>GO</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '20rem' }}>
        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
        <Card.Body>
          <Card.Title>RESPONSIVE PAGE</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={() => window.location.href='./Responsivepage'}>GO</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardExample;
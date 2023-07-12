import Card from 'react-bootstrap/Card';

function WithHeaderAndQuoteExample() {
  return (
    <Card>
      <Card.Header>ABOUT US</Card.Header>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            To seek career opportunity in reputed and well-formed organization where I can explore my skills and knowledge for organizational and personal growth. Looking an environment to continuously learn, constantly grow, dedicatedly contribute, and significantly shine along with the organization.{' '}
          </p>
          {/* <footer className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
          </footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;
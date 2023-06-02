import Card from 'react-bootstrap/Card';

function GitHubCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src='https://placekitten.com/400/400' />
      <Card.Body>
        <Card.Title>User Name</Card.Title>
        <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis lacus, tempor nec laoreet at, ultrices nec justo.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default GitHubCard;
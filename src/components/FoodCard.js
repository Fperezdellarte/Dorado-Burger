import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import burger_nazi from "../images/burger_nazi.jpg";

function FoodCard(title) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={burger_nazi} />
      <Card.Body>
        <Card.Title>Burger</Card.Title>
        <Card.Text>
          Alta hamburguesa esta re picante le gusta a RodoBurgers.
        </Card.Text>
        <Button variant="primary">Comprar</Button>
      </Card.Body>
    </Card>
  );
}

export default FoodCard;
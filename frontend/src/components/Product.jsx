import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Rating from "./Rating";

function Product({ pro }) {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${pro._id}`} />
      <Card.Img className="imgg" variant="top" src={pro.image} />
      <Card.Body>
        <Link to={`/${pro._id}`}>
          <Card.Title className="row-name">
            <strong>{pro.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text >${pro.price}</Card.Text>
        <Card.Text >
          <Rating value={pro.rating} text={`${pro.numReviews}reviews`}></Rating>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;

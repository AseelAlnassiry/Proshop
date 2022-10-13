//React
import { useState, useEffect } from 'react';

//React-Router
import { Link, useParams } from 'react-router-dom';

//Axios
import axios from 'axios';

//React-Bootstrap
import { Row, Col, Image, ListGroup, ListGroupItem, Card, Button } from 'react-bootstrap';

//Components
import Rating from '../../components/Rating/Rating';

const Product = () => {
  const [product, setProduct] = useState({});
  const params = useParams()
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(`/api/products/${params.id}`);
      setProduct(data);
    };

    fetchProduct();
  }, [params.id]);
  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} atl={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{product.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroupItem>
            <ListGroupItem>Price: ${product.price}</ListGroupItem>
            <ListGroupItem>Description: {product.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroupItem>
                <Row>
                  <Col>Price: </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Status: </Col>
                  <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Button className='btn-block' type='button' disabled={product.countInStock <= 0}>
                  Add to Cart
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};
export default Product;

//React
import { useEffect } from 'react';

//React-Router
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom';

//React-Bootstrap
import {
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Image,
  FormControl,
  Button,
  Card,
} from 'react-bootstrap';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../actions/cartActions';

//Components
import Message from '../../components/Message/Message';

const Cart = () => {
  const { id: productId } = useParams();
  const [paramArray] = useSearchParams();
  const searchParams = Object.fromEntries(paramArray);
  const qty = searchParams.qty ? searchParams.qty : 1;

  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartData);
  const { cartItems } = cartData;

  const navigate = useNavigate();

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const checkOutHandler = () => {
    navigate('/login?redirect=shipping');
  };

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 && (
          <Message variant='info'>
            Your cart is empty
            <Link to='/'> Go back</Link>
          </Message>
        )}
        {cartItems.length > 0 && (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroupItem key={item.product}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} atl={item.name} fluid rounded />
                  </Col>
                  <Col md={3}>
                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2}>${item.price}</Col>
                  <Col md={2}>
                    <FormControl
                      as='select'
                      value={item.qty}
                      onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </FormControl>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <i className='fas fa-trash'></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroupItem>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>Subtotal ({cartItems.reduce((acc, item) => acc + Number(item.qty), 0)}) items</h2>
              <span>
                ${cartItems.reduce((acc, item) => acc + Number(item.qty) * Number(item.price), 0)}
              </span>
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkOutHandler}
              >
                Proceed to checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
export default Cart;

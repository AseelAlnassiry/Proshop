//React
import { useEffect } from 'react';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productListActions';

//React-BootStrap
import { Row, Col } from 'react-bootstrap';

//Components
import ProductCard from '../../components/ProductCard/ProductCard';
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const productsList = useSelector((state) => state.productsList);
  const { loading, error, products } = productsList;

  useEffect(() => {
    listProducts(dispatch);
  }, [dispatch]);

  return (
    <>
      {loading && (
        <div className='loader'>
          <Loader />
        </div>
      )}
      {error && <Message variant='danger'>{error}</Message>}
      {products && products.length > 0 && (
        <>
          <h1>Latest Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <ProductCard product={product} />
              </Col>
            ))}
          </Row>{' '}
        </>
      )}
    </>
  );
};
export default Home;

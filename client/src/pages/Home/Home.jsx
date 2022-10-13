//Products
import products from '../../products';

//React-BootStrap
import { Row, Col } from 'react-bootstrap';

//Components
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;

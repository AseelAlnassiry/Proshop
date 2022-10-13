//React
import { useState, useEffect } from 'react';

//Axios
import axios from 'axios';

//React-BootStrap
import { Row, Col } from 'react-bootstrap';

//Components
import ProductCard from '../../components/ProductCard/ProductCard';

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
    };

    fetchProducts();
  }, []);
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Home;
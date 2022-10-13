//React-Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

//Pages
import Home from './pages/Home/Home';
import Product from './pages/Product/Product'

//React-Bootstrap
import { Container } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Product />} />
          </Routes>
        </Container>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

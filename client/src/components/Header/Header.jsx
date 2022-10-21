//React-Bootstrap
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import {logout} from '../../actions/userActions'

//React-Router-Bootstrap
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  const userLogin = useSelector((state) => state.userLogin);
  const { userLogin: userInfo } = userLogin;

  const logoutHandler = () => {};

  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>ProShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i> Cart
                </Nav.Link>
              </LinkContainer>
              {userInfo && (
                <NavDropdown title={userInfo.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Log out</NavDropdown.Item>
                </NavDropdown>
              )}
              {!userInfo && (<LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa-user'></i> Sign In
                </Nav.Link>
              </LinkContainer>)}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;

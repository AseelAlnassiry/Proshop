//React
import { useState, useEffect } from 'react';

//React-Router
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

//Redux
import { login } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

//React-Bootstrap
import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

//Components
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import FormContainer from '../../components/FormContainer/FormContainer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userLogin: user } = userLogin;

  const navigate = useNavigate();

  const [paramArray] = useSearchParams();
  const searchParams = Object.fromEntries(paramArray);

  const redirect = searchParams.redirect ? searchParams.redirect : null;

  useEffect(() => {
    if (user) {
      redirect && navigate(redirect);
      !redirect && navigate('/');
    }
  }, [navigate, redirect, user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <FormGroup className='py-3' controlId='email'>
          <FormLabel className='py-2'>Email Address</FormLabel>
          <FormControl
            type='email'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className='py-3' controlId='password'>
          <FormLabel className='py-2'>password</FormLabel>
          <FormControl
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>

      <Row className='py-3'>
        <Col>
          New Customer? <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}></Link>
        </Col>
      </Row>
    </FormContainer>
  );
};
export default Login;

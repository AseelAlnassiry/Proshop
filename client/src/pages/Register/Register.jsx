//React
import { useState, useEffect } from 'react';

//React-Router
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

//Redux
import { register } from '../../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

//React-Bootstrap
import { Form, Button, Row, Col, FormGroup, FormLabel, FormControl } from 'react-bootstrap';

//Components
import Message from '../../components/Message/Message';
import Loader from '../../components/Loader/Loader';
import FormContainer from '../../components/FormContainer/FormContainer';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userLogin);
  const { loading, error, user } = userData;

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
    if (password !== confirmPassword) {
      setMessage("Passwords don't match");
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <FormGroup className="py-3" controlId="name">
          <FormLabel className="py-2">Name</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className="py-3" controlId="email">
          <FormLabel className="py-2">Email Address</FormLabel>
          <FormControl
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className="py-3" controlId="password">
          <FormLabel className="py-2">Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup className="py-3" controlId="confirmPassword">
          <FormLabel className="py-2">Confirm Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button type="submit" variant="primary">
          Register
        </Button>
      </Form>

      <Row className="py-3">
        <Col>
          Existing Customer?{' '}
          <Link to={redirect ? `/register?redirect=${redirect}` : '/register'}>Login</Link>
        </Col>
      </Row>
    </FormContainer>
  );
};
export default Register;

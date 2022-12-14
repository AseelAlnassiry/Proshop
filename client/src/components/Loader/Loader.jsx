//React-Bootstrap
import { Spinner } from 'react-bootstrap';

//Styles
import './Loader.css'

const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{ width: '100px', height: '100px', margin: 'auto', display: 'block' }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  );
};
export default Loader;

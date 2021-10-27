import logo from './logo.svg';
import './App.css';
import { Button,Col, Row } from 'react-bootstrap';
import Profile from './Component/Profile';

function App() {
  return (
    <div className="App">
      <Row className="mx-0">
  <Button as={Col} variant="primary">this is a primary Button</Button>
  <Button as={Col} variant="secondary" className="mx-2">this is just a another button for fun</Button>
  <Button as={Col} variant="success">i made it, i learned how to make button</Button>
</Row>
 <Profile/> 
    </div>
  );
}

export default App;

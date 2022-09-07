import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';




function Navbar1() {
  return (
    
      <header>
      <>
        <Navbar bg="light">



          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              instacart
            </Navbar.Brand>
          </Container>
          <Container>
            <Navbar.Brand href="#login">Log In</Navbar.Brand>
            <Button href='#signup' variant='success'>Sign Up</Button>
          </Container>
        </Navbar>
        <br />

        <br />

        <br />

      </>



      <div className="App" >

        <h1>Order groceries for delivery or pickup today</h1>
        <h4>Whatever you want from local stores, brought right to your door.</h4>
      </div>
    </header>
  );
}

export default Navbar1;
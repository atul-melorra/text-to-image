import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function BrandExample() {
  return (
    <>
    
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#">
          <i class="melorra-logo navbar-tool-icon d-none d-lg-block d-xl-block d-md-none d-sm-none"></i>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default BrandExample;
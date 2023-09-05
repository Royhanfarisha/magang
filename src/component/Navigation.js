
import { Navbar, Container, Nav, Image, img } from 'react-bootstrap';
import images from '../asset/image/logou.png'

const Navigation = () => {
    return (
        <div > 
            <Navbar>
                <Container>
                <img alt="" src={images} className='image-icon' />
                    <Nav className='navbar '>
                        <Nav.Link className='navbar-link'>Solutions</Nav.Link>
                        <Nav.Link className='navbar-link'>Learn</Nav.Link>
                        <Nav.Link className='navbar-link'>Our Mission</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
export default Navigation;
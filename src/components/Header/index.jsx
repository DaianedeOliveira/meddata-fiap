    import Container from 'react-bootstrap/Container';
        import Nav from 'react-bootstrap/Nav';
                import Navbar from 'react-bootstrap/Navbar';
                import './index.css'
                import imgs from './../../assets/imagens/logo-white.png'

                    function Header() {
                        return (
                            <Navbar expand="lg" className="bg">

                        
                        <img
                        src={imgs}
                        height="130"
                        className="img d-inline-block align-top"
                        alt="React Bootstrap logo"
                        />
            
                <Container>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
            <Nav className=" me-auto" >
                <Nav.Link href="#home" className='text-white'>Início</Nav.Link>
                <Nav.Link href="#link" className='text-white'>Sobre</Nav.Link>
                <Nav.Link href="#action/3.1" className='text-white'>Serviços</Nav.Link>
                <Nav.Link href="#action/3.3" className='text-white'>Contato</Nav.Link>
            
            </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);
}

export default Header;
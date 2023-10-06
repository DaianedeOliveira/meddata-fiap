import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './index.css'



function Login() {

return (
    <Form className='forms'>

    <Form.Group className="group mb-3" controlId="formBasicEmail">
        <Form.Label className='box_2'>Email: </Form.Label>
        <Form.Control className='box' type="email" placeholder="Ex: nome1234@gmail.com" />
    
    </Form.Group>

    <Form.Group className="group mb-3" controlId="formBasicPassword">
        <Form.Label className='box_2'>Senha</Form.Label>
        <Form.Control className='box' type="password" placeholder="*******" />
    </Form.Group>


    
    <Link to={"/medication"}>  <Button className="button" type="submit">
        Entrar
    </Button> </Link>
    </Form>
);
}



export default Login;
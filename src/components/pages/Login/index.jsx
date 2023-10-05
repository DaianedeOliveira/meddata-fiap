import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'


function Login() {
return (
    <Form className='forms'>

    <Form.Group className=" mb-3" controlId="formBasicEmail">
        <Form.Label>Email: </Form.Label>
        <Form.Control type="email" placeholder="Ex: nome1234@gmail.com" />
        <Form.Text className="text-muted"> 
        </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" placeholder="*******" />
    </Form.Group>


    
    <Button className="button" type="submit">
        Cadastrar
    </Button>
    </Form>
);
}

export default Login;
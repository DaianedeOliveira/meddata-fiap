import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './index.css'


        function Medication() {
        return (
    
                <Form className='forms'>
                <Form.Group className="group mb-2" controlId="formBasicEmail">
                    <Form.Label className='box_2'>Nome do paciente:</Form.Label>
                    <Form.Control className='input'  type="text" placeholder="Nome paciente" />
                </Form.Group>
            
                <Form.Group className="group mb-2" controlId="formBasicPassword">
                    <Form.Label className='box_2'>Nome do medicamento:</Form.Label>
                    <Form.Control  className='input' type="text" placeholder="Nome medicamento" />
                </Form.Group>

                <Form.Group className="group mb-2" controlId="formBasicPassword">
                    <Form.Label className='box_2'>Id do medicamento:</Form.Label>
                        <Form.Control className='input' type="text" placeholder="Ex: 12h$ab@4" />
                    </Form.Group>

                    <Form.Group className="group mb-2" controlId="formBasicPassword">
                        <Form.Label className='box_2'>Descrição:</Form.Label>
                        <Form.Control  className='input' type="text" placeholder="Ex: " />
                    </Form.Group>
                
                <Link to={"/resultado"}> 
                <Button className='button' type="submit">Enviar</Button>  </Link> 
                    </Form>
                );
                }
            
    export default Medication;
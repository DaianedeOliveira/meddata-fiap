import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'


        function Medication() {
        return (
    
                <Form className='forms'>
                <Form.Group className="mb-2" controlId="formBasicEmail">
                    <Form.Label>Nome do paciente:</Form.Label>
                    <Form.Control className='input'  type="text" placeholder="Nome paciente" />
                </Form.Group>
            
                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Nome do medicamento:</Form.Label>
                    <Form.Control  className='input' type="text" placeholder="Nome medicamento" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Id do medicamento:</Form.Label>
                    <Form.Control className='input' type="text" placeholder="Ex: 12h$ab@4" />
                </Form.Group>

                <Form.Group className="mb-2" controlId="formBasicPassword">
                    <Form.Label>Descrição:</Form.Label>
                    <Form.Control  className='input' type="text" placeholder="Ex: " />
                </Form.Group>
            
                <Button className='button' type="submit">
                    Enviar
                </Button>
                </Form>
            );
            }
        
export default Medication;
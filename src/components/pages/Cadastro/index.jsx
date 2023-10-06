import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './index.css'


function Cadastro() {
return (
    <Form className='forms'>

        
    <Form.Group className="forms mb-3" controlId="formBasicEmail">
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="email" placeholder="Seu nome" />
        <Form.Text className="text-muted"> 
        </Form.Text>
    </Form.Group>

    <Form.Group className="forms mb-3" controlId="formBasicEmail">
    <Form.Label>Qual estado do Brasil você mora?</Form.Label>
    <Form.Select size="md">
    <option value="">Selecione</option>
    <option value="AC">Acre</option>
    <option value="AL">Alagoas</option>
    <option value="AP">Amapá</option>
    <option value="AM">Amazonas</option>
    <option value="BA">Bahia</option>
    <option value="CE">Ceará</option>
    <option value="DF">Distrito Federal</option>
    <option value="ES">Espirito Santo</option>
    <option value="GO">Goiás</option>
    <option value="MA">Maranhão</option>
    <option value="MS">Mato Grosso do Sul</option>
    <option value="MT">Mato Grosso</option>
    <option value="MG">Minas Gerais</option>
    <option value="PA">Pará</option>
    <option value="PB">Paraíba</option>
    <option value="PR">Paraná</option>
    <option value="PE">Pernambuco</option>
    <option value="PI">Piauí</option>
    <option value="RJ">Rio de Janeiro</option>
    <option value="RN">Rio Grande do Norte</option>
    <option value="RS">Rio Grande do Sul</option>
    <option value="RO">Rondônia</option>
    <option value="RR">Roraima</option>
    <option value="SC">Santa Catarina</option>
    <option value="SP">São Paulo</option>
    <option value="SE">Sergipe</option>
    <option value="TO">Tocantins</option>
        </Form.Select>
        </Form.Group>


    <Form.Group className="mb-3" controlId="formBasicEmail">
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

export default Cadastro;
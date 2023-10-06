    import Card from 'react-bootstrap/Card';
    import ListGroup from 'react-bootstrap/ListGroup';
    import './index.css';

    function Resultado() {
    return (
        <Card className="Container">
        <Card.Header className='title'>Medicamentos 🎛</Card.Header>
        <ListGroup className="list">
            <ListGroup.Item className='text'>Cras justo odio</ListGroup.Item>
            <ListGroup.Item className='text'>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item className='text'>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item className='text'>Vestibulum at eros</ListGroup.Item>
            <ListGroup.Item className='text'>Vestibulum at eros</ListGroup.Item>

        </ListGroup>
        </Card>

        
    );
    }

    export default Resultado;
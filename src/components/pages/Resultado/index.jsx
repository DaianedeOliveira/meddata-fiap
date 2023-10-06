import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css';

function Resultado() {
    const [responseData, setResponseData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000/medication');
                const responseData = response.data;

                console.log('Response:', JSON.stringify(responseData, null, 2));
                setResponseData(responseData);
            } catch (error) {
                console.error("Error: " + error.response.status);
            }
        }

        fetchData();
    }, []);

    return (
        <Card className="Container">
            <Card.Header className='title'>Medicamentos 🎛</Card.Header>
            <ListGroup className="list">
                {responseData.map((item, index) => (
                    <ListGroup.Item className='text' key={index}>
                        {item.resource.code.text}
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Card>
    );
}

export default Resultado;
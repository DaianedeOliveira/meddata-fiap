import { styled } from 'styled-components';
import { Button } from '../../assets/components/Button';
import React, { useEffect } from 'react';
import imgs from './../../assets/imagens/pana.svg';
import axios from 'axios';
import 'animate.css';
import './index.css';

const Constante = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;
    background-color: var(--tercery);
    font-weight: 400;
    z-index: 99;

    p{
        width: 70%;
        color: #1a1a1a;
        text-align: left;
        font-weight: 500;
    }

    span{
        color: var(--primary);
        font-weight: 900;
    }

    img {
        width: 25%;
        height: 350px;
        margin-right: 200px;
        margin-top: 60px;
    }

    .text{
        width: 70%;
        margin-left: 260px;
    }

    .button_home{
        margin-right: 555px;
    }

`

function Home() {
    useEffect(() => {
        // getPatients();
        getMedication();
    }, []);

    return (
        <Constante>
            < div className='box'>
                <div className='text'>
                    <p className="animate__animated animate__fadeInLeft">
                        Está perdido com as informações que precisa ter sobre seus medicamentos?
                        O <span>MedData</span> tem a solução! Somente aqui você encontra os dados sobre seus
                        medicamentos a qualquer hora e em qualquer lugar!
                    </p>
                </div>

                <div className='button_home'>
                    <Button className="animate__animated animate__fadeInLeft">Enviar</Button>
                </div>
            </div>

            <img className="animate__animated animate__fadeInRight" src={imgs} alt="Um médico segurando uma ficha" />

        </Constante>

    )
}

async function getPatients() {
    try {
        const response = await axios.get(
            'http://localhost:3000/patients'
        );

        const responseFhir = response.data;
        console.log('Response:', JSON.stringify(response, null, 2))
        return responseFhir;
    } catch (error) {
        console.error("Error: " + error.response.status);
        return null;
    }
}

async function getMedication() {
    try {
        const response = await axios.get(
            'http://localhost:3000/medication'
        );

        const responseFhir = response.data;
        console.log('Response:', JSON.stringify(response, null, 2))
        return responseFhir;
    } catch (error) {
        console.error("Error: " + error.response.status);
        return null;
    }
}

export default Home;
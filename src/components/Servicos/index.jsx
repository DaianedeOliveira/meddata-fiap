import { styled } from 'styled-components';
import person from './../../assets/imagens/Group 4.png';
import medicine from './../../assets/imagens/Group 1.png';
import 'animate.css';
import './index.css';

const Container = styled.div`
    background-color: var(--tercery);
    width: 100%;
    height: 600px;

    p {
        color: var(--primary);
        font-size: 17px;
        margin-left: 5px;
        width: 80%;
    }

    span{
        cursor: pointer;
        font-weight: 900;
    }

    span:hover {
        color: #000;
        font-weight: 900;
    }

    img {
        max-width: 100%;
        height: auto;
    }

    .title {
        text-align: center;
        color: var(--primary);
        font-size: 24px;
        font-weight: 900;
        padding-top: 2%;
    }

    .servico {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 20%;  
        margin-right: 20%;  
    }

    .servicoone,
    .servicotwo {
        display: flex;
        align-items: center;  
    }

    .title-two {
        color: var(--primary);
        font-size: 20px;
        font-weight: 900;
        margin-left: 5px;
    }
    
`;

function Servicos() {
    return (
        <Container>
            <h1 className='title'>Serviços</h1>
            <section className='servico'>
                <div className='servicoone'>
                    <img src={person} alt='Uma ilustração 3d de um homem segurando um celular' />
                    <div>
                        <h1 className='title-two'>Dados sobre medicamentos do paciente</h1>
                        <p>
                            Quer saber quais medicamentos precisar tomar, qual a dosagem, qual clínica lhe passou? Então, temos a solução!{' '}
                            <span>Saber mais.</span>
                        </p>
                    </div>
                </div>

                <div className='servicotwo'>
                    <img src={medicine} alt='Medicamentos' />
                    <div>
                        <h1 className='title-two'>Acesse as melhores notícias do mundo da saúde</h1>
                        <p>
                            Temos uma lista de indicações de clínicas e profissionais da saúde disponíveis para lhe atender. <span>Confira!</span>
                        </p>
                    </div>
                </div>
            </section>
        </Container>
    );
}

export default Servicos;

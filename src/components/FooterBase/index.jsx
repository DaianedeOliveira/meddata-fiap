import { styled } from 'styled-components';
import { Button2 } from '../../assets/components/Button';
import imglogo from './../../assets/imagens/logo-no-background.png';
import icone1 from './../../assets/imagens/facebook.png';
import icone2 from './../../assets/imagens/instagram.png';
import icone3 from './../../assets/imagens/linkedin.png';
import 'animate.css';
import './index.css';

const Footer = styled.div`    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--primary);
    padding: 50px;
    height: 400px;

    a:hover{
        color: #6d6868;
    }

    h1 {
        margin-bottom: 15px;
        font-size: 14px;
        width: 70%;
        color: #2c2c2c;
        text-align: left;
        font-weight: 00;

    }

    textarea{
        background-color: var(--primary);
        border: 2px solid #000;
        border-radius: 10px;
        font-size: 12px;
        font-weight: 200;
        color: #242424;
        width: 400px;
        height: 100px;
        padding: 18px;

    }

    .form{    
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .logocolor{
        margin-left: 320px;
        margin-right: 8px;
        margin-bottom: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .text{
        display:flex;
        flex-direction: column;
        justify-content: center;    
        margin-left: 120px;
        margin-right: 8px;
        margin-bottom: 64px;
        flex: 1;
    }

    .icones{

        display: flex;
        align-items: center;
        justify-content: center;
        
    }

    .icones img{
        width: 26px;
        height: 25px;
        padding: 2px;
        display: inline-block;

    }

    .icones img:hover{
        transform: scale(1.2);
    }

`;

function FooterBase() {
    return (
        <Footer>
            <div>
                <div className='form'>
                    <div className='logocolor'>
                        <img src={imglogo} alt="Logo escrito MEDDATA" />
                    </div>

                    <div className='text'>
                        <h1>Assine nossa newsletter e receba notícias do mundo da tecnologia com a medicina!</h1>
                        <textarea placeholder='Ex: meu_melhor_email@email.com'></textarea>
                        <Button2>Enviar</Button2>
                    </div>
                </div>

                <div className='icones'>
                    <img src={icone1} alt="Logo Facebook" />
                    <img src={icone2} alt="Logo Instagram" />
                    <img src={icone3} alt="Logo Linkdeln" />
                </div>
            </div>
        </Footer>
    );
}

export default FooterBase;

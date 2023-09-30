import { styled } from 'styled-components';
import imglogo from './../../assets/imagens/logo-no-background.png'
import 'animate.css';
import { Button2 } from '../../assets/components/Button';
import './index.css'



const Footer = styled.div`
display: inline-block;
align-items: center;
justify-content: center;



.section{
    padding: 5px;
    gap: 8px;
    margin-left: 300px;
    margin-top: 50px;
    background-color: var(--primary);
    height: 400px;

}

.section a{
    padding: 5px;
    list-style: none;
    text-decoration: none;
    font-weight: 900;
    color: var(--main);
    display: flex;
    flex-direction: column;

}

a:hover{
    color: #6d6868;
}

.logocolor{
    display: flex;
    margin-left: 300px;
    margin-bottom: 50px;
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

.text{
    display:flex;
    flex-direction: column;
    margin-left: 600px;
    margin-bottom: 20px;

}

`

    function FooterBase() {
        return (
                <Footer>


    <div className='section'>

        <a href="#">Termos de Uso</a>
                
        <a href="#">Central de ajuda</a>
        
        <a href="#"> Política de Privacidade </a>

        <div className='text'> 
    <textarea placeholder='Assine a newsletter do MedData, escreva seu e-mail aqui para receber todos os dias notícias do mundo de tecnologia com a medicina!'></textarea>
    <Button2>Enviar</Button2>

    
    </div>

    <img className='logocolor' src={imglogo} alt="Logo escrito MEDDATA"/>


    </div>

    </Footer>


        
    );
}

export default FooterBase;

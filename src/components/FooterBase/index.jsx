import { styled } from 'styled-components';
import imglogo from './../../assets/imagens/logo-no-background.png'
import 'animate.css';
import { Button2 } from '../../assets/components/Button';
import './index.css'
import icone1 from './../../assets/imagens/facebook.png'
import icone2 from './../../assets/imagens/instagram.png'
import icone3 from './../../assets/imagens/linkedin.png'


const Footer = styled.div`
display: inline-block;
align-items: center;
justify-content: center;
background-color: var(--primary);
padding: 50px;
height: 400px;



a:hover{
    color: #6d6868;
}

.logocolor{
    margin-left: 600px;
    margin-bottom: 20px;
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
    justify-content: center;
    margin-left:900px;
    margin-bottom: 20px;

}

h1 {
    margin-bottom: 15px;
    font-size: 14px;
    width: 70%;
    color: #2c2c2c;
    text-align: left;
    font-weight: 00;

}

.icones{
    display: flex;
    justify-content: center;
    align-items: center;
    
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

`


    function FooterBase() {
        return (
                <Footer>



        <div className='text'> 
        <h1>Assine nossa newsletter e receba notícias do mundo da tecnologia com a medicina!</h1>
    <textarea placeholder='Ex: pessoa1234@gmail.com'></textarea>
    <Button2>Enviar</Button2>

    
    </div>

    <img className='logocolor' src={imglogo} alt="Logo escrito MEDDATA"/>




    <div className='icones'> 
    <img src={icone1} alt="Logo Facebook"/>
    <img src={icone2} alt="Logo Instagram"/>
    <img src={icone3} alt="Logo Linkdeln"/>
    </div>

    </Footer>


        
    );
}

export default FooterBase;

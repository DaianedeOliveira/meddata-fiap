import { styled } from 'styled-components';
import { Button } from '../../assets/components/Button';
import imgs from './../../assets/imagens/pana.svg';
import 'animate.css';
import './index.css';
import { Link } from 'react-router-dom';


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
        width: 69%;
        color: #1a1a1a;
        text-align: left;
        font-weight: 400;
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

    .text-2{
        width: 70%;
        margin-left: 260px;
    }

    .button_home{
        margin-right: 555px;
    }

`


function Home() {

    return (
        <Constante>
                < div className='box-4'>
                    <div className='text-2'>
                        <p className="animate__animated animate__fadeInLeft">
                            Está perdido com as informações que precisa ter sobre seus medicamentos?
                            O <span>MedData</span> tem a solução! Somente aqui você encontra os dados sobre seus
                            medicamentos a qualquer hora e em qualquer lugar!
                        </p>
                    </div>

                    <div className='button_home'>                            
                
            <Link to={"/login"}> <Button  className="animate__animated animate__fadeInLeft">Entrar</Button> </Link> 
                        </div>
                    </div>


                <img className="animate__animated animate__fadeInRight" src={imgs} alt="Um médico segurando uma ficha" />


        </Constante>

    )
}

export default Home;
import { styled } from 'styled-components'
import imgs from './../../assets/pana.svg'
import 'animate.css';
import './index.css'


const Constante = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 600px;
    background-color: var(--tercery);
    font-weight: 400;
    z-index: 99;


.text{
    width: 70%;
    margin-left: 260px;
}

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

.button_home{
    margin-right: 555px;

    
}

button {
    align-items: flex-start;
    width: 36%;
    height: 50px;
    margin-top: 1rem;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: #fff;
    background-color: var(--main);
    border: 2px solid #000;
    border-radius: 10px;
    box-shadow: 5px 5px 0px #000;
    transition: all 0.3s ease;
    margin-left: 16rem;
    
}

button:hover {
    background-color: #fff;
    color: var(--main);
    border: 2px solid var(--main);
    box-shadow: 5px 5px 0px var(--main);
}

button:active {
    background-color: aliceblue;
    color: var(--main);
    transform: translateY(4px);
    border: 2px solid var(--main);
    box-shadow: 5px 5px 0px var(--main);
}

img {
    width: 25%;
    height: 350px;
    margin-right: 200px;
    margin-top: 60px;
}
`


function Home() {
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
                <button className="animate__animated animate__fadeInLeft">Enviar</button>
            </div>
            </div>


            <img className="animate__animated animate__fadeInRight" src={imgs} alt="Um médico segurando uma ficha"/>



    </Constante>



    )
}

export default Home;
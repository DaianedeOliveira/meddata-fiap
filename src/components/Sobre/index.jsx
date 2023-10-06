import { styled } from 'styled-components';
import boxone from './../../assets/imagens/Group 18.png';
import boxtwo from './../../assets/imagens/Group 16.png';
import boxthree from './../../assets/imagens/Group 17.png';
import 'animate.css';
import './index.css';

const Box = styled.div`

    main{
        margin-top:35px;
    }

    .about {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .title-2{
        text-align: center;
        color: var(--main);
        font-size: 24px;
        font-weight: 900;
    }

    .text_about{
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .text_about_p{
        width: 90%;
        color: #1a1a1a;
        text-align: center;
        font-weight: 400;
        padding-top: 5px;
        width:50%;
    }

    .imagens-box{
        margin-top: 6%;
        display:flex;
        justify-content: center;
        align-items: center;
    }

    .box2:hover{
        transform: scale(1.2);
    }

    .divide{
        width:100%;
        height: 400px;
        background-color: var(--tercery);
    }

`

function Sobre() {
    return (
        <Box>
            <main>
                <div className='about'>
                    <div className="title_section animate__animated animate__fadeInLeft">
                        <h1 className='title-2'>Sobre</h1>
                    </div>

                    <div className="text_about">
                        <p className="text_about_p">
                            Somos uma empresa que preza pela facilidade de obter informações. Com isso, sabemos a dificuldade que muitas pessoas, principalmente, idosos e indivíduos com deficiência, têm na hora de saber qual remédio precisar tomar, qual o horário, dosagem...
                            Por isso, trazemos em um só lugar todos esses dados, levando praticidade para o seu dia e qualidade para sua saúde.

                        </p>
                    </div>

                    <div className="imagens-box animate__animated animate__fadeInLeft">
                        <img className="box2" src={boxone} alt="medicine" />
                        <img className="box2" src={boxtwo} alt="health" />
                        <img className="box2" src={boxthree} alt="smartphone with robot" />
                    </div>
                </div>
                { /* <div className='divide'></div> */}
            </main>
        </Box>
    )
}

export default Sobre;
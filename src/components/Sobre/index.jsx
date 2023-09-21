import { styled } from 'styled-components'
import './index.css'
import 'animate.css';
import boxone from './../../assets/Group 18.png'
import boxtwo from './../../assets/Group 16.png'
import boxthree from './../../assets/Group 17.png'



const Box = styled.div`

main{
margin-top:35px;


}

.about{
    display:flex;
    justify-content: center;
    align-items: center;
    margin-left:350px;
    width:50%;
    
}


.title{
        text-align: center;
        color: var(--main);
        font-size: 24px;
        font-weight: 900;
        
    }

    .text_about{
        width: 90%;
        color: #1a1a1a;
        text-align: center;
        font-weight: 400;
        padding-top: 5px;
    }



    svg {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-bottom: 120px;
        width: 100%;
        border: none;

    
    }

    .imagens-box{
        margin-left: 25%;
        margin-top: 6%;
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


            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#F8F1F1" fillOpacity="1" d="M0,160L48,186.7C96,213,192,267,288,261.3C384,256,480,192,576,192C672,192,768,256,864,272C960,288,1056,256,1152,229.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>

            <main>
                <div className="title_section animate__animated animate__fadeInLeft">
                    <h1 className='title'>Sobre</h1>
                </div>

                <div className="about">
                    <p className="text_about">
                        Somos uma empresa que preza pela facilidade de obter informações. Com isso, sabemos a dificuldade que muitas pessoas, principalmente, idosos e indivíduos com deficiência, têm na hora de saber qual remédio precisar tomar, qual o horário, dosagem...
                        Por isso, trazemos em um só lugar todos esses dados, levando praticidade para o seu dia e qualidade para sua saúde.

                    </p>
                </div>

                <div className="imagens-box  animate__animated animate__fadeInLeft">
                    <img className="box2" src={boxone} alt="medicine" />
                    <img className="box2" src={boxtwo} alt="health" />
                    <img className="box2" src={boxthree} alt="smartphone with robot" />
                </div>


                { /* <div className='divide'></div> */}

            </main>

        </Box>




    )
}

export default Sobre;
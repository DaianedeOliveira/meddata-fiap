import { styled } from 'styled-components';
import 'animate.css';
import person from './../../assets/Group 4.png';
import medicine from './../../assets/Group 1.png';


const Container = styled.div`
background-color: var(--tercery);
width: 100%;
height: 600px;

.servicoone{
    display: inline-block;
}

.servicotwo{
    display: inline-block;
}
img{ display: inline-block;}

`


function Servicos() {
    return(
        <Container>
            <div className='servicoone'>

            <img src={person} alt="Uma ilustração 3d de um homem segurando um celular"/>

            </div>


            <div className='servicotwo'>

            <img src={medicine} alt="Medicamentos"/>

            </div>



        </Container>
    )
}


export default Servicos;
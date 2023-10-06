
import img1 from './../../../assets/imagens/dia-saude-2023.jpeg'
import img2 from './../../../assets/imagens/foto-medico-ans.jpg'
import img3 from './../../../assets/imagens/images (1).jpg'
import img4 from './../../../assets/imagens/profsaude_coronavirus_agdenoticiasdoacre_epsjv_interna.jpg'
import img5 from './../../../assets/imagens/secretaria-de-estado-da-saude.webp'


import './index.css'

function Noticias() {
    return(
<div className='carrossel'>
<div className='container' id='img'>

<img src={img1}  alt='' />
<img src={img2} alt='' />
<img src={img3}  alt=''/>
<img src={img4} alt='' />
<img src={img5} alt='' />
<img src={img5} alt='' />


</div>

</div>

    );
}


export default Noticias;
import imgs1 from './../../../assets/imagens/Group 19.png' 
import imgs2 from './../../../assets/imagens/Group 20.png'
import imgs3 from './../../../assets/imagens/Group 21.png' 
import imgs4 from './../../../assets/imagens/Group 22.png'
import imgs5 from './../../../assets/imagens/Group 21.png' 
import {motion} from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import './index.css'


        const imgs = [imgs1, imgs2, imgs3, imgs4, imgs5];


        function Noticias () {
            const carousel = useRef();
            const [width, setWidth] = useState(0)

            useEffect(() => {
                console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
                setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
            }, [])

        return (
            <div className="divall"> 
<motion.h1 className='title_new'>Fique por dentro das melhores notícias no mundo da saúde!</motion.h1>

    <div className="app1">

            <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
    <motion.div className="inner"
    drag="x"
    dragConstraints={{right:0, left: -width}}
    >

    {imgs.map(image => (
    <motion.div className='item' key={image}>
        <img src={image} alt=""/>
    </motion.div>
))}



    </motion.div>
        </motion.div>

        </div>

        <div className='circlebox'>    <motion.div className='circle'>+</motion.div></div>
     

        </div>
    );
    }

    export default Noticias;
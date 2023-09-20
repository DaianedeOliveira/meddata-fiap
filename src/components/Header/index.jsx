import styles from './header.module.css'
import logo from './../../assets/logo-white.png'


    function Header(){
        return (
        <header className={styles.header}>
            <img className={styles.img} src={logo} alt="logo escrito meddata"/>
            <nav>
                <a href="">Início</a>
                <a href="">Sobre</a>
                <a href="">Serviços</a>
                <a href="">Contato</a>
            </nav>
            
        </header>
        )
    }

    export default Header;
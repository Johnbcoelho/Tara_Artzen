import './Home.css'
import Data from '../../Const'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {

  AOS.init();

  return (
    <div className='Home' id='home'>
        <div className="container2">
            <p>Olá, nós somos a</p>
            <h1>TARA ART ZEN!</h1>
            <h1>Produtos Artesanais.</h1>
            <p>Artesanato em Crochet: Bolsas, Chapéus,Toucas Chales emuitas artes mais! Produtos artesanais. CONTÉM AMOR! Campo Grande - MS, Brasil. Entrega via Correios!</p>
            <a href={Data.WhatsappLink} rel="noreferrer" target="_blank" data-aos="fade-left" data-aos-duration="1000" data-aos-anchor-placement="top">Entre em contato</a>
        </div>
    </div>
  )
}

export default Home

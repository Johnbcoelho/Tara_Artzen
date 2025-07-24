import './Contact.css'
import { FaWhatsapp , FaInstagram} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import Data from '../../Const';

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

  AOS.init();

  return (
    <section className='Contact' id='contato'>
        <div className='container2'>
            <p>Que tal dizer oi?</p>
            <h1>Entre em contato</h1>
            <p>Se você ficou com alguma dúvida sobre nossos produtos, quer encomendar uma peça personalizada ou simplesmente deseja conversar sobre nossas criações, será um prazer te ouvir! <br /> <br />🌸  Envie uma mensagem diretamente pelo WhatsApp ou e-mail.

 <br /> <br />📦 Personalizamos chapéus, bolsas, acessórios e itens sob medida. Entregas via Correios! <br /> <br />
💌 Respondemos com carinho e agilidade de segunda a sexta, das 9h às 18h. <br /> <br />

✨ Obrigada por apoiar o feito à mão e fortalecer o trabalho artesanal com amor e consciência. <br /> <br />

Com carinho,
Equipe T⭐️RA Arte Zen – Vestuário e Acessórios Artesanais.</p>  
            <div className='optionsOfContact'>
              <a href={Data.WhatsappLink} rel="noreferrer" target="_blank" title="Whatsapp"><FaWhatsapp /></a>
              <a href={Data.EmailLink} rel="noreferrer" target="_blank" title="Gmail"><MdOutlineEmail /></a>
              <a href={Data.InstaLink} rel="noreferrer" target="_blank" title="Insta"><FaInstagram/></a>
            </div>
           
        </div>
    </section>
  )
}

export default Contact
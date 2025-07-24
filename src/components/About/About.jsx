import './About.css'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";
import { TiArrowSortedUp } from "react-icons/ti";
import { BiLogoTypescript } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiExpo } from "react-icons/si";

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {

  AOS.init();

  return (
    <section className='About' id='sobre'>
        <div className='container2'>
            <h2 className='title'>
                <TiArrowSortedUp />
                Sobre nós:
            </h2>

            <div className='info'>
                <div className='desc'>
                    <p>Olá, nos chamamos <span>Tara Art Zen!</span></p>
                    <p>Seja bem-vindo(a) à T⭐️RA Arte Zen — um espaço onde arte, amor e tranquilidade se entrelaçam em cada ponto! 🧘🏻‍♀️✨

Somos uma marca de vestuário artesanal com alma zen, nascida em Campo Grande - MS, que celebra a beleza do feito à mão e o encanto dos detalhes. 💗

Aqui você encontra bolsas, chapéus, toucas, xales e muitas outras peças únicas, todas criadas com muito carinho através da técnica do crochê. Cada item carrega dedicação, cuidado e a energia suave de quem acredita na arte como forma de expressão e afeto.

🌿 Estamos apenas começando essa jornada, mas com o coração cheio de gratidão e vontade de espalhar beleza por onde for. Enviamos nossos produtos com todo cuidado para todo o Brasil, através dos Correios. </p>
                    
                </div>
                <div className='profileImg'>
                    <div className='img' data-aos="fade-up-left" data-aos-duration="1000"></div>
                    <div className='imgBorder' data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="2000"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
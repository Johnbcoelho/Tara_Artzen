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
                Sobre mim
            </h2>

            <div className='info'>
                <div className='desc'>
                    <p>Olá, me chamo <span>João Gabriel.</span></p>
                    <p>Sou um desenvolvedor Front-End apaixonado por criar interfaces web atraentes e funcionais. Com uma sólida base em <span>HTML</span> e <span>CSS</span>, tenho a habilidade de transformar designs em experiências digitais cativantes e responsivas. Estou aperfeiçoando meus conhecimentos em <span>JavaScript</span> para adicionar interatividade e dinamismo aos meus projetos. Atualmente, expandindo meus estudos em tecnologias como <span>React</span> e <span>Node</span>. </p>
                    <div className='skillsContainer'>
                        <h3>Habilidades</h3>
                        <div className='skills'>
                            <div className='skill'>
                                <FaHtml5 />
                                <p>HTML</p>
                            </div>
                            <div className='skill'>
                                <FaCss3Alt />
                                <p>CSS</p>
                            </div>
                            <div className='skill'>
                                <RiJavascriptFill />
                                <p>JavaScript</p>
                            </div>
                           
                            <div className='skill'>
                                <FaReact />
                                <p>ReactJS</p>
                            </div>
                            <div className='skill'>
                                <FaReact />
                                <p>React Native</p>
                            </div>
                           
                            <div className='skill'>
                                <IoLogoGithub />
                                <p>Github</p>
                            </div>
                            <div className='skill'>
                                <FaNodeJs />
                                <p>NodeJS</p>
                            </div>
                            <div className='skill'>
                                <SiTailwindcss />
                                <p>TailwindCSS</p>
                            </div>
                        </div>
                    </div>
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
import './ProjectContainer.css'
import { IoLogoGithub } from "react-icons/io";
import { TbExternalLink } from "react-icons/tb";

function ProjectContainer({direction, data}) {

  const {name, gitName, fileName, desc, skills, githubPages} = data

  return (
    <div className={`ProjectContainer ${direction}`} data-aos="fade-right" data-aos-duration="1000">
        <a rel="noreferrer" target='_black' className='projectImg'>
            <div className='projectImg' style={{'backgroundImage': `url(projectsImgs/${fileName})`}}></div>
        </a>
        <div className='projectInfo'>
            <div className='projectHeader'>
                <p>Trabalhos em destaque</p>
                <h2>{name}</h2>
            </div>
            <div className='projectDesc'>
                {desc ? desc.map((e) => (
                    <p key={`${name}${Math.floor(Math.random() * 100)}`}>{e}</p>
                )) : ""}
          
            </div>
        </div>
    </div>
  )
}

export default ProjectContainer
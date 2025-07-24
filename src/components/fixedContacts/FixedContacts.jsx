import "./FixedContacts.css"
import { FaWhatsapp, FaInstagram} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import Data from '../../Const'

//AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

function FixedContacts() {

    AOS.init();

    return (
        <div className="FixedContacts">
            <div className="container">
                <div className="contacts">
                    <a href={Data.WhatsappLink} rel="noreferrer" target="_blank" title="Whatsapp"><FaWhatsapp /></a>
                   <a href={Data.InstaLink} rel="noreferrer" target="_blank" title="Insta"><FaInstagram/></a>
                    <a href={Data.EmailLink} rel="noreferrer" target="_blank" title="Gmail"><MdOutlineEmail /></a>
                </div>
            </div>
        </div>
    );
}

export default FixedContacts;

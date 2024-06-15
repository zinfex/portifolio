import { FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { MdEmail } from "react-icons/md"

import './index.css'

export default function Hero() {
    return (
        <>
            <div id='hero'>
                <div id='title'>
                    <b style={{fontSize: 40}}>👋Hey!, i'm</b> <br /> 
                    <h1>Arthur Rocha</h1> 
                    <span>Fullstack Developer</span>
                </div>

                <div id='avatar'>
                    <img src="avatar.png" alt="avatar" />
                </div>

                <div id='info'>
                    <h2><FaFileDownload /> Baixar CV</h2>
                    <button>Download</button>
                </div>
            </div>
        
            <div id='social'>
                <div id="box-social">
                    <a title="LinkedIn"><FaLinkedinIn className='icon'/></a>
                    <a title="GitHub"><FiGithub className='icon' /></a>
                    <a title="e-mail"><MdEmail className='icon'/></a>
                </div>
            </div>
        </>
    )
}
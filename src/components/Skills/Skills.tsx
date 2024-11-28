// import './index.css'
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr"

export default function Skills() {
    return (
        <div id="skills">
            <h1>Skills principais</h1>
            <ul>
                <li><FaHtml5 size={100} /> <br /> HTML</li>
                <li><FaCss3 size={100} /> <br />CSS</li>
                <li><SiTypescript size={100}/> <br />TYPESCRIPT</li>
                <li><FaJs size={100}/> <br />JAVASCRIPT</li>
                <li><FaReact size={100}/> <br />REACT</li>
                <li><FaNodeJs size={100}/> <br />NODE.JS</li>
                <li><DiMongodb size={100}/> <br />MONGODB</li>
                <li><GrMysql size={100}/> <br />MYSQL</li>
            </ul>
        </div>
    )
}
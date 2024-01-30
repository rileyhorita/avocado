import './Icons.css'
import { FiTwitter } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";



export default function Icons(){
    return (
    <div className="icon-holder">
    <div className= "icons">
    <a href= "https://www.instagram.com/TaylorSwift/"><FaInstagram  style={{color: "black"}}/></a>
    <a href= "https://twitter.com/taylorswift13?lang=en"><FiTwitter style={{color: "black"}}/></a>
    <a href= "https://www.facebook.com/TaylorSwift/"><AiOutlineFacebook style={{color: "black"}}/></a>
    </div>
    </div>
    )
}


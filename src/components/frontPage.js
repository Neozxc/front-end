import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPaperPlane, faSquarePlus, faCompass, faHeart, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./frontPage.css";
import { AddPreset } from "./loadFirst";
import instagramlogo from "./instagram.png";
import { Link } from "react-router-dom";

export const FrontPage = () => {
  return (
    <div>
      <div className="navbar">
        <form className="search">
          <input type="text" placeholder='Search'/><FontAwesomeIcon className="magglass" icon={faMagnifyingGlass}/>
        </form>
        <div className="linetop"></div>
        <a href="#"><img className='instagramlogo' src={instagramlogo} alt="" /></a>
        <ul>
          <li><Link to="/"><FontAwesomeIcon icon={faHome}/></Link></li>
          <li><Link to="/messages"><FontAwesomeIcon icon={faPaperPlane}/></Link></li>
          <li><Link to="/register"><FontAwesomeIcon icon={faSquarePlus}/></Link></li>
          <li><FontAwesomeIcon icon={faCompass}/></li>
          <li><FontAwesomeIcon icon={faHeart}/></li>
        </ul>
        <div className="linebot"></div>
      </div>

      {/* Show image on load */}
      <AddPreset/>
    </div>
  )
};
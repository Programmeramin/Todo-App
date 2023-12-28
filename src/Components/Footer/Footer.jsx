import { Link } from "react-router-dom"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
    
    <footer className="footer">
        <div className="footer-container">
        <div className="logo col-md-4">
        <img src="https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABbB3NTw6bUtZ0kySFp9qsEZAmKTd61m5psZcqQXFcGAa733aIKy-Ep2LsPV0LOu4Uej5H6G9ttPUoKrRu2FBGht01SoKgUfAg8w0vdJIsPRp.png?r=680" />
      </div>

       <div className="middle-menu">
          <ul>
          <ul>
            <li><Link to="/" >HOME</Link></li>
            <li><Link to="/completed" >COMPLETED</Link></li>
            <li><Link to="/pending" >PENDING</Link></li>
            <li><Link to="/deleted" >DELETED</Link></li>
           </ul>
          </ul>
       </div>

       <div className="right-bar">
           <ul>
            <li><Link><FaFacebook/></Link></li>
            <li><Link><FaLinkedin/></Link></li>
            <li><Link><FaXTwitter/></Link></li>

           </ul>
       </div>

        </div>
    </footer>

    </>
  )
}

export default Footer
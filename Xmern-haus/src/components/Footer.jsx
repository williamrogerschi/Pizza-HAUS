import { CardFooter } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";



export default function Footer() {


    return (
    <div className="footer">
      <CardFooter className="footer-card">
        <div className="inner-footer">
        <div className="adham">
          Adham
          <a href="https://www.linkedin.com/in/adham-morsy/" target="_blank"className="linkedin-link">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "white" }}
            />
          </a>
          <a href="https://github.com/adhammorsy75" target="_blank" className="github-link">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "white" }}
            />
          </a>
        </div>
        <div className="billy">
            Billy
          <a href="https://www.linkedin.com/in/billy-rogers-chi/" target="_blank"className="linkedin-link">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "white" }}
            />
          </a>
          <a href="https://github.com/williamrogerschi" target="_blank" className="github-link">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "white" }}
            />
          </a>
        </div>
        <div className="jaim">
          Jaim
          <a href="www.linkedin.com/in/jaimtoledo10" target="_blank" className="linkedin-link">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "white" }}
            />
          </a>
          <a href="https://github.com/jmasterr" target="_blank" className="github-link">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "white" }}
            />
         </a>
        </div>
        <div className="josh">
          Josh
          <a href="https://www.linkedin.com/in/josh-g-hutchison/" target="_blank" className="linkedin-link">
            <FontAwesomeIcon
              icon={faLinkedin}
              size="xl"
              style={{ color: "white" }}
            />
          </a>
          <a href="https://github.com/JoshHutchison" target="_blank" className="github-link">
            <FontAwesomeIcon
              icon={faGithub}
              size="xl"
              style={{ color: "white" }}
            />
          </a>
        </div>
        </div>
        <div className="inner-footer2">
          <div className="footer-section">
            
            <ul className="footer-ul">
              <li><a className="footer-list" href="#">About Us</a></li>
              <li><a className="footer-list" href="#">Contact Us</a></li>
              <li><a className="footer-list" href="#">Advertise</a></li>
              <li><a className="footer-list" href="#" target="_blank">Facebook</a></li>
              <li><a className="footer-list" href="#" target="_blank">Twitter</a></li>
              <li><a className="footer-list" href="#" target="_blank">Instagram</a></li>
            </ul>
          </div>
          </div>
      </CardFooter>
    </div>

  );
}





// const Footer = () => {
//     return (
//         <div className="header-container">
//             <h4>Legal Notice 
//             |  Privacy Policy 
//             |  Cookies Policy 
//              Pizza Haus © 2023 All rights reserved</h4>
//         </div>
//     )
// }

// export default Footer
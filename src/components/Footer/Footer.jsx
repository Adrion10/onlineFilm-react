import "./footer.css";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-right">
        <div className="footer-icons">
          <ul className="social-media">
            <li>
              <a href="https://www.facebook.com/lace.hila/" target="black">
                <i className="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/@LaceHilaj/" target="black">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCE6BaMjiFsC7FUn_g5Bj0Pw/channels"
                target="black"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/lace-hilaj-248509136/"
                target="black"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Adrion10" target="black">
                <i className="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer_left">
        <BiCopyright className="copy" />
        <p>{date} Lace Hilaj</p>
      </div>
    </footer>
  );
};

export default Footer;


import './footer.css'


function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container container">
        <h1 className="footer__title">Mrugank</h1>

        <ul className="footer__list">
          <li className="footer__link">
            <i className="uil uil-map-marker"></i> San Jose, CA
          </li>
          <li className="footer__link">
            <i className="uil uil-phone"></i> +1 (607) 374-0312
          </li>
          <li className="footer__link">
            <i className="uil uil-envelope"></i> mrugank.c@mailjobtech.com
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://github.com/mj301296" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className='bxl  bx-github'  ></i> 
          </a>
          <a href="https://www.linkedin.com/in/mrugankjadhavv/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="bxl bx-linkedin-square" />
          </a>
          <a href="https://www.instagram.com/mrugank_jadhav/" className="footer__social-link" target="_blank" rel="noopener noreferrer">
            <i className="bxl bx-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}


export default Footer

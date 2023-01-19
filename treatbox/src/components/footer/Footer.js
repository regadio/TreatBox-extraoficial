import React from 'react';
import logo2 from '../Icons/LOGOTREATBOXdef.png';
import './footer.css';
function Footer() {
  return (
    <div className="footer">
        <footer>
        <div class="logo2">
            <img src={logo2} alt="Logo2" width="200px"/>
        </div>
        <div class="col1">
            <a href="">Contacto</a>
            <a href="">Términos y privacidad</a>
            <a href="">SiteMap</a>
        </div>
        <div class="col2">
            <a href="">Twitter</a>
            <a href="">Discord</a>
            <a href="">Github</a>

        </div>
        <div class="col3">

        </div>

        <div class="copyr">
            <a href="#">&copy 2022 TreatBox</a>
        </div>
    </footer>
    </div>
  );
}

export default Footer;
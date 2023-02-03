import React from 'react';
import logo2 from '../Icons/LOGOTREATBOXdef.png';
import './footer.css';
import {useLocation} from 'react-router-dom';
function Footer() {
    const location = useLocation();
    return (
        location.pathname !== "/login" && (
            <div className="footer">
                <footer>
                    <div class="logo-footer">
                        <img src={logo2} alt="Logo2" width="200px" />
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
                        <a href="#">© 2022 TreatBox . Reservados todos los derechos. Diseño web: Equipo Azul.</a>
                    </div>
                </footer>
            </div>
        )
    );
}

export default Footer;
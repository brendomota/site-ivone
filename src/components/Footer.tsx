import './Footer.css'

import logoVertical from '../assets/logo/LogoBrancoVertical.png'
import facebook from '../assets/social-media/FecebookIconBranco.png'
import instagram from '../assets/social-media/InstagramIconBranco.png'
import whatsapp from '../assets/social-media/WhatsappIconBranco.png'

function Footer() {
    return (
        <footer>
            <div className="footer-main d-flex flex-column align-items-center text-center">
                <img src={logoVertical} alt="Logo Ivone Vertical" className="footer-logo" />

                <h2 className="footer-title">Artes da Ivone - Costura Criativa</h2>

                <div className="footer-social-icons d-flex justify-content-center">
                    <a href="https://www.instagram.com/artes_da_ivone" className="social-link">
                        <img src={instagram} alt="Instagram" className="social-icon" />
                    </a>
                    <a href="https://wa.me/5512988635412" className="social-link">
                        <img src={whatsapp} alt="WhatsApp" className="social-icon" />
                    </a>
                    <a href="https://www.facebook.com/ivone.tase" className="social-link">
                        <img src={facebook} alt="Facebook" className="social-icon" />
                    </a>
                </div>
            </div>

            <div className="footer-copy text-center">
                © 2025 Ivone | Todos os direitos reservados
            </div>
        </footer>
    )
}

export default Footer

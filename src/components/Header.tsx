import './Header.css'
import logo from '../assets/logo/LogoBrancoHorizontal.png'
import facebook from '../assets/social-media/FecebookIconBranco.png'
import instagram from '../assets/social-media/InstagramIconBranco.png'
import whatsapp from '../assets/social-media/WhatsappIconBranco.png'

function Header() {
    return (
        <header className="header d-flex align-items-center justify-content-between">
            <div className="logo-container">
                <img src={logo} alt="Logo Ivone" className="logo" />
            </div>
            <div className="title-container text-center flex-grow-1">
                <h2 className="header-title m-0">Artes da Ivone - Costura Criativa</h2>
            </div>
            <div className="social-icons d-flex align-items-center">
                <a href="#" className="social-link">
                    <img src={instagram} alt="Instagram" className="social-icon" />
                </a>
                <a href="#" className="social-link">
                    <img src={whatsapp} alt="WhatsApp" className="social-icon" />
                </a>
                <a href="#" className="social-link">
                    <img src={facebook} alt="Facebook" className="social-icon" />
                </a>
            </div>
        </header>
    )
}

export default Header

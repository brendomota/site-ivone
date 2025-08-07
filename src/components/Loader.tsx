import './Loader.css'
import logo from '../assets/logo/CorujaBranco.png'
import agulha from '../assets/logo/AgulhaBranco.png'

function Loader() {
    return (
        <div className="loader-screen">
            <div className="loader-content">
                <img src={logo} alt="Logo Ivone" className="loader-logo" />
                <h1 className="loader-text">
                    <span>I</span>
                    <span>v</span>
                    <span>o</span>
                    <span>n</span>
                    <span>e</span>
                </h1>
                <img src={agulha} alt="Agulha Branca" className="loader-agulha" />
            </div>
        </div>
    )
}

export default Loader

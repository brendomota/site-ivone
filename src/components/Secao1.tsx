import imagemSecao1 from '../assets/imagem-secao1/ImagemSecao1Rosa.png'
import './Secao1.css'

function Secao1() {
    return (
        <section className="secao1 d-flex align-items-center justify-content-between flex-wrap">
            <div className="secao1-imagem">
                <img src={imagemSecao1} alt="Bolsas costuradas" className="img-fluid" />
            </div>
            <div className="secao1-texto">
                <h1 className="secao1-titulo">COSTURA CRIATIVA</h1>
                <p className="secao1-descricao">
                    Cada ponto, um cuidado. Cada peça, uma história feita à mão.
                </p>
                <hr className="secao1-linha" />
                <p className="secao1-descricao">
                    Confira abaixo algumas das criações que já costurei com carinho.
                </p>
                <button className="btn btn-custom mt-4">Entre em Contato</button>
            </div>
        </section>
    )
}

export default Secao1

import './CardsVertical.css'

// Importação das imagens dos ícones
import iconConfianca from '../assets/icons/confiancaIconFundo.png'
import iconQualidade from '../assets/icons/qualidadeIconFundo.png'
import iconExclusividade from '../assets/icons/exclusividadeIconFundo.png'

const cardsInfo = [
    {
        titulo: 'Confiança',
        imagem: iconConfianca,
        alt: 'Ícone Confiança',
        descricao:
            'Peças feitas com dedicação, respeito aos prazos e atenção em cada detalhe.',
    },
    {
        titulo: 'Qualidade',
        imagem: iconQualidade,
        alt: 'Ícone Qualidade',
        descricao:
            'Acabamento impecável, materiais selecionados e costura feita com precisão.',
    },
    {
        titulo: 'Exclusividade',
        imagem: iconExclusividade,
        alt: 'Ícone Exclusividade',
        descricao:
            'Cada criação é única, pensada para valorizar o seu estilo e a sua necessidade.',
    },
]

function CardsVertical() {
    return (
        <section className="cards-vertical d-flex justify-content-between align-items-start flex-wrap">
            {cardsInfo.map((card, index) => (
                <div key={index} className="card-valor text-center">
                    <img
                        src={card.imagem}
                        alt={card.alt}
                        className="icon-card"
                    />
                    <h3 className="titulo-card">{card.titulo}</h3>
                    <p className="texto-card">{card.descricao}</p>
                </div>
            ))}
        </section>
    )
}

export default CardsVertical

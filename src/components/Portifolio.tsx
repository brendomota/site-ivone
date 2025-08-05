import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import "yet-another-react-lightbox/styles.css";
import { slides } from "./data";
import Imagens from "./Imagens";
import './Portifolio.css';

function Portifolio() {
    const [index, setIndex] = useState<number>(-1);
    return (
        <section className="portifolio">  

            <h1 className="portifolio-titulo">PORTFÓLIO</h1>

            <Imagens data = {slides} onClick={(currentIndex) => setIndex(currentIndex)} />

            <Lightbox 
            plugins={[Captions, Zoom, Thumbnails]}
            captions={{ 
                showToggle: true,
                descriptionTextAlign: 'end',
            }}
            index={index}
            open = {index >= 0}
            close={() => setIndex(-1)}
            slides = {slides} 
            />
        </section >
    );
}

export default Portifolio;
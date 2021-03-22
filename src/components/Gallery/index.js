import React from 'react';
import { SRLWrapper } from 'simple-react-lightbox';


import './styles.scss';
import {images} from './data';
import sampleImg from '../../img/gallery01.jpg';


const Gallery = () => {
    return (
        <SRLWrapper>

        <section className="gallery" id="gallery">
            <div>
                <h2 className="heading-primary">Photo Gallery</h2>
            </div>

            <div className="gallery__center">
                    {images.map((image) => {
                        return (
                            <article className="gallery__item" key={image.id}>
                                <a href={image.img}>
                                    <img src={image.img} alt="" className="gallery__img" />
                                </a>
                            </article>
                        )
                    })}
                
            </div>

        </section>
        </SRLWrapper>

    )
}

export default Gallery;

{/* Temporary */}
{/* <article className="gallery__item">
<a href={sampleImg}>
    <img src={sampleImg} alt="" className="gallery__img" />
</a>
</article>
<article className="gallery__item">
<a href={sampleImg}>
    <img src={sampleImg} alt="" className="gallery__img" />
</a>
</article>
<article className="gallery__item">
<a href={sampleImg}>
    <img src={sampleImg} alt="" className="gallery__img" />
</a>
</article>
<article className="gallery__item">
<a href={sampleImg}>
    <img src={sampleImg} alt="" className="gallery__img" />
</a>
</article>
<article className="gallery__item">
<a href={sampleImg}>
    <img src={sampleImg} alt="" className="gallery__img" />
</a>
</article>
<article className="gallery__item">
<a href={sampleImg}>
    <img src={sampleImg} alt="" className="gallery__img" />
</a>
</article>
<article className="gallery__item">
<a href={sampleImg}>
    <img src={sampleImg} alt="" className="gallery__img" />
</a>
</article>
<article className="gallery__item">
<a href={sampleImg}>
    <img src={sampleImg} alt="" className="gallery__img" />
</a>
</article> */}
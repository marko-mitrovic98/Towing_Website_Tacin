import React, { useState, useEffect } from 'react';
import background1 from '../assets/images/backgorund-1.png';
import background2 from '../assets/images/backgorund-2.png';
import background3 from '../assets/images/backgorund-3.png';

const slides = [
    {
        title: 'Šlep služba',
        heading: 'Tacin',
        text: 'Nosivost do 60t',
        image: '/assets/hero1.png',
        background: background1,
    },
    {
        title: 'Dostupni',
        heading: '25/7',
        text: 'Spremni da odgovorimo na poziv bilo kada i bilo gde.',
        image: '/assets/hero2.png',
        background: background2,
    },
    {
        title: 'Iskustvo',
        heading: 'Sigurnost',
        text: 'Naš tim profesionalaca obezbeđuje siguran i bezbedan transport vašeg vozila.',
        image: '/assets/hero3.png',
        background: background3,
    },
];

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 10000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleNext = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsAnimating(false);
        }, 500);
    };

    const handlePrev = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsAnimating(false);
        }, 500);
    };

    const { title, heading, text, image, background } = slides[currentSlide];

    return (
        <section className="section-hero">
            <div className={`section-hero__background-wrapper ${isAnimating ? 'fade-out' : 'fade-in'}`}>
                <img src={background} className="section-hero__background" alt="background" />
            </div>

            <div className="container">
                <div className="row">
                    <div className={`col-6 slide-text ${isAnimating ? 'slide-out' : 'slide-in'}`}>
                        <h2>{title}</h2>
                        <h1>{heading}</h1>
                        <p>{text}</p>
                        <a href="tel:+381694881395" className="btn">
                            Pozovite nas!
                        </a>
                    </div>
                    <div className="col-6">
                        <div className={`section-hero__image ${isAnimating ? 'image-slide-out' : 'image-slide-in'}`}>
                            <img src={image} alt={heading} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="slider-controls">
                            <button className="arrow arrow-left" onClick={handlePrev}>
                                &larr;
                            </button>
                            <button className="arrow arrow-right" onClick={handleNext}>
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

import React, { useState, useEffect } from "react";

const slides = [
    {
        title: "Slep sluzba",
        heading: "Tacin",
        text: "Nosivost do 60t",
        image: "/assets/hero1.png",
    },
    {
        title: "Dostupni",
        heading: "24/7",
        text: "Spremni da odgovorimo na poziv bilo kada i bilo gde.",
        image: "/assets/hero2.png",
    },
    {
        title: "Iskustvo",
        heading: "Sigurnost",
        text: "Naš tim profesionalaca obezbeđuje siguran i bezbedan transport vašeg vozila.",
        image: "/assets/hero3.png",
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

    const { title, heading, text, image } = slides[currentSlide];

    return (
        <section className='section-hero'>
            <div className='container'>
                <div className='row'>
                    <div className={`col-6 slide-text ${isAnimating ? "slide-out" : "slide-in"}`}>
                        <h2>{title}</h2>
                        <h1>{heading}</h1>
                        <p>{text}</p>
                        <a href='tel:+381694881395' className='btn'>
                            Pozovite nas!
                        </a>
                    </div>
                    <div className='col-6'>
                    <div className={`section-hero__image ${isAnimating ? 'image-slide-out' : 'image-slide-in'}`}>
                            <img src={image} alt={heading} />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <div className='slider-controls'>
                            <button className='arrow arrow-left' onClick={handlePrev}>
                                &larr;
                            </button>
                            <button className='arrow arrow-right' onClick={handleNext}>
                                &rarr;
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

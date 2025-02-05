import React, { useState } from 'react';
import { Navbar } from '../Components/Navbar';
import { Socials } from '../Components/Socilas';
import { PageHeading } from '../Components/PageHeading';
import { Footer } from '../Components/Footer';

export const Contact = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleError = () => {
        setIsVisible(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <Socials />
            <Navbar />
            <PageHeading headingText={'Kontakt'} />
            <section className="contactPage">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30266.09932510239!2d20.253689195642796!3d44.400678447998736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a03a4408493cb%3A0x2997035db0b4c1a5!2s%C5%A0lep%20Slu%C5%BEba%20SSM%20TACIN%20LOGISTIC!5e0!3m2!1ssr!2srs!4v1738752626952!5m2!1ssr!2srs"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1>
                                Kontakt <span>Forma</span>
                            </h1>
                            <hr />
                            <form action="submit" onSubmit={handleSubmit}>
                                <input type="text" id="name" name="name" placeholder="Ime i Prezime" required />

                                <input type="email" id="email" name="email" placeholder="E-mail" required />

                                <input type="phone" id="phone" name="phone" placeholder="Telefon" required />

                                <input type="text" id="subject" name="subject" placeholder="Naslov poruke" required />

                                <textarea id="message" name="message" placeholder="Tekst Poruke" required />

                                <button type="submit" className="btn" onClick={toggleError}>
                                    Pošalji
                                </button>
                                {isVisible && <div className='errorMsg'>Greška na serveru, poruka nije poslata.</div>}
                            </form>
                        </div>
                        <div className="col-4">
                            <h1>
                                Kontakt <span>Info</span>
                            </h1>
                            <hr />
                            <ul>
                                <li>
                                    <i className="fa-solid fa-location-dot"></i> Barske Pruge 86, 11550 Lazarevac
                                </li>
                                <li>
                                    <i className="fa-solid fa-phone"></i> 069/48 81 395
                                </li>
                                <li>
                                    <i className="fa-solid fa-envelope"></i> Email@gmail.com
                                </li>
                                <li>
                                    <i class="fa-regular fa-clock"></i> 24 sata, 7 dana u nedelji
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

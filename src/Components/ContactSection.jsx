import React from 'react';
import { Link } from 'react-router-dom';

export const ContactSection = () => {
    return (
        <section className="section-contact">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30266.09932510239!2d20.253689195642796!3d44.400678447998736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a03a4408493cb%3A0x2997035db0b4c1a5!2s%C5%A0lep%20Slu%C5%BEba%20SSM%20TACIN%20LOGISTIC!5e0!3m2!1ssr!2srs!4v1738752626952!5m2!1ssr!2srs"
                            style={{border: "0"}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="col-6">
                    <h1>Pronađi <span>nas</span></h1>
                            <p>
                            Nalazimo se na odličnoj lokaciji u Lazarevcu, što nam omogućava da brzo reagujemo i stignemo do vas u najkraćem roku! Bilo da vam je potreban šlep vozila zbog kvara, nesreće ili transporta, naš tim je dostupan 24/7 da vam pruži sigurnu i pouzdanu uslugu.
                            </p>
                            <h2>Lazarevac</h2>
                            <ul>
                                <li><i className="fa-solid fa-location-dot"></i> Barske Pruge 86, 11550 Lazarevac</li>
                                <li><i className="fa-solid fa-phone"></i> 069/48 81 395</li>
                                <li><i className="fa-solid fa-envelope"></i> ssmtacin@gmail.com</li>
                            </ul>
                            <div className="button">
                                <Link to="/kontakt" className="btn">Kontaktiraj nas</Link>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

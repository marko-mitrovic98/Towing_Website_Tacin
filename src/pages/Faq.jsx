import React from 'react';
import { useState, useEffect } from 'react';
import { Navbar } from '../Components/Navbar';
import { Footer } from '../Components/Footer';
import { PageHeading } from '../Components/PageHeading';
import { Socials } from '../Components/Socilas';

const items = [
    {
        title: 'Kako mogu da pozovem šlep službu?',
        content:
            'Pozovite nas na 069/48 81 395 i naš tim će odmah biti spreman da vam pomogne. Takođe, možete nas kontaktirati putem naše web stranice ili društvenih mreža.',
    },
    {
        title: 'Koje vrste vozila možete da šlepate?',
        content:
            ' Naša služba šlepa sve vrste vozila, uključujući automobile, motocikle, kamione, kombije i teretna vozila. Takođe, prevozimo specijalne i dugačke terete. ',
    },
    {
        title: 'Da li pružate usluge šlepanja 24/7?',
        content:
            'Da, naša šlep služba je dostupna čak 25 sati dnevno, 7 dana u nedelji, tako da možete računati na nas u hitnim situacijama, bilo da je dan ili noć.',
    },
    {
        title: 'Koje su cene šlepanja?',
        content:
            'Cene se razlikuju u zavisnosti od tipa vozila, udaljenosti i specifičnih zahteva transporta. Za tačnu cenu, pozovite nas i pružićemo vam precizan iznos na osnovu vaših potreba.',
    },
    {
        title: 'Da li postoji dodatna naknada za noćne ili vikend usluge?',
        content:
            'Cene se mogu promeniti u zavisnosti od vremena kada pozivate uslugu. Međutim, pružamo transparentne cene, pa ćete biti obavešteni unapred o svim troškovima.',
    },
    {
        title: 'Kako da znam da je moje vozilo sigurno tokom šlepanja?',
        content:
            'Naš tim koristi specijalizovanu opremu i tehnike osiguravanja vozila kako bi obezbedio da vaše vozilo bude sigurno i stabilno tokom celog transporta.',
    },
    {
        title: 'Mogu li da pozovem šlep službu ako moje vozilo nije u saobraćajnoj nezgodi?',
        content:
            'Da, šlep služba je dostupna i za vozila koja nisu u nezgodama, uključujući vozila koja su pokvarena, vozila koja treba premestiti ili transportovati na duže relacije.',
    },
    {
        title: 'Kako da se pripremim pre nego što pozovem šlep službu?',
        content:
            'Prvo, osigurajte da ste u sigurnoj zoni, daleko od saobraćaja. Zatim, pružite informacije o lokaciji, tipu vozila i bilo kojim specifičnim problemima sa vozilom, kako bismo mogli brzo reagovati.',
    },
    {
        title: 'Da li šlepate vozila na velike udaljenosti?',
        content:
            'Da, pružamo usluge šlepanja na velike udaljenosti, kako unutar grada, tako i međugradski. Prevozimo vozila i na dugačkim relacijama uz garanciju bezbednosti tokom transporta.',
    },
    {
        title: 'Da li mogu da pratim gde se nalazi šlep vozilo?',
        content:
            'Trenutno ne pružamo mogućnost praćenja u realnom vremenu, ali naš tim je u stalnom kontaktu sa vama i obavestićemo vas o trenutnom statusu i vremenu dolaska.',
    },
];

export const FaQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
            <Socials />
            <Navbar />
            <PageHeading headingText={'Česta pitanja'} />
            <section className="section-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="accordion">
                                {items.map((item, index) => (
                                    <div key={index} className="accordion-item">
                                        <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                                            <h3>{item.title}</h3>
                                            <span>{activeIndex === index ? '▲' : '▼'}</span>
                                        </div>
                                        <div className={`accordion-content ${activeIndex === index ? 'active' : ''}`}>
                                            {activeIndex === index && <p>{item.content}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

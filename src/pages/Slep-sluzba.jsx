import React from 'react';
import { Navbar } from '../Components/Navbar';
import { Socials } from '../Components/Socilas';
import { PageHeading } from '../Components/PageHeading';
import { GallerySection } from '../Components/GallerySection';
import { Footer } from '../Components/Footer';

export const SlepSluzba = () => {
    return (
        <>
            <Socials />
            <Navbar />
            <PageHeading headingText={'Šlep služba'} />
            <section className="slepContent">
                <div className="container">
                    <div className="row">
                        <div className="col-6 imageDiv">
                            <img src="/assets/tacin (4).jpg" alt="" />
                        </div>
                        <div className="col-6">
                            <h1>
                            Pouzdano šlepovanje <span>svih vozila!</span>
                            </h1>
                            <hr />
                            <p>
                                U situacijama sa saobraćajnim nezgodama, naš tim je tu da pruži brzu i pouzdanu pomoć bez obzira na tip vozila koje treba
                                šlepati. Bilo da se radi o automobilima, motociklima, kamionima ili drugim teretnim vozilima, imamo iskustva i opremu potrebnu
                                za svaki zadatak. Naša stručnost i profesionalizam omogućavaju nam da sigurno prevezemo vaše vozilo bez dodatnih oštećenja, u
                                skladu sa svim standardima bezbednosti. <br /><br /> Kada dođe do nezgode, znamo da je važno brzo reagovati, pa stoga naša ekipa
                                dolazi na lice mesta u najkraćem mogućem roku, 24 sata dnevno, 7 dana u nedelji. U zavisnosti od vrste vozila, koristimo
                                specijalizovanu opremu koja garantuje siguran transport. Ako je u pitanju motocikl, koristimo uređaje koji obezbeđuju njegovu
                                stabilnost i zaštitu tokom transporta. Za teže i veće kamione ili teretna vozila, obezbeđujemo adekvatnu vučnu opremu koja može
                                bezbedno da podnese težinu i dimenzije vozila, garantujući da sve prođe bez problema. <br /><br /> U svakom trenutku, naši vozači su u
                                mogućnosti da prepoznaju specifične potrebe svakog vozila i prilagode način transporta. Naša misija je da vam olakšamo teške
                                trenutke nakon nezgode i osiguramo da vaše vozilo bude prevezeno do željenog odredišta bez ikakvih komplikacija. Svesni smo da
                                je svaki trenutak važan, zbog toga smo tu da pružimo maksimalnu efikasnost i sigurnost. <br /><br />
                                Ponosimo se time što smo uvek dostupni, bez obzira na doba dana ili noći. Naša firma nudi besprekornu uslugu šlepanja i
                                transporta vozila i garantuje da će vaše vozilo biti u sigurnim rukama. Bez obzira gde se nalazite, možete se osloniti na nas za
                                hitnu intervenciju.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Brza reakcija u hitnim situacijama</li>
                                <li>Šlepovanje svih tipova vozila</li>
                                <li>Sigurnost tokom transporta</li>
                                <li>Specijalizovana oprema za motocikle</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Efikasnost i profesionalizam</li>
                                <li>Transport teških vozila i kamiona</li>
                                <li>Dostupnost 24/7</li>
                                <li>Sigurna i pouzdana usluga</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <GallerySection />
            <Footer />
        </>
    );
};

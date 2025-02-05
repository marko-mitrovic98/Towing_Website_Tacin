import React from 'react';
import { Navbar } from '../Components/Navbar';
import { Socials } from '../Components/Socilas';
import { PageHeading } from '../Components/PageHeading';
import { GallerySection } from '../Components/GallerySection';
import { Footer } from '../Components/Footer';

export const Transport = () => {
    return (
        <>
            <Socials />
            <Navbar />
            <PageHeading headingText={'Transport mašina'} />
            <section className="slepContent">
                <div className="container">
                    <div className="row">
                        <div className="col-6  imageDiv">
                            <img src="/assets/tacin (3).jpg" alt="" />
                        </div>
                        <div className="col-6">
                            <h1>
                            Visokokvalitetne usluge<span> transporta</span>
                            </h1>
                            <hr />
                            <p>
                                Naša firma pruža visokokvalitetne usluge transporta mašina, teškog i dugačkog tereta, sa naglaskom na sigurnost i efikasnost. Uz
                                našu specijalizovanu opremu, sposobi smo da obezbedimo siguran transport svih vrsta teških mašina i opreme, bilo da je u pitanju
                                industrijska oprema, građevinske mašine ili bilo koji drugi veliki teret. Naši vozači i tehnički tim imaju bogato iskustvo u
                                transportu specifičnih tereta, što nam omogućava da svaki zadatak obavimo profesionalno i bezbedno. <br /><br /> Kada se radi o transportu
                                dugačkog tereta, naša ekipa koristi specijalizovana vozila i uređaje koji garantuju stabilnost i sigurnost tokom prevoza. Bez
                                obzira na dimenzije tereta, naša vozila su opremljena tako da omoguće nesmetan i siguran transport kroz sve uslove, bilo da je
                                reč o urbanim sredinama ili otežanim saobraćajnim okolnostima. Naš cilj je da se svaki teret preveze u najboljem mogućem stanju,
                                bez obzira na njegovu veličinu. <br /><br /> Sigurnost je naš prioritet u svakom trenutku. Zbog specifičnosti i težine transporta, koristimo
                                najnoviju tehnologiju i opremu kako bi sve prošlo bez incidenata. Naša ekipa obezbeđuje da je teret pravilno osiguran, a svakim
                                transportom upravlja profesionalni tim koji poznaje sve sigurnosne standarde i zakonske regulative. Bez obzira na to da li
                                prevozimo mašine ili dugački teret, možete se osloniti na nas za siguran, efikasan i pravovremen transport.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Visokokvalitetne usluge transporta</li>
                                <li>Specijalizovana oprema za transport</li>
                                <li>Iskusni vozači i tehnički tim</li>
                                <li>Transport dugačkog tereta sa specijalizovanim vozilima</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Bezbednost kao prioritet</li>
                                <li>Pravilno osiguranje tereta</li>
                                <li>Usklađenost sa zakonodavstvom</li>
                                <li>Pouzdanost i pravovremenost</li>
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

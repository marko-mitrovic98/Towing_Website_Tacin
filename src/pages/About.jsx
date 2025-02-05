import React from 'react';
import { Navbar } from '../Components/Navbar';
import { Socials } from '../Components/Socilas';
import { PageHeading } from '../Components/PageHeading';
import { Footer } from '../Components/Footer';

export const About = () => {
    return (
        <>
            <Socials />
            <Navbar />
            <PageHeading headingText={'O Nama'} />
            <section className="sectionAbout">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1>Šlep služba Tacin Lazarevac</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>
                                Šlep služba Tacin je profesionalna i pouzdana kompanija koja se bavi šlepanjem vozila svih vrsta i pružanjem visokokvalitetnih
                                usluga transporta. Naša misija je da pružimo brzo, sigurno i efikasno rešenje za sve hitne situacije koje se tiču vozila. Bilo
                                da je u pitanju šlepanje automobila, motocikala, kamiona ili specijalnih tereta, naš tim stručnjaka je tu da vam pomogne u
                                svakom trenutku, bilo da je reč o saobraćajnoj nezgodi, kvaru na putu ili potrebi za transportom na duže relacije. Naša
                                posvećenost i profesionalnost omogućavaju nam da izgradimo dugoročan odnos poverenja sa svim našim korisnicima. <br />
                                <br /> Kroz godine rada, postigli smo značajan rast i unapređenje usluga, proširujući našu ponudu i opremu. Naša flota vozila
                                sastoji se od modernih šlep vozila i specijalizovanih kamiona, koji omogućavaju siguran transport svih vrsta vozila, od malih
                                automobila do teških kamiona i specijalnih mašina. Pored toga, naši vozači i tehničari su visoko obučeni i imaju bogato
                                iskustvo, što garantuje da će vaše vozilo biti prevezeno bezbedno i efikasno, bez obzira na uslove na terenu.
                            </p>
                        </div>
                        <div className="col-6">
                            <img src="/assets/tacin (1).jpg" alt="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1 className="rightTitle">Pokrivenost teritorije</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img src="/assets/serbia.png" alt="" className="leftImg" />
                        </div>
                        <div className="col-6">
                            <p>
                                Šlep služba Tacin pruža usluge na širokoj teritoriji, obuhvatajući kako urbane, tako i ruralne oblasti. Naša strategija je da
                                budemo dostupni svim korisnicima, bez obzira na to gde se nalaze, i da naša pomoć bude brzo i efikasno pružena. Naša baza se
                                nalazi u Lazarevcu, što nam omogućava da obezbedimo brzu reakciju i dolazak do mesta nezgode ili potrebe za transportom. S
                                obzirom na našu pokrivenost, možemo da intervenišemo u različitim delovima grada, ali i na periferiji, kao i u okolnim naseljima
                                i regijama. <br /> <br /> Bez obzira da li se nalazite u užem gradskom jezgru ili na nekoj manje dostupnoj lokaciji, naši vozači
                                će vas brzo pronaći i pružiti potrebnu pomoć. Usluge su dostupne 24 sata dnevno, 7 dana u nedelji, jer znamo da saobraćajne
                                nezgode i problemi sa vozilima ne biraju vreme. Naš cilj je da u svakoj situaciji pružimo brzu, efikasnu i siguran pomoć, bilo
                                da je u pitanju hitna intervencija ili planirani transport na duže relacije.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <h1>Kvalitet usluge i posvećenost klijentima</h1>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <p>
                                Pored teritorijalne pokrivenosti, naša firma se ponosi i visoko profesionalnim pristupom svakom zadatku. Posvećeni smo pružanju
                                najboljeg korisničkog iskustva, što znači da se svaki klijent tretira sa pažnjom i razumevanjem. Kroz sve godine poslovanja,
                                izgradili smo reputaciju kao kompanija koja je uvek tu kada je najpotrebnije. Naša posvećenost sigurnosti, brzini i kvalitetu
                                usluga nas izdvaja od konkurencije i omogućava nam da pružimo rešenja koja zadovoljavaju sve potrebe naših korisnika.
                            </p>
                        </div>
                        <div className="col-6">
                            <img src="/assets/logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

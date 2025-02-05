import React from 'react';
import { Navbar } from '../Components/Navbar';
import { Socials } from '../Components/Socilas';
import { PageHeading } from '../Components/PageHeading';
import { GallerySection } from '../Components/GallerySection';
import { Footer } from '../Components/Footer';

export const Istorija = () => {
    return (
        <>
            <Socials />
            <Navbar />
            <PageHeading headingText={'Istorija'} />
            <section className="sectionHistory">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src="/assets/tacin (1).jpg" alt="" />
                        </div>
                        <div className="col-1">
                            <label>2020</label>
                        </div>
                        <div className="col-8">
                            <h1>Godina</h1>
                            <p>
                                U prvoj godini rada, postavili smo temelje naše kompanije sa nekoliko ključnih šlepa, specijalizovanih za šlepanje automobila.
                                Stekli smo poverenje lokalnih vozača i mali broj klijenata koji su se vraćali zbog naše profesionalnosti. Ubrzo, kako su potrebe
                                tržišta rasle, proširili smo našu ponudu i počeli da šlepamo i motocikle, kombije i kamione.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <img src="/assets/tacin (2).jpg" alt="" />
                        </div>
                        <div className="col-1">
                            <label>2021</label>
                        </div>
                        <div className="col-8">
                            <h1>Godina</h1>
                            <p>
                                Tokom druge godine, povećali smo našu flotu vozila i proširili područje na kojem smo pružali usluge, uključujući i međugradski
                                transport. Naš tim je prošao dodatnu obuku kako bi mogao da prevozi i specijalne terete, a mi smo se usmerili na pružanje 24/7
                                usluga, čime smo osigurali da budemo tu za naše klijente u svakoj situaciji, u bilo koje doba dana ili noći.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <img src="/assets/tacin (3).jpg" alt="" />
                        </div>
                        <div className="col-1">
                            <label>2022</label>
                        </div>
                        <div className="col-8">
                            <h1>Godina</h1>
                            <p>
                                Treća godina donela je značajan napredak u tehnologiji. Uveli smo novu opremu koja omogućava još brže i sigurnije šlepanje, kao
                                i bolju zaštitu vozila tokom transporta. 
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <img src="/assets/tacin (4).jpg" alt="" />
                        </div>
                        <div className="col-1">
                            <label>2023</label>
                        </div>
                        <div className="col-8">
                            <h1>Godina</h1>
                            <p>
                                Četvrta godina bila je ključna u razvoju naše reputacije. Počeli smo da sarađujemo sa velikim firmama i korporacijama koje su
                                nam poveravale transport svojih teretnih vozila. Naši standardi kvaliteta i brze reakcije postali su prepoznatljivi, čime smo
                                stekli verne i stalne klijente. U tom periodu, proširili smo naše usluge i na prevoz opreme za građevinske i industrijske
                                projekte.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <img src="/assets/tacin (5).jpg" alt="" />
                        </div>
                        <div className="col-1">
                            <label>2024</label>
                        </div>
                        <div className="col-8">
                            <h1>Godina</h1>
                            <p>
                                U petoj godini, naš tim je postao sinonim za kvalitet i sigurnost u industriji šlepanja. Danas, sa proširenom flotom i stručno
                                obučenim osobljem, pružamo kompletnu uslugu prevoza vozila i teških tereta na lokalnom i međugradskom nivou. Naš cilj ostaje
                                isti – da nastavimo da rastemo i pružamo najpouzdaniju pomoć na putu svim našim korisnicima.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <img src="/assets/tacin (6).jpg" alt="" />
                        </div>
                        <div className="col-1">
                            <label>2025</label>
                        </div>
                        <div className="col-8">
                            <h1>Godina</h1>
                            <p>
                                Šestu godinu započinjemo sa novim web sajtom i s ponosom gledamo na 5 godina uspešnog poslovanja, tokom kojih smo izgradili
                                čvrste temelje za još mnogo godina pred nama.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <GallerySection />
            <Footer />
        </>
    );
};

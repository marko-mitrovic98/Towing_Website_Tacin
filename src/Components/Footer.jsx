import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <img src="/assets/logo.png" alt="Slep sluzba tacin logo" />
                            <p>
                                Pružamo brze, sigurne i pouzdane usluge šlepanja vozila 24/7. Bez obzira na kvar, saobraćajnu nezgodu ili potrebu za transportom
                                vozila na duže relacije, naš iskusni tim je uvek spreman da pomogne. Radimo efikasno, povoljno i sa maksimalnom pažnjom prema
                                vašem vozilu.
                            </p>
                            <a href="https://www.instagram.com/slepprevoz_tacin_lazarevac/" target="_blank">
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://www.facebook.com/sasa.markovictacin.3" target="_blank">
                                <i class="fa-brands fa-facebook"></i>
                            </a>
                            <a href="https://www.tiktok.com/@sasamarkovictacin" target="_blank">
                                <i class="fa-brands fa-tiktok"></i>
                            </a>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12">
                                    <h1>
                                        Korisni <span>linkovi</span>
                                    </h1>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
                                    <ul>
                                        <li>
                                            <Link to="/slep-sluzba">
                                                <i class="fa-solid fa-arrow-right"></i>Šlep služba
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/transport-masina">
                                                <i class="fa-solid fa-arrow-right"></i>Transport
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/cesta-pitanja">
                                                <i class="fa-solid fa-arrow-right"></i>Česta pitanja
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul>
                                        <li>
                                            <Link to="/o-nama">
                                                <i class="fa-solid fa-arrow-right"></i>O Nama
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/istorija">
                                                <i class="fa-solid fa-arrow-right"></i>Istorija
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/galerija">
                                                <i class="fa-solid fa-arrow-right"></i>Galerija
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="row">
                                <div className="col-12">
                                    <h1>
                                        Javite <span>se</span>
                                    </h1>
                                    <hr />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <ul>
                                        <li>
                                            <i className="fa-solid fa-location-dot"></i> Barske Pruge 86, 11550 Lazarevac
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-phone"></i> 069/48 81 395
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-envelope"></i> ssmtacin@gmail.com
                                        </li>
                                        <li>
                                            <i class="fa-regular fa-clock"></i> 25 sati, 7 dana u nedelji
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

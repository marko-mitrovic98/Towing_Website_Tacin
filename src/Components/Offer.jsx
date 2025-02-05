import React from 'react';

export const Offer = () => {
    return (
        <section className="section-offer">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src="/assets/truck.png" alt="slep sluzba tacin Lazarevac" />
                    </div>
                    <div className="col-6">
                        <h1>
                            naša <span>ponuda</span>
                        </h1>
                        <h2>efektivan transport</h2>
                        <hr />
                        <p>
                            Pružamo brze, sigurne i pouzdane usluge šlepanja vozila 24/7. Bez obzira na kvar, saobraćajnu nezgodu ili potrebu za transportom
                            vozila na duže relacije, naš iskusni tim je uvek spreman da pomogne. Radimo efikasno, povoljno i sa maksimalnom pažnjom prema vašem
                            vozilu.
                        </p>
                        <ul>
                            <li>Godine iskustva</li>
                            <li>Kratko dolazno vreme</li>
                            <li>Pristupačne cene</li>
                            <li>Prijateljska i profesionalna usluga</li>
                            <li>Dostupni uvek</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

import React from 'react';

export const Stats = () => {
    return (
        <section className="section-stats">
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <img src="/assets/lightball.png" alt="" />
                        <h1>17 520> </h1>
                        <span>Sati iskustva</span>
                    </div>
                    <div className="col-3">
                        <img src="/assets/watch.png" alt="" />
                        <h1>24/7</h1>
                        <span>Dostupnost</span>
                    </div>
                    <div className="col-3">
                        <img src="/assets/truckIcon.png" alt="" />
                        <h1>303</h1>
                        <span>Dostupnih vozila</span>
                    </div>
                    <div className="col-3">
                        <img src="/assets/people.png" alt="" />
                        <h1>303> </h1>
                        <span>Zadvoljnih klijenata</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

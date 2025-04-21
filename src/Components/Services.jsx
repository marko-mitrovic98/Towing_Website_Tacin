import React from 'react';

export const Services = () => {
    return (
        <section className="section-services">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Hitna pomoć</h2>
                        <h1>Naše usluge</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <div className="card-left">
                            <img src="/assets/towing-logo.png" alt="" />
                            <div className="content">
                                <h1>Šlep automobila</h1>
                                <p>Brza, sigurna i pouzdana usluga šlepanja vozila – dostupni 25/7!</p>
                            </div>
                        </div>
                        <div className="card-left">
                            <img src="/assets/motocycle-logo.png" alt="" />
                            <div className="content">
                                <h1>Šlep motocikala</h1>
                                <p>Brzo i sigurno šlepanje motocikala uz maksimalnu pažnju i zaštitu vašeg vozila!</p>
                            </div>
                        </div>
                        <div className="card-left">
                            <img src="/assets/accident-logo.png" alt="" />
                            <div className="content">
                                <h1>Šlep vozila iz nezgode</h1>
                                <p>Brzo i sigurno šlepujemo vozila iz saobraćajnih nezgoda, dostupni 25/7 za vašu hitnu pomoć na putu.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4">
                        <div className="card-right">
                            <img src="/assets/machines-logo.png" alt="" className='mobile'/>
                            <div className="content">
                                <h1>Transport mašina</h1>
                                <p>Pouzdan transport radnih mašina – sigurno, efikasno i na vreme do vaše lokacije!</p>
                            </div>
                            <img src="/assets/machines-logo.png" alt="" className='desktop'/>
                        </div>
                        <div className="card-right">
                            <img src="/assets/objects-logo.png" alt="" className='mobile'/>
                            <div className="content">
                                <h1>Transport teškog tereta</h1>
                                <p>Pouzdano i sigurno vršimo transport teškog tereta uz profesionalnu opremu i iskusne vozače.</p>
                            </div>
                            <img src="/assets/objects-logo.png" alt="" className='desktop'/>
                        </div>
                        <div className="card-right">
                            <img src="/assets/pipes-logo.png" alt="" className='mobile'/>
                            <div className="content">
                                <h1>Transport dugačkog tereta</h1>
                                <p>Pouzdano i sigurno vršimo transport dugačkog tereta, uz profesionalnu opremu.</p>
                            </div>
                            <img src="/assets/pipes-logo.png" alt="" className='desktop'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

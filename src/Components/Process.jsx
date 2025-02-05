import React from 'react';

export const Process = () => {
    return (
        <section className="section-process">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>
                            Naš <span>proces</span>
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <img src="/assets/01call.png" alt="" />
                        <h1>
                            Pozovi<span>01</span>
                        </h1>
                        <p>Stupite u kontakt sa nekim od naših operatera i objasnite problem i vašu situaciju</p>
                    </div>
                    <div className="col-4">
                        <img src="/assets/02wait.png" alt="" />
                        <h1>
                            Sačekaj da dođemo<span>02</span>
                        </h1>
                        <p>Nakon poziva, prvo slobodno vozilo kreće ka vašoj lokaciji, i u zavisnosti od daljine od našeg štaba dolazi u najkraćem mogućem roku</p>
                    </div>
                    <div className="col-4">
                        <img src="/assets/03enjoy.png" alt="" />
                        <h1>
                            Prepusti ostalo nama<span>03</span>
                        </h1>
                        <p>Kada naš tim stigne na dogovoreno mesto kreće sa delovanjem i pružanjem profesionalne usluge</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

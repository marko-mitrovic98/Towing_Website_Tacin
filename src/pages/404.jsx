import React from "react";
import { Navbar } from "../Components/Navbar";
import { Link } from "react-router-dom";

export const Page404 = () => {
    return (
        <>
        <Navbar/>
        <section className="section-missingPage">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img src="/assets/logo.png" alt="slep sluzba layarevac tacin" />
                        <h1><span>404</span> Ova stranica ne postoji</h1>
                        <Link to="/">Vrati se na početnu stranicu</Link>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
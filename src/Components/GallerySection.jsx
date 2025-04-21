import React from 'react';
import { Link } from 'react-router-dom';

export const GallerySection = () => {
    return (
        <section className="section-gallery">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Galerija</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src="/assets/tacin (1).jpg" alt="" />
                        <img src="/assets/tacin (2).jpg" alt="" />
                        <img src="/assets/tacin (3).jpg" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <img src="/assets/tacin (4).jpg" alt="" />
                        <img src="/assets/tacin (5).jpg" alt="" />
                        <img src="/assets/tacin (6).jpg" alt="" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link to="/galerija" class="btn">
                            Sve slike
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

import React, { useState } from 'react';
import { Navbar } from '../Components/Navbar';
import { Socials } from '../Components/Socilas';
import { PageHeading } from '../Components/PageHeading';
import { Footer } from '../Components/Footer';
import { GalleryList } from '../Components/galleryList';

export const GalleryPage = () => {
    let data = GalleryList;
    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');
    const [tempImgIndex, setTempImgIndex] = useState(null);

    const getImg = (index, imgSrc) => {
        setTempImgIndex(index);
        setTempImgSrc(imgSrc);
        setModel(true);
    };

    const handlePlus = () => {
        const newIndex = (tempImgIndex + 1) % data.length;
        setTempImgIndex(newIndex);
        setTempImgSrc(data[newIndex].imgSrc);
    }

    const handleMinus= () => {
        const newIndex = (tempImgIndex - 1 + data.length) % data.length;
        setTempImgIndex(newIndex);
        setTempImgSrc(data[newIndex].imgSrc);
    };

    return (
        <>
            <Socials />
            <Navbar />
            <PageHeading headingText={'Galerija'} />
            <div className={model ? 'model open' : 'model'}>
                <img src={tempImgSrc} alt="" />
                <div onClick={() => setModel(false)}>
                    <i class="fa-solid fa-x"></i>
                </div>
                <div onClick={handleMinus}>
                    <i class="fa-solid fa-caret-left"></i>
                </div>
                <div onClick={handlePlus}>
                    <i class="fa-solid fa-caret-right"></i>
                </div>
            </div>
            <div className="gallery">
                {data.map((item, index) => {
                    return (
                        <>
                            <div className="pictures" key={index} onClick={() => getImg(item.id, item.imgSrc)}>
                                <img src={item.imgSrc} />
                            </div>
                        </>
                    );
                })}
            </div>
            <Footer />
        </>
    );
};

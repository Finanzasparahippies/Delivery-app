"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";

import { useEffect } from "react";
import { ScrollAnimation } from "@common/scrollAnims";

const Hero = ( { type } ) => {
    useEffect(() => {
        ScrollAnimation();
    }, []);

    return (
        <>
            {/* banner */}
            <section className="sb-banner">
                <div className="sb-bg-1">
                <div></div>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                    {/* main title */}
                    <div className="sb-main-title-frame">
                        <div className="sb-main-title">
                        <span className="mb-[30px] inline-block px-0.5 py-[5px] bg-dark-yellow font-bold text-dark-blue">¡Bienvenidos!</span>
                        <h1 className="mb-[30px]">¡Volvimos para consentirte!</h1>
                        <p className="sb-text sb-text-lg sb-mb-30" dangerouslySetInnerHTML={{__html : Data.description}} />

                        {/* button */}
                        <Link href={Data.button1.link} className="sb-btn-inicio">
                            <span className="sb-icon">
                                <img src={Data.button1.icon} alt="icon" />
                            </span>
                            <span>{Data.button1.label}</span>
                        </Link>
                        {/* button end */}
                        {/* button */}
                        <Link href={Data.button2.link} className="sb-btn-cart sb-btn-2 sb-btn-gray">
                            <span className="sb-icon">
                                <img src={Data.button2.icon} alt="icon" />
                            </span>
                            <span>{Data.button2.label}</span>
                        </Link>
                        {/* button end */}
                        </div>
                    </div>
                    {/* main title end */}
                    </div>
                    <div className="col-lg-6">
                        {type == 1 ? (
                        <div className="sb-illustration-1">
                            <img src={Data.image.url} alt={Data.image.alt} className="sb-girl" /> 
                            
                            <div className="sb-cirkle-1"></div>
                            <div className="sb-cirkle-2"></div>
                            <div className="sb-cirkle-3"></div>
                            <div className="sb-cirkle-4"></div>
                            <div className="sb-cirkle-5"></div>

                            <img src="/img/illustrations/3.svg" alt="phones" className="sb-pik-1" />
                            <img src="/img/illustrations/1.svg" alt="phones" className="sb-pik-2" />
                            <img src="/img/illustrations/2.svg" alt="phones" className="sb-pik-3" />
                        </div>
                        ) : (
                        <div className="sb-ilustration-fix">
                            <div className="sb-illustration-1-2">
                                <img src="/img/illustrations/3.jpg" alt="food" className="sb-food-3" style={{borderRadius: "50%", objectFit: "cover", width: "350px", height: "350px"}}/>
                                <img src="/img/illustrations/2.jpg" alt="food" className="sb-food-2" style={{borderRadius: "50%", objectFit: "cover", width: "350px", height: "350px"}}/>
                                <img src="/img/illustrations/1.jpg" alt="food" className="sb-food-1" style={{borderRadius: "50%", objectFit: "cover", width: "350px", height: "350px"}} />
                                    <div className="sb-illu-dialog-1"><span>😋</span> Algo bien...</div>
                                    <div className="sb-illu-dialog-2"><span>🥰</span> ¡Las mejores tortas!</div>
                                    <div className="sb-cirkle-1"></div>
                                    <div className="sb-cirkle-2"></div>
                                    <div className="sb-cirkle-3"></div>
                                    <div className="sb-cirkle-4"></div>
                                    <div className="sb-cirkle-5"></div>
                                <img src="/img/illustrations/3.svg" alt="phones" className="sb-pik-1" />
                                <img src="/img/illustrations/1.svg" alt="phones" className="sb-pik-2" />
                                <img src="/img/illustrations/2.svg" alt="phones" className="sb-pik-3" />
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default Hero;
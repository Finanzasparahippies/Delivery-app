"use client";

import { useEffect, useRef } from "react";
import Data from "@data/sections/promo.json";
import Link from "next/link";

const PromoSection = () => {

    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null); 

    const iconsBanner = [
        { src: "/img/ui/icons/burguer-drink.svg", alt: "burguer-drink" },
        { src: "/img/ui/icons/burguer.svg", alt: "burguer" },
        { src: "/img/ui/icons/chesse.svg", alt: "chesse" },
        { src: "/img/ui/icons/rallador.svg", alt: "rallador" },
        { src: "/img/ui/icons/fries.svg", alt: "logo" },
        // { src: "/img/ui/icons/logo-svg.svg", alt: "fries" },
        { src: "/img/logo-svg.png", alt: "logo" },
        ];

    const repeatIcons = (icons, repeatCount) => {
        const repeatedIcons = [];
        for (let i = 0; i < repeatCount; i++) {
            repeatedIcons.push(...icons);
        }
        return repeatedIcons;
        };
    const repeatedIconsArray = repeatIcons(iconsBanner, 12);

    const positionIcons = (container) => {
        if (!container) return;

        const icons = container.querySelectorAll(".sb-icon2");
        const iconPositions = [];
        const separationBuffer = 3;

        const isOverlapping = (x, y, width, height) => {
        return iconPositions.some((pos) => {
            return !(
            x + width + separationBuffer < pos.x ||
            x > pos.x + pos.width + separationBuffer ||
            y + height + separationBuffer < pos.y ||
            y > pos.y + pos.height + separationBuffer
            );
        });
        };

        icons.forEach((icon) => {
        let randomX, randomY;
        const iconWidth = icon.offsetWidth;
        const iconHeight = icon.offsetHeight;
        let attempts = 0;

        do {
            randomX = Math.random() * (container.offsetWidth - iconWidth);
            randomY = Math.random() * (container.offsetHeight - iconHeight);
            attempts++;
        } while (isOverlapping(randomX, randomY, iconWidth, iconHeight) && attempts < 50);

        iconPositions.push({ x: randomX, y: randomY, width: iconWidth, height: iconHeight });

        icon.style.left = `${randomX}px`;
        icon.style.top = `${randomY}px`;
        });
    };

    useEffect(() => {
        if (containerRef1.current) {
        positionIcons(containerRef1.current);
        }
        if (containerRef2.current) {
        positionIcons(containerRef2.current);
        }
    }, []);


    
  return (
    <>
        {/* promo */}
        <section className="sb-p-0-60">
            <div className="container">
                <div className="row promo-section">
                    <div className="col-lg-6">
                        <div className="sb-promo-frame sb-mb-30">
                            <div className="sb-promo-content" ref={containerRef1}>
                                <div className="sb-text-frame">
                                    <h3 className="sb-mb-10" style={{ color: "#FFF"}}><sup>{Data.banner1.title_before}</sup> <b className="sb-h2">{Data.banner1.title}</b> <sup>{Data.banner1.title_after}</sup></h3>
                                    <h3 className="sb-mb-15" style={{ color: "#FFF"}}>{Data.banner1.subtitle}</h3>
                                    <p className="sb-text sb-text-sm sb-mb-15" style={{ color: "#FFF"}}>{Data.banner1.text}</p>
                                    {/* button */}
                                    <Link href={Data.banner1.button.link} className="sb-btn sb-ppc">
                                        <span className="sb-icon">
                                            <img src="/img/ui/icons/arrow.svg" alt="icon" />
                                        </span>
                                        <span>{Data.banner1.button.label}</span>
                                    </Link>
                                    {/* button end */}
                                </div>
                                <div className="sb-image-frame">
                                    <div className="sb-illustration-4">
                                        <img src="/img/aguas.png" className="sb-burger" />

                                        <div className="sb-cirkle-1"></div>
                                        <div className="sb-cirkle-2"></div>
                                        <div className="sb-cirkle-3"></div>
                                        {repeatedIconsArray.map((icon, key) => (
                                            <img key={key} src={icon.src} alt={icon.alt} className="sb-icon2" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="sb-promo-frame sb-mb-30">
                            <div className="sb-promo-content" ref={containerRef2}>
                                <div className="sb-text-frame">
                                    <h3 className="sb-mb-15" style={{ color: "#FFF"}}>{Data.banner2.subtitle}</h3>
                                    <h3 className="sb-mb-10"><b className="sb-h2" style={{ color: "#FFF"}}>{Data.banner2.title}</b></h3>
                                    <p className="sb-text sb-text-sm sb-mb-15" style={{ color: "#FFF"}}>{Data.banner2.text}</p>
                                    {/* button */}
                                    <Link href={Data.banner2.button.link} className="sb-btn sb-ppc">
                                        <span className="sb-icon">
                                            <img src="/img/ui/icons/arrow.svg" alt="icon" />
                                        </span>
                                        <span>{Data.banner2.button.label}</span>
                                    </Link>
                                    {/* button end */}
                                </div>
                                <div className="sb-image-frame">
                                    <div className="sb-illustration-5">
                                        <img src={"/img/caja-sorpresa.png"} alt={Data.banner2.image.alt} className="sb-cup" />
                                        
                                        <div className="sb-cirkle-1"></div>
                                        <div className="sb-cirkle-2"></div>
                                        <div className="sb-cirkle-3"></div>
                                        {repeatedIconsArray.map((icon, key) => (
                                            <img key={key} src={icon.src} alt={icon.alt} className="sb-icon2" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default PromoSection;
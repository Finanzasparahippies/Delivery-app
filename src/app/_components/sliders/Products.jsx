"use client";

import { SliderProps } from "@common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

import Data from '@data/sliders/products';
import Link from "next/link";

import MenuItem from "@components/menu/MenuItem";
import ProductItem from "@components/products/ProductItem";
import { useEffect, useState } from "react";
import API from "../../utils/API";

const ProductsSlider = ( {button = {}, slidesPerView, paddingTop = 0 } ) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        API.get('/products/product').then( response => {
            setItems(response.data.Tortas);
        }
        ).catch( error => {
            console.log(error);
        });
    }, []);
    var moreType = '';

    if ( slidesPerView == 3 ) {
        moreType = 2;
    }
    
    return (
        <>
        {/* short menu */}
        <section className={`sb-short-menu sb-p-${paddingTop}-90`}>
            <div className="sb-bg-1" style={{"marginTop": "-120px"}}>
                <div></div>
            </div>
            <div className="container">
                <div className="sb-group-title sb-mb-30">
                <div className="sb-left sb-mb-30">
                    <h2 className="sb-mb-30" >Conoce <span className="dark-yellow">nuestras</span> tortas</h2>
                    <p className="sb-text" >Las tortas que estabas buscando, ingredientes frescos y de la mas alta calidad.</p>
                </div>
                <div className="sb-right sb-mb-30">
                    {/* slider navigation */}
                    <div className="sb-slider-nav">
                        <div className="sb-prev-btn sb-short-menu-prev"><i className="fas fa-arrow-left"></i></div>
                        <div className="sb-next-btn sb-short-menu-next"><i className="fas fa-arrow-right"></i></div>
                    </div>
                    {/* slider navigation end */}
                    {/* button */}
                    <Link href={button.link ? button.link : Data.button.link} className="sb-btn">
                        <span className="sb-icon">
                            <img src={button.icon ? button.icon : Data.button.icon} alt="icon" />
                        </span>
                        <span>{button.label ? button.label : Data.button.label}</span>
                    </Link>
                    {/* button end */}
                </div>
                </div>

                {slidesPerView == 4 ? (
                <Swiper
                    {...SliderProps.shortMenuSlider4}
                    className={`swiper-container sb-short-menu-slider-4i`}
                >
                    {items.slice(0, 8).map((item, key) => (
                    <SwiperSlide className="swiper-slide" key={`products-slider-item-${key}`}>
                        <MenuItem item={item} index={key} marginBottom={0} />
                    </SwiperSlide>
                    ))}
                </Swiper>

                ) : (

                <Swiper
                    {...SliderProps.shortMenuSlider3}
                    className={`swiper-container sb-short-menu-slider-3i`}
                >
                    {items.slice(0, 6).map((item, key) => (
                    <SwiperSlide className="swiper-slide" key={`products-slider-item-${key}`}>
                        <MenuItem item={item} index={key} marginBottom={0} />
                    </SwiperSlide>
                    ))}
                </Swiper>

                )}
            </div>
        </section>
        {/* short menu end */}
        </>
    );
};
export default ProductsSlider;

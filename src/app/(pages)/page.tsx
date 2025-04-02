'use client';

import React from "react";
import dynamic from "next/dynamic";

import AppData from "../../data/app.json";
import Products from '../../data/products.json';

import HeroSection from "../../app/_components/sections/Hero";
import AboutTwoSection from "../../app/_components/sections/AboutTwo";
import FeaturesOneSection from "../../data/sections/features.json";
import CallToActionTwoSection from "../../app/_components/sections/CallToActionTwo";

const ProductsSlider = dynamic( () => import("../../app/_components/sliders/Products"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("../../app/_components/sliders/Testimonial"), { ssr: false } );

const metadata = {
  title: {
		default: "Inicio",
	},
  description: AppData.settings.siteDescription,
}

const Home = () => {
  return (
    <>
      <HeroSection type={2} />
      <AboutTwoSection />
      {/* <FeaturesOneSection /> */}
      <ProductsSlider slidesPerView={3} />
      <TestimonialSlider />
      <CallToActionTwoSection/>
    </>
  );
};
export default Home;
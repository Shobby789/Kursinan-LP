import React from "react";
import Hero from "../components/Home/Hero";
import Navbar from "../components/Global/Navbar";
import WhyChooseOuProduct from "../components/Home/WhyChooseOuProduct";
import Products from "../components/Home/Products";
import NewProducts from "../components/Home/NewProducts";
import Reviews from "../components/Global/Reviews";
import Footer from "../components/Global/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WhyChooseOuProduct />
      <Products />
      <NewProducts />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

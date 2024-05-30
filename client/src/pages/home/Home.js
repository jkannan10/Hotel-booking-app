import React from "react";
import "./home.css";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperty from "../../components/featuredProperty/FeaturedProperty";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <Featured />
        <div className="homeTitleContainer">
          <h1 className="homeTitle">Browse By property type</h1>
        </div>
        <PropertyList />
        <div className="homeTitleContainer">
          <h1 className="homeTitle">Homes guests love</h1>
        </div>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;

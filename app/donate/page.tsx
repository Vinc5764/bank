import React from "react";
import Donation from "../api/model/donation.model";
import Header1 from "../components/Header1";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div>
      <Header1 />
      <Donation />
      <Footer />
    </div>
  );
};

export default page;

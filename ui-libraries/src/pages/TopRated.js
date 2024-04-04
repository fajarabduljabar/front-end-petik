import React from "react";
import TableComponent from "../component/Table";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";

const TopRated = () => {
  return (
    <div>
      <NavbarComponent />
      <h1>Top Rated</h1>
      <TableComponent />
      <Footer />
    </div>
  );
};

export default TopRated;

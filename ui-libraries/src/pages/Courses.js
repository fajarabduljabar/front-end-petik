import React from "react";
import NavbarComponent from "../component/Navbar";
import Footer from "../component/Footer";
import CourseCards from "../component/CourseCards";

const TopRated = () => {
  return (
    <div>
      <NavbarComponent />
      <CourseCards />
      <Footer />
    </div>
  );
};

export default TopRated;

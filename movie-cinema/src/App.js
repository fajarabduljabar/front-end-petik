import { Component } from "react";
import Navbar from "./component/Navbar/Navbar.js";
import Car from "./component/Car/Car.js";
import Footer from "./component/Footer/Footer.js";
import User from "./component/User/User.js";
import Main from "./component/Main/Main.js";
import Counter from "./component/Counter/Counter.js";
import AddMovieForm from "./component/AddMovieForm/AddMovieForm.js";


// functionnya di sebut komponen
function App() {
  
  return (
    <div className="container">
      <Navbar />
      <Main/>
      <Footer nama="Fajar Abdul Jabar" />
    </div>
  );
}

export default App;

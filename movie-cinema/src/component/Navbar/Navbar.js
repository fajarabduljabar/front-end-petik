import "./Navbar.css";

// nama komponen harus di awali dengan huruf kapital
const Navbar = () => {
    return (
      <nav className="navbar">
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Login</a></li>
        </ul>
      </nav>
    );
  };

  export default Navbar;
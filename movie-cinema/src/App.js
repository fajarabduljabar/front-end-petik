import { Component } from "react";

// functionnya di sebut komponen
function App() {
  return (
    <div className="App">
      {/* cara manggil komponen ada 2 cara*/}
      {/* pertama */}
      <Header/>
      {/* kedua */}
      {/* <Header></Header> */}
      <h1>Hello World</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        esse inventore velit dignissimos in id itaque illum optio nihil
        consequuntur temporibus eius incidunt ab quis pariatur eligendi veniam,
        distinctio nostrum?
      </p>
      <Footer />
    </div>
  );
}

// nama komponen harus di awali dengan huruf kapital
const Header = () => {
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Login</li>
      </ul>
    </nav>
  )
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <h3>Copyright &copy;2024 Developed by Fajar Abdul Jabar</h3>
        <span>Make with &#10084</span>
      </footer>
    )
  }
}

export default App;

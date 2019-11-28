import React from "react";
import Header from "./Header";
import Footer from "./Footer";
// import logo2 from "./assets/ell.png";
import logos from "./assets/pic1.png"
import "./App.css";


function App() {
  return (
    <div className="App">
      <div>
        <div>
          {/* <img src={logo2} alt="logo" /> */}
          <Header />
        </div>

        <h1>WELLCOME TO ELLESPLACE</h1>
        <h2>NO 1 TECH HUB FOR HER</h2>
        <p style={{ color: "red" }}>**still undergoing construction</p>
      </div>
      <div>
        <h4>Picture Splash</h4>
        {/* <img src ={logos} /> */}
        <div className="img1"></div>
        </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

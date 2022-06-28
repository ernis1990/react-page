import React from "react";
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Nav/>
      <AboutUs/>
      <h1>labaas</h1>
    </div>
  );
}

export default App;

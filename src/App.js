import React from 'react';
import './App.css';
import './bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";

export const AppContext = React.createContext();

function App() {

  return (
    <div className={`App light`}>      
      <NavBar />
      <Banner />
      {/* <Footer /> */}
    </div>
  );
}

export default App;

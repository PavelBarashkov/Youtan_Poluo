import React from "react";
import "./App.css";
import "./style/MainSlider.css";
import { AppRouter } from "./components/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { Footer } from "./modules/Footer/Footer";
import { Menu } from "./modules/Menu";

function App() {
  return (
    <BrowserRouter>
      <div className="app_container w-100 h-100">
        <header className="header">
          <Menu />
        </header>
        <main className="content">
          <AppRouter />
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

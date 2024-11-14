/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import "./assets/css/style.scss";

import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const App = css`
    position: relative;
    font-size: 16px;
    color: #231f20;
    z-index: 0;
  `;
  return (
    <Router>
      <div css={App}>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

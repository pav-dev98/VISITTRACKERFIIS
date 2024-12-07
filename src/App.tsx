import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Nav from "./Nav";
interface AppProps {
  title: string;
}

import "./App.css";
function App({ title }: AppProps) {
  return (
    <div className="">
      <Nav></Nav>
      {title}
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />

        <Route path="/about" element={<AboutPage></AboutPage>} />
      </Routes>
    </div>
  );
}

export default App;

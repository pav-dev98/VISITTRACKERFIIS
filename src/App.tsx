import { Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import InboxPage from "./components/pages/InboxPage";
import VisitPage from "./components/pages/VisitPage";
import LoginPage from "./components/pages/LoginPage";

import Layout from "./components/layout/Layout";

import "./App.css";
import { Navigate } from "react-router-dom";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Navigate to={'login'}/>} />
        <Route path="login" element={<LoginPage />} />
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="inbox" element={<InboxPage />} />
          <Route path="visit" element={<VisitPage />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;

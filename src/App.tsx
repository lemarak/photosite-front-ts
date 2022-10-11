import { useState } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Cookies from "js-cookie";

import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Gallery from "./pages/Gallery/Gallery";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";

import "./conf/axios-conf";
import Outings from "./pages/Outings/Outings";
import Users from "./pages/Users/Users";
import Signup from "./pages/Signup/Signup";

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);
  const [slug, setSlug] = useState(Cookies.get("slug") || null);

  const setUser = (token: string, slug: string): void => {
    if (token) {
      setToken(token);
      setSlug(slug);
      Cookies.set("token", token);
      Cookies.set("slug", slug);
    } else {
      setToken(null);
      setSlug(null);
      Cookies.remove("token");
      Cookies.remove("slug");
    }
  };

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      <Header token={token} setUser={setUser} slug={slug} />
      <div className="flex-fill container d-flex flex-column p-20">
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="outings" element={<Outings />} />
          <Route path="users" element={<Users />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="signup" element={<Signup setUser={setUser} />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

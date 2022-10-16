import { useState } from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Cookies from "js-cookie";

import styles from "./App.module.scss";

import Gallery from "./pages/Gallery/Gallery";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";

import "./conf/axios-conf";
import Outings from "./pages/Outings/Outings";
import Users from "./pages/Users/Users";
import Signup from "./pages/Signup/Signup";
import MainLayout from "./components/MainLayout/MainLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

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

  const mainRoutes = {
    path: "/",
    element: <MainLayout token={token} setUser={setUser} slug={slug} />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Homepage /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/outings", element: <Outings /> },
      { path: "/users", element: <Users /> },
      { path: "/login", element: <Login setUser={setUser} /> },
      { path: "/signup", element: <Signup setUser={setUser} /> },
    ],
  };
  const routing = useRoutes([mainRoutes]);

  return (
    <div className={`d-flex flex-column ${styles.appContainer}`}>
      {routing}

      <Outlet />
    </div>
  );
}

export default App;

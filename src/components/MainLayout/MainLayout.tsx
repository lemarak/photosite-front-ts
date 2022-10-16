import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

export interface IMainLayout {
  token: string | null;
  setUser: (token: string, slug: string) => void;
  slug: string | null;
}

function MainLayout({ token, slug, setUser }: IMainLayout) {
  return (
    <>
      <Header token={token} setUser={setUser} slug={slug} />
      <div className="flex-fill container d-flex flex-column p-20">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default MainLayout;

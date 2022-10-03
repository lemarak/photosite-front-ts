import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import photosite from "../../assets/images/photosite.png";
import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu";

export interface IHeaderProps {}

function Header(props: IHeaderProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <img src={photosite} alt="logo cookchef" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-15 btn btn-reverse-primary">
          <span>Galerie photos</span>
        </button>
        <button className="mr-15 btn btn-reverse-primary">
          <span>Concours</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <FontAwesomeIcon
        onClick={() => setShowMenu(!showMenu)}
        icon={faBars}
        className={`${styles.headerXs} "mr-15"`}
      />
      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenu />
        </>
      )}
    </header>
  );
}

export default Header;

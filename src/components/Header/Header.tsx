import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.scss";
import photosite from "../../assets/images/photosite.png";
import { useState } from "react";
import HeaderMenu from "./components/HeaderMenu";
import { Link } from "react-router-dom";

export interface IHeaderProps {}

function Header(props: IHeaderProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <Link to="/">
          <img src={photosite} alt="logo cookchef" />
        </Link>
      </div>
      <ul className={styles.headerList}>
        <Link to="/gallery">
          <button className="mr-15 btn btn-reverse-primary">
            <span>Galerie photos</span>
          </button>
        </Link>
        <Link to="/outings">
          <button className="mr-15 btn btn-reverse-primary">
            <span>Sorties</span>
          </button>
        </Link>
        <Link to="/users">
          <button className="mr-15 btn btn-reverse-primary">
            <span>Membres</span>
          </button>
        </Link>
        <Link to="/login">
          <button className="btn btn-primary">Connexion</button>
        </Link>
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

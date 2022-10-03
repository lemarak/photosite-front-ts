import { Link } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";

export interface IHeaderMenuProps {}

function HeaderMenu(props: IHeaderMenuProps) {
  return (
    <ul className={`${styles.menuContainer} card p-20`}>
      <Link to="/gallery">
        <li>Galerie photos</li>
      </Link>
      <li>Concours</li>
      <Link to="/login">
        <li>Connexion</li>
      </Link>
    </ul>
  );
}

export default HeaderMenu;

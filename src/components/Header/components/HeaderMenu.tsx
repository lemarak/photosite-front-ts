import styles from "./HeaderMenu.module.scss";

export interface IHeaderMenuProps {}

function HeaderMenu(props: IHeaderMenuProps) {
  return (
    <ul className={`${styles.menuContainer} card p-20`}>
      <li>Galerie photos</li>
      <li>Concours</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;

import styles from "./Homepage.module.scss";

export interface IHomepageProps {}

function Homepage(props: IHomepageProps) {
  return (
    <div className="flex-fill container d-flex flex-column p-20">
      Bienvenue sur PhotoSite
    </div>
  );
}

export default Homepage;

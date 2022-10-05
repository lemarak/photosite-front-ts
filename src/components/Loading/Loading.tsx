import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import styles from "./Loading.module.scss";

export interface ILoadingProps {}

function Loading(props: ILoadingProps) {
  return (
    <div className="d-flex flex-row align-items-center justify-content-center flex-fill">
      <FontAwesomeIcon icon={faSpinner} className={styles.spinner} />
    </div>
  );
}

export default Loading;

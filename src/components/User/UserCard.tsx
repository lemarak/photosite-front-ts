import styles from "./UserCard.module.scss";
import { IUser } from "../../interfaces";
import { userInfo } from "os";

export interface IUserCardProps {
  user: IUser;
}

function UserCard({ user }: IUserCardProps) {
  return (
    <>
      <div className={styles.userCard}>
        <h2 className="mb-20">{user.account.username}</h2>
        <h4>
          {user.account.firstname} {user.account.lastname} ({user.account.city})
        </h4>
      </div>
    </>
  );
}

export default UserCard;

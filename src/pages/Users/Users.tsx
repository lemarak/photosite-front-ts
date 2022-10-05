import { useState } from "react";
import { IUser } from "../../interfaces";
import { useFetchUsers } from "../../hooks";
import styles from "./Users.module.scss";
import Loading from "../../components/Loading/Loading";
import UserCard from "../../components/User/UserCard";

export interface IUsersProps {}

function Users(props: IUsersProps) {
  const [[users, setUsers], countUsers, isLoading, error] = useFetchUsers();

  const usersList = users.map((user: IUser) => (
    <UserCard key={user._id} user={user} />
  ));

  return (
    <>
      <h1 className="my-30">
        Liste des membres <small>({countUsers} membres)</small>
      </h1>
      {error && <span>{error}</span>}
      <div
        className={`${styles.contentCard} card flex-fill d-flex flex-column p-20 mb-20`}
      >
        {isLoading && countUsers ? (
          <Loading />
        ) : (
          <div className={styles.grid}>{usersList}</div>
        )}
      </div>
    </>
  );
}

export default Users;

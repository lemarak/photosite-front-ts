import { useState } from "react";
import { IUser } from "../../interfaces";
import { useFetchUsers } from "../../hooks";
import styles from "./Users.module.scss";
import Loading from "../../components/Loading/Loading";

export interface IUsersProps {}

function Users(props: IUsersProps) {
  const [[users, setUsers], countUsers, isLoading, error] = useFetchUsers();
  console.log("users", users);
  return (
    <>
      <h1 className="my-30">
        Liste des membres <small>({countUsers} membres)</small>
      </h1>
      {error && <span>{error}</span>}
      <ul>
        {isLoading && countUsers ? (
          <Loading />
        ) : (
          users.map((user: IUser) => (
            <li key={user._id}>
              <h2>{user.account.username}</h2>
            </li>
          ))
        )}
      </ul>
    </>
  );
}

export default Users;

import { useState } from "react";
import { IUser } from "../../interfaces";
import { useFetchUsers } from "../../hooks";
import styles from "./Users.module.scss";

export interface IUsersProps {}

function Users(props: IUsersProps) {
  const [[users, setUsers], isLoading, error] = useFetchUsers();
  console.log("users", users);
  return (
    <>
      <h1 className="my-30">
        Liste des membres <small>({users.length} membres)</small>
      </h1>
      {error && <span>{error}</span>}
      <ul>
        {isLoading && !users.length ? (
          <h2>Loading...</h2>
        ) : (
          users.map((user: IUser) => (
            <li key={user._id}>{user.account.username}</li>
          ))
        )}
      </ul>
    </>
  );
}

export default Users;

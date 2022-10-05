import { useEffect, useState } from "react";
import axios from "axios";
import { IGetUsers, IUser } from "../interfaces";

export const useFetchUsers = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [countUsers, setCountUsers] = useState(0);
  const [isLoading, setIsLoading] = useState(true); // Inférence
  const [error, setError] = useState("");

  useEffect((): any => {
    let cancel = false;
    const fetchData = async () => {
      setIsLoading(true);
      setError("");
      try {
        const res = await axios.get<IGetUsers>("/users");
        if (res.status === 200 && !cancel) {
          const data = res.data;
          setUsers(data.users);
          setCountUsers(data.count);
        } else if (!cancel) {
          setError("Ooops, erreur res.status !!!");
        }
      } catch (error) {
        setError("Ooops, erreur catch!!!");
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    return () => (cancel = true);
  }, []);
  return [[users, setUsers], countUsers, isLoading, error] as const;
};

import LoginForm from "./components/LoginForm";
import styles from "./Login.module.scss";

export interface ILoginProps {
  setUser: (token: string, slug: string) => void;
}

function Login({ setUser }: ILoginProps) {
  return (
    <div>
      <h1 className="mb-20">Inscription</h1>
      <LoginForm setUser={setUser} />
    </div>
  );
}

export default Login;

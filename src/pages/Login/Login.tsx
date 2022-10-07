import LoginForm from "./components/LoginForm";
import styles from "./Login.module.scss";

export interface ILoginProps {}

function Login(props: ILoginProps) {
  return (
    <div>
      <h1 className="mb-20">Inscription</h1>
      <LoginForm />
    </div>
  );
}

export default Login;

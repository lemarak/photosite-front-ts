import FormSignup from "./components/FormSignup";
import styles from "./Signup.module.scss";

export interface ISignupProps {}

function Signup(props: ISignupProps) {
  return (
    <div>
      <h1 className="mb-20">Inscription</h1>
      <FormSignup />
    </div>
  );
}

export default Signup;

import FormSignup from "./components/FormSignup";
import styles from "./Signup.module.scss";

interface ISignupProps {
  setUser: (token: string, slug: string) => void;
}

function Signup({ setUser }: ISignupProps) {
  return (
    <div>
      <h1 className="mb-20">Inscription</h1>
      <FormSignup setUser={setUser} />
    </div>
  );
}

export default Signup;

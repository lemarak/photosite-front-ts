import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./FormSignup.module.scss";

export interface IFormSignupProps {}
interface IFormInputs {
  username: string;
  firstname: string;
  lastname: string;
}

function FormSignup(props: IFormSignupProps) {
  const { register, handleSubmit } = useForm<IFormInputs>();
  const onSubmit: SubmitHandler<IFormInputs> = (data, e) =>
    console.log(data, e);
  //   const onError = (errors, e) => console.log(errors, e);

  return (
    <form
      className={`d-flex flex-column card p-20 ${styles.signupForm}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form-group">
        <input
          {...register("username")}
          className="mb-20"
          placeholder="pseudo"
        />
      </div>
      <div className="form-group">
        <input
          {...register("firstname")}
          className="mb-20"
          placeholder="prénom"
        />
      </div>
      <div className="form-group">
        <input {...register("lastname")} className="mb-20" placeholder="nom" />
      </div>
    </form>
  );
}

export default FormSignup;

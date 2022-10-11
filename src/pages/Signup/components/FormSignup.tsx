import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserSignup } from "../../../interfaces";
import styles from "./FormSignup.module.scss";
import axios from "axios";

interface IFormSignupProps {}
interface IFormInputs extends IUserSignup {
  genericError: string;
}

const schema = yup
  .object({
    username: yup
      .string()
      .required("Le pseudonyme est obligatoire")
      .min(4, "Le pseudonyme doit être explicite"),
    email: yup
      .string()
      .email("L'email doit être une adresse valide")
      .required("L'email est obligatoire"),
    password: yup
      .string()
      .required("Le mot de passe est obligatoire")
      .min(6, "Le mot de passe doit comporter au moins 6 caractères"),
  })
  .required();

function FormSignup(props: IFormSignupProps) {
  const defaultValues: IUserSignup = {
    username: "",
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    city: "",
    phone: "",
  };
  const {
    formState: { errors, isSubmitting },
    register,
    handleSubmit,
    clearErrors,
    setError,
    reset,
  } = useForm<IFormInputs>({ defaultValues, resolver: yupResolver(schema) });

  const onSubmit: SubmitHandler<IFormInputs> = async (data, e) => {
    try {
      clearErrors();
      const response = await axios.post("/user/signup", { ...data });
      if (response.status === 200) {
        reset(defaultValues);
      } else {
        setError("genericError", {
          type: "generic",
          message: "Il y a une erreur",
        });
      }
    } catch (error: any) {
      setError("genericError", {
        type: "generic",
        message: error.message,
      });
    }
  };

  return (
    <form
      className={`d-flex flex-column   card p-20 ${styles.signupForm}`}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mb-20">
        <input type="text" {...register("username")} placeholder="pseudo" />
        {errors?.username && (
          <p className="form-error">{errors.username?.message}</p>
        )}
      </div>
      <div className="mb-20">
        <input type="email" {...register("email")} placeholder="email" />
        {errors?.email && <p className="form-error">{errors.email?.message}</p>}
      </div>
      <div className="mb-20">
        <input
          type="password"
          {...register("password")}
          placeholder="mot de passe"
        />
        {errors?.password && (
          <p className="form-error">{errors.password?.message}</p>
        )}
      </div>
      <div className="mb-20">
        <input type="text" {...register("firstname")} placeholder="prénom" />
      </div>
      <div className="mb-20">
        <input type="text" {...register("lastname")} placeholder="nom" />
      </div>
      <div className="mb-20">
        <input type="text" {...register("city")} placeholder="ville" />
      </div>
      <div className="mb-20">
        <input type="text" {...register("phone")} placeholder="téléphone" />
      </div>
      <div>
        {errors?.genericError && (
          <p className="form-error">{errors.genericError?.message}</p>
        )}
        <button disabled={isSubmitting} className={`btn btn-primary `}>
          Inscription
        </button>
      </div>
    </form>
  );
}

export default FormSignup;

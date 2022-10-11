import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUserLogin } from "../../../interfaces";
import styles from "./LoginForm.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

interface ILoginFormProps {
  setUser: (token: string, slug: string) => void;
}

interface IFormInputs extends IUserLogin {
  genericError: string;
}

const schema = yup
  .object({
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

function LoginForm({ setUser }: ILoginFormProps) {
  let navigate = useNavigate();
  const defaultValues: IUserLogin = {
    email: "",
    password: "",
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
      const response = await axios.post("/user/login", { ...data });
      if (response.status === 200) {
        reset(defaultValues);
        setUser(response.data.user.token, response.data.user.account.slug);
        navigate("/");
      } else {
        setError("genericError", {
          type: "generic",
          message: "Il y a une erreur",
        });
      }
    } catch (error: any) {
      const errorStatus = error?.response?.status || null;
      let errorMessage: string;
      if (errorStatus === 403) {
        errorMessage = error.response.data.message || null;
      } else {
        errorMessage = "Erreur connexion";
      }
      setError("genericError", {
        type: "generic",
        message: errorMessage,
      });
    }
  };
  return (
    <form
      className={`d-flex flex-column   card p-20 ${styles.loginForm}`}
      onSubmit={handleSubmit(onSubmit)}
    >
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

      <div>
        {errors?.genericError && (
          <p className="form-error">{errors.genericError?.message}</p>
        )}
        <button disabled={isSubmitting} className={`btn btn-primary `}>
          Connexion
        </button>
      </div>
    </form>
  );
}

export default LoginForm;

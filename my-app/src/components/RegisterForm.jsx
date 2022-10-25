import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};

  const registerOptions = {
    name: { required: "Name is required" },
    email: { required: "Email is required" },
    password: {
      required: "Password is required",
      minLength: {
        value: 8,
        message: "Password must have at least 8 characters"
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(handleRegistration, handleError)}>
      <div>
        <label>Name:</label>
        <input name="name" type="text" {...register('name', registerOptions.name) }/>
          {errors?.name && errors.name.message}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          {...register('email', registerOptions.email)}
        />
          {errors?.email && errors.email.message}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register('password', registerOptions.password)}
        />
          {errors?.password && errors.password.message}
      </div>
      <button>Submit</button>
    </form>
  );
};
export default RegisterForm;
"use client";
import { authenticate } from "@/libs/actions";
import styles from "./loginForm.module.css";
// import { useState } from "react";
import { useFormState } from "react-dom";

export default function LoginForm() {
  const [state, formAction] = useFormState(authenticate, undefined);

  //   const [err, setErr] = useState();
  //   const handleLogin = async (formData) => {
  //     const data = await authenticate(formData);
  //     data.error && setErr(data.error);
  //   };

  return (
    <form action={formAction} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button type="submit">Login</button>
      {state && <p className={styles.error}>{state}</p>}
    </form>
  );
}

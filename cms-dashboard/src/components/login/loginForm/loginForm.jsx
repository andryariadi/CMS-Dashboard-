"use client";
import { authenticate } from "@/libs/actions";
import styles from "./loginForm.module.css";
import { useState } from "react";

export default function LoginForm() {
  const [err, setErr] = useState();
  const handleLogin = async (formData) => {
    const data = await authenticate(formData);
    data.error && setErr(data.error);
  };

  return (
    <form action={handleLogin} className={styles.form}>
      <h1>Login</h1>
      <input type="text" placeholder="Username" name="username" />
      <input type="password" placeholder="Password" name="password" />
      <button type="submit">Login</button>
      {err && <p className={styles.error}>{err}</p>}
    </form>
  );
}

import LoginForm from "@/components/login/loginForm/loginForm";
import styles from "./login.module.css";

export default function LoginPage() {
  return (
    <>
      <div className={styles.container}>
        <LoginForm />
      </div>
    </>
  );
}

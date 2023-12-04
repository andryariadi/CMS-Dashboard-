import stlyes from "./login.module.css";

export default function LoginPage() {
  return (
    <>
      <div className={stlyes.container}>
        <form action="" className={stlyes.form}>
          <h1>Login</h1>
          <input type="text" placeholder="Username" name="username" />
          <input type="password" placeholder="Password" name="password" />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

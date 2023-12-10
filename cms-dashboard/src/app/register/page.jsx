import { register } from "@/libs/actions";
import styles from "./register.module.css";

export default function RegisterPage() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Register</h1>
        <form action={register} className={styles.form}>
          <input type="text" placeholder="Username" name="username" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="password" placeholder="Password" name="password" required />
          <input type="phone" placeholder="Phone" name="phone" />
          <select name="isAdmin" id="isAdmin">
            <option value={false}>Is Admin</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true}>Is Active</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <input type="text" placeholder="Image URL" name="img" />
          <textarea name="address" id="address" rows="2" placeholder="Address"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

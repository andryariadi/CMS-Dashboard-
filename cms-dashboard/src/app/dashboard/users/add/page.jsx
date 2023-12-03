import styles from "./addUser.module.css";

export default function AddUserPage() {
  return (
    <>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Username" name="username" required />
          <input type="email" placeholder="Email" name="email" required />
          <input type="password" placeholder="Password" name="password" required />
          <input type="phone" placeholder="Phone" name="phone" />
          <select name="isAdmin" id="isAdmin">
            <option value={false} selected>
              Is Admin
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true} selected>
              Is Active
            </option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <textarea name="address" id="address" rows="10" placeholder="Address"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

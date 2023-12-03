import Image from "next/image";
import styles from "./detailuser.module.css";
import user from "@/assets/users.png";
export default function DetailUserPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.imgContainer}>
            <Image src={user} alt="User" height={50} width={50} />
            Andry Ariadi
          </div>
        </div>
        <div className={styles.form}>
          <label>Username</label>
          <input type="text" name="username" placeholder="Andry Ariadi" />
          <label>Email</label>
          <input type="email" name="email" placeholder="andryariad23@gmail.com" />
          <label>Password</label>
          <input type="password" name="password" placeholder="********" />
          <label>Phone</label>
          <input type="phone" name="phone" placeholder="123456789" />
          <textarea name="address" id="" cols="30" rows="10" placeholder="Malang City" />
          <label>Is Admin ?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button type="submit">Update</button>
        </div>
      </div>
    </>
  );
}

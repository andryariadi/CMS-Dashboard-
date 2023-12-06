import Image from "next/image";
import styles from "./detailuser.module.css";
import userImg from "@/assets/users.png";
import { fetchDetailUser } from "@/libs/data";
import { updateUser } from "@/libs/actions";
export default async function DetailUserPage({ params }) {
  const { id } = params;
  const user = await fetchDetailUser(id);

  console.log(user, "<----didetailuser page");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.imgContainer}>
            <Image src={user.img || userImg} alt="User" fill />
          </div>
          {user.username}
        </div>
        <div className={styles.formContainer}>
          <form action={updateUser} className={styles.form}>
            <input type="hidden" name="id" value={user.id} />
            <label>Username</label>
            <input type="text" name="username" placeholder={user.username} />
            <label>Email</label>
            <input type="email" name="email" placeholder={user.email} />
            <label>Password</label>
            <input type="password" name="password" placeholder={user.password} />
            <label>Phone</label>
            <input type="phone" name="phone" placeholder={user.phone} />
            <label>Address</label>
            <textarea name="address" id="" cols="30" rows="2" placeholder={user.address} />
            <label>Is Admin ?</label>
            <select name="isAdmin" id="isAdmin">
              <option value={true} selected={user.isAdmin}>
                Yes
              </option>
              <option value={false} selected={!user.isAdmin}>
                No
              </option>
            </select>
            <label>Is Active ?</label>
            <select name="isActive" id="isActive">
              <option value={true} selected={user.isActive}>
                Yes
              </option>
              <option value={false} selected={!user.isActive}>
                No
              </option>
            </select>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

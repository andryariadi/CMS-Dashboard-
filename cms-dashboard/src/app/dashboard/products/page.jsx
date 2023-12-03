import Search from "@/components/dashboard/search/search";
import styles from "./product.module.css";
import Link from "next/link";
import { BsPersonFillAdd } from "react-icons/bs";
import Image from "next/image";
import user from "@/assets/users.png";
import { RiEditFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import Pagination from "@/components/dashboard/pagination/pagination";

export default function ProductPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Search placeholder="Search Products..." />
          <Link href="/dashboard/products/add">
            <button className={styles.btnAdd}>
              <BsPersonFillAdd size={20} />
              User
            </button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Create At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src={user} alt="user" width={40} height={40} className={styles.userImg} />
                  Andry Ariadi
                </div>
              </td>
              <td>andryariadi23@gmail.com</td>
              <td>03.12.2023</td>
              <td>Admin</td>
              <td>active</td>
              <td>
                <div className={styles.btnContainer}>
                  <Link href="/dashboard/users/edit">
                    <button className={`${styles.button} ${styles.edit}`}>
                      <RiEditFill size={20} />
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    <AiFillDelete size={20} />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </>
  );
}

import Search from "@/components/dashboard/search/search";
import styles from "./user.module.css";
import Link from "next/link";
import { BsPersonFillAdd } from "react-icons/bs";

export default function UsersPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Search placeholder="Search Users..." />
          <Link href="/dashboard/users/add">
            <button className={styles.button}>
              <BsPersonFillAdd className={styles.icon} size={20} />
              User
            </button>
          </Link>
        </div>
        <div className={styles.tableContainer}></div>
      </div>
    </>
  );
}

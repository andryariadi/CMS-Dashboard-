import Search from "@/components/dashboard/search/search";
import styles from "./user.module.css";
import Link from "next/link";
import { BsPersonFillAdd } from "react-icons/bs";
import Image from "next/image";
import userAvtr from "@/assets/users.png";
import { RiEditFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import Pagination from "@/components/dashboard/pagination/pagination";
import { fetchUser } from "@/libs/data";
import { deleteUser } from "@/libs/actions";

export default async function UsersPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { users, count } = await fetchUser(q, page);

  // console.log(users.length, "<----diuser page");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Search placeholder="Search Users..." />
          <Link href="/dashboard/users/add">
            <button className={styles.btnAdd}>
              <BsPersonFillAdd size={20} />
              User
            </button>
          </Link>
        </div>
        <div className={styles.tableContainer}>
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
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className={styles.user}>
                      <Image src={user.img || userAvtr} alt="user" width={50} height={50} className={styles.userImg} />
                      {user.username}
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>{user.createdAt?.toString().slice(4, 15)}</td>
                  <td>{user.isAdmin ? "Admin" : "User"}</td>
                  <td>{user.isActive ? "Active" : "Passive"}</td>
                  <td>
                    <div className={styles.btnContainer}>
                      <Link href={`/dashboard/users/${user.id}`}>
                        <button className={`${styles.button} ${styles.edit}`}>
                          <RiEditFill size={20} />
                          View
                        </button>
                      </Link>
                      <form action={deleteUser}>
                        <input type="hidden" name="id" value={user.id} />
                        <button type="submit" className={`${styles.button} ${styles.delete}`}>
                          <AiFillDelete size={20} />
                          Delete
                        </button>
                      </form>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination count={count} />
      </div>
    </>
  );
}

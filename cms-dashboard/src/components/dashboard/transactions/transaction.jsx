import styles from "./transaction.module.css";
import Image from "next/image";
import user from "@/assets/users.png";

export default function Transaction() {
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Latest Transactions</h2>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Name</td>
              <td>Status</td>
              <td>Date</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src={user} alt="users" width={50} height={50} className={styles.userImg} />
                  Andry Ariadi
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.pending}`}>Pending</span>
              </td>
              <td>02.12.2023</td>
              <td>$2.300</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src={user} alt="users" width={50} height={50} className={styles.userImg} />
                  Andry Ariadi
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.done}`}>Done</span>
              </td>
              <td>02.12.2023</td>
              <td>$2.300</td>
            </tr>
            <tr>
              <td>
                <div className={styles.user}>
                  <Image src={user} alt="users" width={50} height={50} className={styles.userImg} />
                  Andry Ariadi
                </div>
              </td>
              <td>
                <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
              </td>
              <td>02.12.2023</td>
              <td>$2.300</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

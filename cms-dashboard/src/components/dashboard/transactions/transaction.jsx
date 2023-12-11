import styles from "./transaction.module.css";
import Image from "next/image";
import user from "@/assets/users.png";
import { fetchAllTransaction } from "@/libs/data";

export default async function Transaction() {
  const transactions = await fetchAllTransaction();

  // console.log(transactions, "<----dashboard page");
  return (
    <>
      <div className={styles.container}>
        <h2 className={styles.title}>Latest Transactions</h2>
        <div className={styles.tableContainer}>
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
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>
                    <div className={styles.user}>
                      <Image src={user} alt="users" width={50} height={50} className={styles.userImg} />
                      Andry Ariadi
                    </div>
                  </td>
                  <td>
                    <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                  </td>
                  <td>{transaction.bucket_start_date.toString().slice(4, 15)}</td>
                  <td>$2.300</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

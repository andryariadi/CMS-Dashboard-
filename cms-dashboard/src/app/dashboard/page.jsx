import Card from "@/components/dashboard/card/card";
import styles from "./dashboard.module.css";
import Rightbar from "@/components/dashboard/rightbar/rightbar";
import Transaction from "@/components/dashboard/transactions/transaction";
import Chart from "@/components/dashboard/chart/chart";
import { fetchAllProduct, fetchAllTransaction, fetchAllUser } from "@/libs/data";

export default async function Dashboard() {
  const users = await fetchAllUser();
  const products = await fetchAllProduct();
  const transactions = await fetchAllTransaction();

  console.log(users.length, products.length, transactions.length, "<----dashboard page");
  console.log(transactions, "<----dashboard page");
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.card}>
            <Card items={users.length} title="Total Users" />
            <Card items={products.length} title="Total Products" />
            <Card items={transactions.length} title="Total Transactions" />
          </div>
          <Transaction />
          <Chart />
        </div>
        <div className={styles.rightbar}>
          <Rightbar />
        </div>
      </div>
    </>
  );
}

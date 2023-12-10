import Card from "@/components/dashboard/card/card";
import styles from "./dashboard.module.css";
import Rightbar from "@/components/dashboard/rightbar/rightbar";
import Transaction from "@/components/dashboard/transactions/transaction";
import Chart from "@/components/dashboard/chart/chart";
import { fetchAllProduct, fetchAllUser } from "@/libs/data";

export default async function Dashboard() {
  const users = await fetchAllUser();
  const products = await fetchAllProduct();

  console.log(users.length, products.length, "<----dashboard page");
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.card}>
            <Card items={users.length} title="Total Users" />
            <Card items={products.length} title="Total Products" />
            <Card />
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

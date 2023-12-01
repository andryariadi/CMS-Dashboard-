import Card from "@/components/dashboard/card/card";
import styles from "./dashboard.module.css";
import Rightbar from "@/components/dashboard/rightbar/rightbar";
import Transaction from "@/components/dashboard/transactions/transaction";
import Chart from "@/components/dashboard/chart/chart";

export default function Dashboard() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.card}>
            <Card />
            <Card />
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

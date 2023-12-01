import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";
export default function Card() {
  return (
    <>
      <div className={styles.container}>
        <MdSupervisedUserCircle />
        <div className={styles.texts}>
          <span className={styles.titleUser}>Total Users</span>
          <span className={styles.value}>10.273</span>
          <span className={styles.detail}>
            <span className={styles.positive}>12%</span>
            more than previous week
          </span>
        </div>
      </div>
    </>
  );
}

import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

export default async function Card({ items, title }) {
  // console.log(items, "<--- items card");
  return (
    <>
      <div className={styles.container}>
        <MdSupervisedUserCircle />
        <div className={styles.texts}>
          <span className={styles.titleUser}>{title}</span>
          <span className={styles.value}>{items}</span>
          <span className={styles.detail}>
            <span className={styles.positive}>12%</span>
            more than previous week
          </span>
        </div>
      </div>
    </>
  );
}

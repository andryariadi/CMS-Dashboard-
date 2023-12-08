import Chart1 from "./chart1/chart1";
import Chart2 from "./chart2/chart2";
import styles from "./rightbar.module.css";
// import Image from "next/image";
// import astronaut from "@/assets/astronaut.png";
// import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

export default function Rightbar() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.item}>
          <Chart1 />
          {/* <div className={styles.bgImage}>
            <Image src={astronaut} alt="astro" fill className={styles.image} />
          </div>
          <div className={styles.texts}>
            <span className={styles.notification}>🔥 Available Now</span>
            <h3 className={styles.title}>How to use the new version of the admin dashboard?</h3>
            <span className={styles.subtitle}>Takes 4 minutes to learn</span>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.</p>
            <button className={styles.button}>
              <MdPlayCircleFilled />
              Watch
            </button>
          </div> */}
        </div>
        <div className={styles.item}>
          <Chart2 />
          {/* <div className={styles.texts}>
            <span className={styles.notification}>🚀 Coming Soon</span>
            <h3 className={styles.title}>New server actions are available, partial pre-rendering is coming up!</h3>
            <span className={styles.subtitle}>Boost your productivity</span>
            <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit eius libero perspiciatis recusandae possimus.</p>
            <button className={styles.button}>
              <MdReadMore />
              Learn
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
}

import Image from "next/image";
import styles from "./home.module.css";
import welcome from "@/assets/welcome.svg";
import Link from "next/link";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaUserEdit } from "react-icons/fa";

export default function HomeComponent() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={welcome} alt="welcome" className={styles.image} />
        </div>
        <div className={styles.iconContainer}>
          <Link href="/login" className={styles.login}>
            <RiLoginCircleFill size={24} />
            Login
          </Link>
          <Link href="/registeruser" className={styles.register}>
            <FaUserEdit size={24} />
            Register
          </Link>
        </div>
      </div>
    </>
  );
}

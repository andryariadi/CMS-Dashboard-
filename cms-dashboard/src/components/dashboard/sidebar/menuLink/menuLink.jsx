"use client";
import Link from "next/link";
import styles from "./menuLink.module.css";
import { usePathname } from "next/navigation";

export default function MenuLink({ listItem }) {
  const pathName = usePathname();

  return (
    <Link href={listItem.path} className={`${styles.container} ${pathName === listItem.path ? styles.active : ""}`}>
      {listItem.icon}
      {listItem.title}
    </Link>
  );
}

"use client";
import styles from "./pagination.module.css";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function Pagination({ count }) {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const page = searchParam.get("page") || 1;

  const params = new URLSearchParams(searchParam);

  const ITEM_PER_PAGE = 2;

  const handlePrev = ITEM_PER_PAGE * parseInt(page - 1) > 0;
  const handleNext = ITEM_PER_PAGE * parseInt(page - 1) + ITEM_PER_PAGE < count;

  const handleChanePage = (type) => {
    type === "prev" ? params.set("page", parseInt(page) - 1) : params.set("page", parseInt(page) + 1);
    replace(`${pathName}?${params.toString()}`);
  };

  return (
    <>
      <div className={styles.container}>
        <button className={styles.button} disabled={!handlePrev} onClick={() => handleChanePage("prev")}>
          Prev
        </button>
        <button className={styles.button} disabled={!handleNext} onClick={() => handleChanePage("next")}>
          Next
        </button>
      </div>
    </>
  );
}

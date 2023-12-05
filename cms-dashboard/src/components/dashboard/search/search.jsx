"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import styles from "./search.module.css";
import { MdSearch } from "react-icons/md";
export default function Search({ placeholder }) {
  const searchParam = useSearchParams();
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleSearch = (e) => {
    const params = new URLSearchParams(searchParam);

    if (e.target.value) {
      params.set("q", e.target.value);
    } else {
      params.delete("q");
    }

    replace(`${pathName}?${params.toString()}`);
  };

  console.log({ searchParam, pathName }, "<----disearchhh");

  return (
    <div className={styles.container}>
      <MdSearch />
      <input type="text" placeholder={placeholder} className={styles.input} onChange={handleSearch} />
    </div>
  );
}

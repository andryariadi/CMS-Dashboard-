import Search from "@/components/dashboard/search/search";
import styles from "./product.module.css";
import Link from "next/link";
import { BsFillCartPlusFill } from "react-icons/bs";
import Image from "next/image";
import product from "@/assets/noproduct.jpg";
import { RiEditFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import Pagination from "@/components/dashboard/pagination/pagination";

export default function ProductPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <Search placeholder="Search Products..." />
          <Link href="/dashboard/products/add">
            <button className={styles.btnAdd}>
              <BsFillCartPlusFill size={20} />
              Product
            </button>
          </Link>
        </div>
        <table className={styles.table}>
          <thead>
            <tr>
              <td>Title</td>
              <td>Description</td>
              <td>Price</td>
              <td>Created At</td>
              <td>Stock</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className={styles.product}>
                  <Image src={product} alt="product" width={50} height={50} className={styles.productImg} />
                  iPhone
                </div>
              </td>
              <td>Lorem ipsum dolor sit amet.</td>
              <td>$1234</td>
              <td>03.12.2023</td>
              <td>23</td>
              <td>
                <div className={styles.btnContainer}>
                  <Link href="/dashboard/products/edit">
                    <button className={`${styles.button} ${styles.edit}`}>
                      <RiEditFill size={20} />
                      View
                    </button>
                  </Link>
                  <button className={`${styles.button} ${styles.delete}`}>
                    <AiFillDelete size={20} />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pagination />
      </div>
    </>
  );
}

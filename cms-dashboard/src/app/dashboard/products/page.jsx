import Search from "@/components/dashboard/search/search";
import styles from "./product.module.css";
import Link from "next/link";
import { BsFillCartPlusFill } from "react-icons/bs";
import Image from "next/image";
import productImg from "@/assets/noproduct.jpg";
import { RiEditFill } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";
import Pagination from "@/components/dashboard/pagination/pagination";
import { fetchProduct } from "@/libs/data";

export default async function ProductPage({ searchParams }) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { products, count } = await fetchProduct(q, page);

  console.log(products, "<----diproduct page");
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
          {products.map((product) => (
            <tbody>
              <tr key={product.id}>
                <td>
                  <div className={styles.product}>
                    <Image src={product.img || productImg} alt="product" width={50} height={50} className={styles.productImg} />
                    {product.title}
                  </div>
                </td>
                <td>{product.description}</td>
                <td>$ {product.price}</td>
                <td>{product.createdAt?.toString().slice(4, 15)}</td>
                <td>{product.stock}</td>
                <td>
                  <div className={styles.btnContainer}>
                    <Link href={`/dashboard/products/${product.id}`}>
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
          ))}
        </table>
        <Pagination count={count} />
      </div>
    </>
  );
}

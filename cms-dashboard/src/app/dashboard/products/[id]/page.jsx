import Image from "next/image";
import styles from "./detailproduct.module.css";
import productImg from "@/assets/noproduct.jpg";
import { fetchDetailProduct } from "@/libs/data";
import { updateProduct } from "@/libs/actions";
export default async function DetailProductPage({ params }) {
  const { id } = params;
  const product = await fetchDetailProduct(id);

  // console.log(product, "<----didetailproduct page");

  return (
    <>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.imgContainer}>
            <Image src={product.img || productImg} alt="User" fill />
          </div>
          {product.title}
        </div>
        <div className={styles.formContainer}>
          <form action={updateProduct} className={styles.form}>
            <input type="hidden" name="id" value={product.id} />
            <label>Title</label>
            <input type="text" name="title" placeholder={product.title} />
            <label>Price</label>
            <input type="number" name="price" placeholder={product.price} />
            <label>Stock</label>
            <input type="number" name="stock" placeholder={product.stock} />
            <label>Color</label>
            <input type="text" name="color" placeholder={product.color} />
            <label>Size</label>
            <input type="text" name="size" placeholder={product.size} />
            <label>Category</label>
            <select name="category" id="category">
              <option value="general">Choose Category</option>
              <option value="electronic" selected={product.category}>
                Electronic
              </option>
              <option value="men clothing" selected={product.category}>
                Men clothing
              </option>
              <option value="women clothing" selected={product.category}>
                Women clothing
              </option>
            </select>
            <label>Description</label>
            <textarea name="description" id="description" rows="2" placeholder={product.description}></textarea>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

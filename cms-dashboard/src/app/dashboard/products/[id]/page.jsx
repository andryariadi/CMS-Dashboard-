import Image from "next/image";
import styles from "./detailproduct.module.css";
import product from "@/assets/noproduct.jpg";
export default function DetailProductPage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.user}>
          <div className={styles.imgContainer}>
            <Image src={product} alt="User" fill />
          </div>
          iPhone
        </div>
        <div className={styles.formContainer}>
          <form action="" className={styles.form}>
            <label>Title</label>
            <input type="text" name="title" placeholder="Andry Ariadi" />
            <label>Price</label>
            <input type="number" name="price" placeholder="andryariad23@gmail.com" />
            <label>Stock</label>
            <input type="number" name="stock" placeholder="********" />
            <label>Color</label>
            <input type="text" name="color" placeholder="123456789" />
            <label>Size</label>
            <input type="text" name="size" placeholder="123456789" />
            <label>Category</label>
            <select name="category" id="category">
              <option value="general">Choose Category</option>
              <option value="electronic">Electronic</option>
              <option value="men's clothing">Men's clothing</option>
              <option value="women's clothing">Women's clothing</option>
            </select>
            <label>Description</label>
            <textarea name="description" id="description" rows="2"></textarea>
            <button type="submit">Update</button>
          </form>
        </div>
      </div>
    </>
  );
}

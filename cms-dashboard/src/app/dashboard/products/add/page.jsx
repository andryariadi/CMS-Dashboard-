import { addProduct } from "@/libs/actions";
import styles from "./addProduct.module.css";

export default function AddProductPage() {
  return (
    <>
      <div className={styles.container}>
        <form action={addProduct} className={styles.form}>
          <input type="text" placeholder="Title" name="title" required />
          <select name="category" id="category">
            <option value="general">Choose Category</option>
            <option value="electronic">Electronic</option>
            <option value="men's clothing">Men's clothing</option>
            <option value="women's clothing">Women's clothing</option>
          </select>
          <input type="number" placeholder="Price" name="price" required />
          <input type="number" placeholder="Stock" name="stock" required />
          <input type="text" placeholder="Color" name="color" required />
          <input type="text" placeholder="Size" name="size" required />
          <textarea name="description" id="description" rows="10" placeholder="Description"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

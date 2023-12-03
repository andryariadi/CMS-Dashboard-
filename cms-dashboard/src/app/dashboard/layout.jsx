import Navbar from "@/components/dashboard/navbar/navbar";
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import Footer from "@/components/dashboard/footer/footer";
import styles from "./dashboard.module.css";

export default function DashboardLayout({ children }) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.navbar}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </div>
    </>
  );
}

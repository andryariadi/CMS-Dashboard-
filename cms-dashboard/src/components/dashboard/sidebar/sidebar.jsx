import Image from "next/image";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import { MdDashboard, MdSupervisedUserCircle, MdShoppingBag, MdAttachMoney, MdWork, MdAnalytics, MdPeople, MdOutlineSettings, MdHelpCenter, MdLogout } from "react-icons/md";
import userImg from "@/assets/users.png";
import { auth, signOut } from "@/app/auth";
import { authUserSession } from "@/libs/auth-libs";
import Link from "next/link";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />,
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />,
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];
export default async function Sidebar() {
  // const session = await auth();

  // console.log(session, "<----- session sidebar");

  const user = await authUserSession();

  const actionUrl = user ? "/api/auth/signout" : null;

  console.log(user, "<----- user sidebar");
  return (
    <>
      <div className={styles.container}>
        <div className={styles.user}>
          <Image className={styles.userImage} src={user?.image || userImg} alt="users" width={50} height={50} />
          <div className={styles.userDetail}>
            <span className={styles.userName}>{user?.name}</span>
            <span className={styles.userRole}>{user?.isAdmin ? "Admin" : "User"}</span>
          </div>
        </div>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.title}>
              <span className={styles.list}>{item.title}</span>
              {item.list.map((listItem) => (
                <MenuLink key={listItem.title} listItem={listItem} />
              ))}
            </li>
          ))}
        </ul>
        <Link href={actionUrl} className={styles.logout}>
          <MdLogout />
          Logout
        </Link>
      </div>
    </>
  );
}

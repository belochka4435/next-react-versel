import styles from "../styles/index.module.css";
import A from "../components/A.js";
import Link from "next/link";

function MainContainer({ children, keywords }) {
  return (
    <>
      <head>
        <meta keywords={"bennad-po" + keywords}></meta>
        <title>CRM-bennad-po</title>
      </head>
      <div className={styles.navbar}>
        {" "}
        {/* Apply styles from the CSS Module */}
        <img src="/ph.jpg" alt="Logo" className={styles["logo-image"]} />
        <ul className={styles["nav-links"]}>
          <A href={"/"} text="Главная" />
          <A href={"/users/users"} text="Пользователи" />
          <li>
            <Link href="/orders" className={styles.link}>
              Заказы
            </Link>
          </li>
          <li>
            <Link href="/products" className={styles.link}>
              Товары
            </Link>
          </li>
        </ul>
      </div>
      <div>{children}</div>
    </>
  );
}

export default MainContainer;

import Link from "next/link";
import styles from "../styles/index.module.css";

export default function ({ text, href }) {
  return (
    <li>
      <Link href={href} className={styles.link}>
        {text}
      </Link>
    </li>
  );
}

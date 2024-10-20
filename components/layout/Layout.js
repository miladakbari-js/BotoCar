import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>BOTOCAR</h2>
          <p>Choose and Buy your Car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        developed by Milad Akbari |{" "}
        <Link
          href="https://www.linkedin.com/in/milad-akbari-developer/"
          target="_blank"
        >
          Go to Linkdein
        </Link>
      </footer>
    </>
  );
}

export default Layout;

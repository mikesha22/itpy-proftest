import Image from "next/image";
import Link from "next/link";

import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} href="/" aria-label="itpy — главная страница">
        <Image
          className={styles.logoImage}
          src="/branding/itpy-logo.png"
          alt="itpy"
          width={480}
          height={480}
          priority
        />
      </Link>

      <div className={styles.socialBlock}>
        <Image
          className={styles.socialImage}
          src="/branding/itpy-socials.png"
          alt="YouTube, Telegram и VK — informatika_kege_itpy"
          width={1162}
          height={128}
          priority
        />
      </div>
    </header>
  );
}

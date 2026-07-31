import Image from "next/image";
import Link from "next/link";

import styles from "./SiteHeader.module.css";

const TELEGRAM_CHANNEL_URL = "https://t.me/informatika_kege_itpy";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link className={styles.logoLink} href="/" aria-label="itpy — на главную страницу">
          <Image
            className={styles.logoImage}
            src="/branding/itpy-logo.png"
            alt="itpy"
            width={720}
            height={720}
            priority
          />
        </Link>

        <a
          className={styles.socialLink}
          href={TELEGRAM_CHANNEL_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Открыть Telegram-канал informatika_kege_itpy"
        >
          <Image
            className={styles.socialImage}
            src="/branding/itpy-socials.png"
            alt="YouTube, Telegram и VK — informatika_kege_itpy"
            width={1248}
            height={194}
            priority
          />
        </a>
      </div>
    </header>
  );
}

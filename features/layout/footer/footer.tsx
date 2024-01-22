import styles from "./footer.module.scss";
import Link from "next/link";
import packageJson from "../../../package.json"; // Import package.json directly

const footerLinks = [
  { text: "Docs", href: "#" },
  { text: "API", href: "#" },
  { text: "Help", href: "#" },
  { text: "Community", href: "#" },
];

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.version}>
        {"Version: " + packageJson.version || "Version unavailable"}
      </div>
      <div className={styles.links}>
        {footerLinks.map((item) => (
          <Link key={item.text} href={item.href}>
            {item.text}
          </Link>
        ))}
      </div>
      <div className={styles.logo}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={"/icons/logo-small.svg"} alt="logo" />
      </div>
    </div>
  );
}

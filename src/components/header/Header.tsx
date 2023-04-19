import Image from "next/image";
import { Inter } from "next/font/google";
import classes from "./Header.module.css";

const inter = Inter({ subsets: ["latin"] });

 const items = [
   { label: "Home", icon: "pi pi-fw pi-home" },
   { label: "Calendar", icon: "pi pi-fw pi-calendar" },
   { label: "Edit", icon: "pi pi-fw pi-pencil" },
   { label: "Documentation", icon: "pi pi-fw pi-file" },
   { label: "Settings", icon: "pi pi-fw pi-cog" },
 ];

export const Header = () => {
  return (
  <div className={classes.header}>
    <Image
      src="/app-logo.svg"
      alt="App Logo"
      className={classes.vercelLogo}
      width={100}
      height={24}
      priority
    />
    <h1 className={inter.className}>E-commerce application</h1>
    <div className={classes.links}>
      <a
        href="/login"
        className={classes.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        Login
      </a>
      <a
        href="/cart"
        className={classes.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        Cart
      </a>
    </div>
  </div>
)};

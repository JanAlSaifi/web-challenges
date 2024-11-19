import "./styles.css";

import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Link } from "./components/Link";
//import { Image } from "./components/Image";
import { Avatar } from "./components/Avatar";
import { Logo } from "./components/Logo";

export default function App() {
  return (
    <>
      <Header className="header">
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}

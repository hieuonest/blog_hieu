import Profile from "./Profile";
import DarkMode from "./DarkMode";
import NavbarMenu from "./NavbarMenu";
import FooterMenu from "./FooterMenu";

export default function Menu({ refScreen, mode, setMode }) {
  return (
    <nav>
      <Profile />
      <DarkMode setMode={setMode} mode={mode} />
      <hr />
      <NavbarMenu />
      <FooterMenu />
    </nav>
  );
}

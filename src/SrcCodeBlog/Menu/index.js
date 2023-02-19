import NavbarMenu from "./NavbarMenu";
import Footer from "./Footer";
import Profile from "./Profile";
import ScroolTop from "./ScroolToTop/ScroolTop";

export default function Menu({ refScreen }) {
  return (
    <nav>
      <Profile />
      <hr />
      <NavbarMenu />
      <Footer />
      <ScroolTop refScreen={refScreen} />
    </nav>
  );
}

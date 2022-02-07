import { useWindowSize } from "../hooks/useWindowSize";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const Header = () => {
  const size = useWindowSize();
  if (size.width < 768) {
    return (
      <header>
        <p>Mobile</p>
        <MobileNavigation />
      </header>
    );
  } else {
    return (
      <header>
        <p>Desktop</p>
        <DesktopNavigation />
      </header>
    );
  }
};

export default Header;

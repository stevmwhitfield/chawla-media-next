import { useWindowSize } from "../../../hooks/useWindowSize";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const Header = () => {
  const size = useWindowSize();
  if (size.width < 1024 || size.height < 480) {
    return (
      <header>
        <MobileNavigation />
      </header>
    );
  } else {
    return (
      <header>
        <DesktopNavigation />
      </header>
    );
  }
};

export default Header;

import { useWindowSize } from "../../../hooks/useWindowSize";
import MobileNavigation from "./MobileNavigation";
import DesktopNavigation from "./DesktopNavigation";

const Header = ({ categories }) => {
  const size = useWindowSize();
  if (size.width < 1024 || size.height < 480) {
    return (
      <header>
        <MobileNavigation categories={categories} />
      </header>
    );
  } else {
    return (
      <header>
        <DesktopNavigation categories={categories} />
      </header>
    );
  }
};

export default Header;

// components/BaseNavbar.tsx
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

const BaseNavbar = () => {
  return (
    <header>
      {/* Display DesktopNavbar on larger screens and MobileNavbar on smaller screens */}
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
    </header>
  );
};

export default BaseNavbar;

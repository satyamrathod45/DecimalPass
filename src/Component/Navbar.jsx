import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const handleMenu = () => {
    setIsMenuClicked(!isMenuClicked);
  };
  return (
<nav className="flex items-center justify-between p-2 bg-[#080808] text-white md:p-5">
  <div className="logo text-3xl font-bold">Decimal<span className="text-gray-600">Pass</span></div>

  {/* Mobile */}
  <div className="menu sm:hidden relative">
    {isMenuClicked ? (
      <FaTimes className="text-xl cursor-pointer" onClick={handleMenu} />
    ) : (
      <RxHamburgerMenu className="text-2xl cursor-pointer" onClick={handleMenu} />
    )}

    {isMenuClicked && (
      <div className="absolute z-50 flex flex-col bg-[#080808] 
      -right-2.5 top-8 p-5 h-[50vh] gap-10 text-2xl 
      transition-all duration-300 ease-in-out">
        <a onClick={handleMenu} className="hover:text-green-100 cursor-pointer">Home</a>
        <a onClick={handleMenu} className="hover:text-green-100 cursor-pointer">About</a>
        <a onClick={handleMenu} className="hover:text-green-100 cursor-pointer">PassManager</a>
      </div>
    )}
  </div>

  {/* Desktop */}
  <div className="hidden sm:flex gap-6">
    <a className="hover:text-green-100">Home</a>
    <a className="hover:text-green-100">About</a>
    <a className="hover:text-green-100">PassManager</a>
  </div>
</nav>

  );
};

export default Navbar;

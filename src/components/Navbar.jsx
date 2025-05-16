import React, { useState, useRef, useEffect } from "react";
import logo from "../images/logo/logo-p.png";
import ToggleButtons from "./Home/ToggleBtn";
import BankingMenu from "./Home/BankingMenu";
import { NavLink,Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [showBankingMenu, setShowBankingMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const productsBtnRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Handle clicks outside the banking menu
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        showBankingMenu &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !productsBtnRef.current.contains(event.target)
      ) {
        setShowBankingMenu(false);
      }

      // Handle clicks outside mobile menu
      if (
        mobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".mobile-menu-button")
      ) {
        setMobileMenuOpen(false);
      }
    }

    // Add event listener when menus are shown
    if (showBankingMenu || mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Clean up event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showBankingMenu, mobileMenuOpen]);

  // Close mobile menu when window resizes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Custom BankingMenu with click handlers for menu items
  const MenuWithCloseOnClick = ({ isMobile = false }) => {
    const handleMenuItemClick = () => {
      setShowBankingMenu(false);
      if (isMobile) {
        setMobileMenuOpen(false);
      }
    };

    return (
      <div
        ref={menuRef}
        onClick={handleMenuItemClick}
        className={isMobile ? "w-full mt-2" : ""}
      >
        <BankingMenu />
      </div>
    );
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Close banking menu when mobile menu is toggled
    if (showBankingMenu) {
      setShowBankingMenu(false);
    }
  };

  // Mobile menu link component
  const MobileNavLink = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block py-3 px-4 border-b border-gray-200 ${
          isActive ? "text-purple font-semibold" : "text-gray-800"
        }`
      }
      onClick={() => setMobileMenuOpen(false)}
    >
      {children}
    </NavLink>
  );

  return (
    <div className="relative">
      <div className="border-b h-[60px] border-gray-100 w-full flex items-center px-6 justify-between">
        <Link to={'/'}>
          <img src={logo} alt="Logo" className="w-36 h-12 object-contain" />
        </Link>

        {/* Desktop Navigation - Hidden on mobile */}
        <nav className="hidden md:block p-4">
          <ul className="flex space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-xs ${
                    isActive ? "text-purple font-semibold" : "text-purple"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-xs ${
                    isActive ? "text-purple font-semibold" : "text-purple"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li
              ref={productsBtnRef}
              onMouseEnter={() => setShowBankingMenu(true)}
              className="relative"
            >
              <NavLink to='/products'
                onClick={(e) => {
                  setShowBankingMenu(!showBankingMenu);
                }}
                className={({ isActive }) =>
                  `text-xs ${
                    isActive ? "text-purple font-semibold" : "text-purple"
                  }`
                }
              >
                Products
              </NavLink>
              {showBankingMenu && (
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-4 z-50">
                  <MenuWithCloseOnClick />
                </div>
              )}
            </li>
            <li>
              <NavLink
                to="/careers"
                className={({ isActive }) =>
                  `text-xs ${
                    isActive ? "text-purple font-semibold" : "text-purple"
                  }`
                }
              >
                Careers
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stories"
                className={({ isActive }) =>
                  `text-xs ${
                    isActive ? "text-purple font-semibold" : "text-purple"
                  }`
                }
              >
                Stories
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button - Only visible on mobile */}
        <button
          className="mobile-menu-button md:hidden text-purple flex items-center"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Toggle Buttons - Hidden on mobile if needed */}
        <div className="hidden md:block">
          <ToggleButtons />
        </div>
      </div>

      {/* Mobile Menu - Slide down panel */}
      {mobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="absolute top-[54px] left-0 right-0 bg-white shadow-lg z-50 transition-all duration-300 max-h-screen overflow-y-auto"
          style={{
            transform: mobileMenuOpen ? "translateY(0)" : "translateY(-100%)",
            opacity: mobileMenuOpen ? 1 : 0,
          }}
        >
          <div className="py-2">
            <MobileNavLink to="/">Home</MobileNavLink>
            <MobileNavLink to="/about">About</MobileNavLink>

            {/* Products dropdown in mobile view */}
            <div className="border-b border-gray-200">
            <MobileNavLink to='/products'
                onClick={() => setShowBankingMenu(!showBankingMenu)}
                className="flex justify-between items-center w-full py-3 px-4 text-left text-gray-800"
              >
                <span>Products</span>
                <span className="text-sm">{showBankingMenu ? "−" : "+"}</span>
              </MobileNavLink>

              {showBankingMenu && (
                <div className="bg-gray-50 pl-4">
                  <MenuWithCloseOnClick isMobile={true} />
                </div>
              )}
            </div>

            <MobileNavLink to="/careers">Careers</MobileNavLink>
            <MobileNavLink to="/stories">Stories</MobileNavLink>

            {/* Mobile Toggle Buttons */}
            <div className="py-4 px-4 border-t border-gray-200 mt-2">
              <ToggleButtons />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;

"use client";

import useMediaQuery from '@/app/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const NavbarLink = ({ page, selectedPage, setSelectedPage }: { page: string, selectedPage: string, setSelectedPage: React.Dispatch<React.SetStateAction<string>> }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink 
      className={`${selectedPage === lowerCasePage ? 'text-yellow-500' : ''} hover:text-yellow-500 transition duration-500`}
      href={`$${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: { isTopOfPage: boolean, selectedPage: string, setSelectedPage: React.Dispatch<React.SetStateAction<string>>}) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const navbarBackground = isTopOfPage ? "" : "bg-caramel"

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-end mx-auto w-5/6">
        {/*<h4 className="font-playfair text-3xl font-bold">JV</h4>*/}

        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className="flex justify-between gap-16 font-chivo text-sm font-semibold">
            <NavbarLink 
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavbarLink 
              page="Skills"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavbarLink 
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <NavbarLink 
              page="Resume"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button className="rounded-full bg-red p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 h-full bg-caramel w-[300px]">
              {/* CLOSE ICON */}
              <div className="flex justify-end p-12">
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <FontAwesomeIcon icon={faCircleXmark} />
                </button>
              </div>

              {/* MENU ITEMS */}
              <div className="flex flex-col gap-10 ml-[33%] text-2xl">
                <NavbarLink 
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <NavbarLink 
                  page="Skills"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <NavbarLink 
                  page="Projects"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <NavbarLink 
                  page="Resume"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
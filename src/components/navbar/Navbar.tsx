"use client";

import useMediaQuery from '@/app/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

import './style.css';

const NavbarLink = ({ page, selectedPage, setSelectedPage }: { page: string, selectedPage: string, setSelectedPage: React.Dispatch<React.SetStateAction<string>> }) => {
  const lowerCasePage = page.toLowerCase();
  return (
    <AnchorLink 
      className={`${selectedPage === lowerCasePage ? 'text-yellow-500' : ''} hover:text-yellow-500 transition duration-500`}
      href={`$${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      offset='65'
    >
      {page}
    </AnchorLink>
  );
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: { isTopOfPage: boolean, selectedPage: string, setSelectedPage: React.Dispatch<React.SetStateAction<string>>}) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [navbarBackground, setNavbarBackground] = useState<string>("navbarTop");
  const [textColor, setTextColor] = useState<string>("text-coffeeBlack");
  //let navbarBackground = (isTopOfPage && !isAboveSmallScreens) ? "navbarTop" : "navbar"
  //let textColor = (isTopOfPage && !isAboveSmallScreens) ? "text-coffeeBlack" : "text-whip"

  useEffect(() => {
    if (!isAboveSmallScreens) {
      setNavbarBackground("navbarTop");
      setTextColor("text-coffeeBlack");
      return;
    }

    if (isTopOfPage) {
      setNavbarBackground("navbarTop");
      setTextColor("text-coffeeBlack");
      return;
    }

    setNavbarBackground("navbar");
    setTextColor("text-whip");
  }, [isTopOfPage, isAboveSmallScreens]);

  return (
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-end mx-auto w-5/6">
        {/* DESKTOP NAV */}
        {isAboveSmallScreens ? (
          <div className={`flex justify-between gap-16 font-chivo text-sm font-semibold ${textColor}`}>
            {/* HOME LINK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <NavbarLink 
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </motion.div>

            {/* SKILLS LINK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <NavbarLink 
                page="Skills"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </motion.div>

            {/* PROJECTS LINK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <NavbarLink 
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </motion.div>

            {/* RESUME LINK */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <NavbarLink 
                page="Resume"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </motion.div>
          </div>
        ) : (
          <motion.button 
            className="rounded-full bg-whip px-2 py-1" 
            onClick={() => setIsMenuToggled(!isMenuToggled)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <FontAwesomeIcon icon={faBars} />
          </motion.button>
        )}

        {/* MOBILE MENU POPUP */}
        {!isAboveSmallScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-coffeeBlack w-[300px]">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="flex flex-col gap-10 ml-[33%] text-2xl text-whip">
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
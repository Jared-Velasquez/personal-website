"use client";

import useMediaQuery from '@/app/hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { AnimatePresence, motion, useCycle } from 'framer-motion';

import './style.css';
import useOutsideClick from '@/app/hooks/useOutsideClick';

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

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1
    }
  }
}

const itemVariants = {
  closed: {
    opacity: 0
  },
  open: {
    opacity: 1
  }
}

const links = ["Home", "Skills", "Projects"];

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: { isTopOfPage: boolean, selectedPage: string, setSelectedPage: React.Dispatch<React.SetStateAction<string>>}) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  //const [open, cycleOpen] = useCycle(false, true);
  const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
  const [navbarBackground, setNavbarBackground] = useState<string>("navbarTop");
  const [textColor, setTextColor] = useState<string>("text-coffeeBlack");
  const wrapperRef = useOutsideClick(() => {
    setIsMenuToggled(false);
  })
  
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
          </div>
        ) : (
          <motion.button 
            className="rounded-full font-bold px-2 py-1 top-5 right-10 fixed" 
            onClick={() => setIsMenuToggled(true)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            {<FontAwesomeIcon icon={faBars} />}
            {/*isMenuToggled ? "Close" : "Open"*/}
          </motion.button>
        )}

        {/* MOBILE MENU POPUP */}
        {/* Animation sourced from Will Johnson: https://egghead.io/blog/how-to-create-a-sliding-sidebar-menu-with-framer-motion*/}
        
        <AnimatePresence>
          {!isAboveSmallScreens && isMenuToggled && (
            <motion.aside
              ref={wrapperRef}
              className="h-full fixed bg-caramel right-0 bottom-0 rounded-l-3xl z-1"
              initial={{ 
                width: 0 
              }}
              animate={{ 
                width: 300 
              }}
              exit={{
                width: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.3
                }
              }}
            >
              <button 
                className="rounded-full font-bold px-2 py-1 top-5 right-10 fixed z-10" 
                onClick={() => setIsMenuToggled(false)}
              >
                {<FontAwesomeIcon icon={faBars} />}
                {/*isMenuToggled ? "Close" : "Open"*/}
              </button>
              <motion.div 
                className="my-[4.5rem] mx-[1.4rem]"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                {links.map((link, index) => (
                  <motion.div
                    key={index}
                    className="text-3xl text-whip font-bold block m-[20px]"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.1
                    }}
                  >
                    <NavbarLink 
                      page={link}
                      selectedPage={selectedPage}
                      setSelectedPage={setSelectedPage}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default Navbar;
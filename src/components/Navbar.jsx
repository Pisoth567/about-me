import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const links = [
  {
    label: "Home",
    path: "/#home",
    id: "home",
  },
  {
    label: "About",
    path: "/#about",
    id: "about",
  },
  {
    label: "Skill",
    path: "/#skill",
    id: "skill",
  },
  {
    label: "Freelancer",
    path: "/#freelancer",
    id: "freelancer",
  },
  {
    label: "Contact",
    path: "/#contact",
    id: "contact",
  },
];

const Navbar = () => {
  // const [show, setShow] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY) {
  //       // Scrolling down
  //       setShow(false);
  //     } else {
  //       // Scrolling up
  //       setShow(true);
  //     }
  //     setLastScrollY(window.scrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [lastScrollY]);
  
  return (
    <nav
      // style={{
      //     transform: show ? "translateY(0)" : "translateY(-100%)",
      //     transition: "transform 1s ease-in-out",
      //   }}
      className="navbar my-nav position-sticky top-0 border-bottom border-body justify-content-center"
    >
      <ul className="list-unstyled d-flex justify-content-center align-items-center">
        {links.map((link) => (
          <li key={link.id} className=" px-3 pt-4 fs-5 fw-bold">
            <HashLink
              to={link.path}
              scroll={(el) => window.scrollTo(0, el.offsetTop - 70)}
              className="text-white text-decoration-none my-link"
            >
              {link.label}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

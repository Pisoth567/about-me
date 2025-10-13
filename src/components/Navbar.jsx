import { NavLink } from "react-router-dom";
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
  return (
    <nav className="navbar bg-dark border-bottom border-body justify-content-center">
      <ul className="list-unstyled d-flex justify-content-center align-items-center">
        {links.map((link) => (
          <li key={link.id} className=" px-3 pt-4 fs-5 fw-bold">
            <NavLink to={link.path} className="text-white text-decoration-none my-link">
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import { NavLink } from "react-router-dom";

export type Link = {
  title: string;
  path: string;
};

export type NavbarProps = {
  links: Link[];
};

export function Navbar({ links }: NavbarProps) {
  return (
    <nav>
      <div className="Navbar">
        <div className="">
          {links.map((link, index) => (
            <NavLink key={index} to={link.path}>
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

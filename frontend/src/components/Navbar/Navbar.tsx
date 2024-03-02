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
      <div className="bg-red-600 w-full shadow flex items-center justify-center h-32">
        <div className="flex items-baseline ml-10 space-x-4">
          {links.map((link, index) => (
            <NavLink className="text-white" key={index} to={link.path}>
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

import { Outlet } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Link } from "./navbar/Navbar";

const links: Link[] = [
  { path: "/saeson", title: "Sæsonplan" },
  { path: "/ratingliste", title: "Ratingliste" },
  { path: "/holdturnering", title: "Holdturnering" },
  { path: "/stævne", title: "Stævne" },
  { path: "/spillere", title: "Spillere" },
  { path: "/klubber", title: "Klubber" },
];

export function Layout() {
  return (
    <div>
      <Navbar links={links} />
      <div className="m-7">
        <Outlet />
      </div>
    </div>
  );
}

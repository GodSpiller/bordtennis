import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Link } from "./Navbar/Navbar";

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
      <Outlet />
    </div>
  );
}

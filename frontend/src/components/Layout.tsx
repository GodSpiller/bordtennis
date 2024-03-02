import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar/Navbar";
import { Link } from "./Navbar/Navbar";

const links: Link[] = [
  { path: "/saeson", title: "Sæsonplan" },
  { path: "/saeson", title: "Sæsonplan2" },
];

export function Layout() {
  return (
    <div>
      <Navbar links={links} />
      <Outlet />
    </div>
  );
}

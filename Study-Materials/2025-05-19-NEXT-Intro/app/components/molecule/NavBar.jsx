import { NavItem } from "../atom/NavItem";

export default function NavBar() {
  return (
    <nav className="flex gap-4">
      <NavItem
        text="Home"
        href="/"
      />
      <NavItem
        text="About"
        href="/about"
      />
      <NavItem
        text="Projects"
        href="/projects"
      />
      <NavItem
        text="Contact"
        href="/contact"
      />
    </nav>
  );
}

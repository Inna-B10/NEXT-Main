import { NavItem } from "../atom/NavItem";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export default function NavBar() {
  return (
    <nav className="flex w-full justify-between gap-4">
      <div className="flex gap-4">
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>

        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="flex gap-4">
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
      </div>
    </nav>
  );
}

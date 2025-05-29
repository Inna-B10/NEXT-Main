import Link from "next/link";

export const NavItem = ({ text, href }) => {
  return (
    <Link href={href}>
      <button className="px-4 py-2 cursor-pointer hover:scale:105 hover:bg-primary transition bg-slate-800 rounded-full">
        {text}
      </button>
    </Link>
  );
};

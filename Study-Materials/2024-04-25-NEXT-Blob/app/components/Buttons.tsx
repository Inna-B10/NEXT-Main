interface LinkButtonProps {
  href: string;
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  href,
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className="bg-[#4c4c4c] w-fit mx-auto hover:bg-[#727272] hover:scale-105 transition-transform text-white font-bold py-2 px-4 my-8 rounded "
      onClick={onClick}
    >
      <a href={href}>{children}</a>
    </button>
  );
};

interface ViewButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

export const ViewButton: React.FC<ViewButtonProps> = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className="bg-[#4c4c4c] w-fit mx-auto hover:bg-[#727272] hover:scale-105 transition-transform text-white font-bold py-2 px-4 my-8 rounded "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

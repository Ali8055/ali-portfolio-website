import Link from "next/link";

const NavLink = ({ href, title, onClick, active }) => {
  console.log("Active", active);
  return (
    <Link href={href}>
      <div
        onClick={() => onClick(title)}
        className={`${
          active == title ? "text-[#c9f31d]" : "text-white"
        } block py-2 pl-3 pr-4  sm:text-lg rounded md:p-0 hover:text-[#c9f31d] hover:underline`}>
        {title}
      </div>
    </Link>
  );
};

export default NavLink;

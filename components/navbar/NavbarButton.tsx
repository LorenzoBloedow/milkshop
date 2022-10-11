import Link from "next/link";
import { FunctionComponent } from "react";

interface NavbarButtonProps {
    text: string;
    link: string;
}
 
const NavbarButton: FunctionComponent<NavbarButtonProps> = ({ text, link }) => {
    return (
        <Link href={link}>
            <a
            aria-label="Navbar button"
            className="font-casual tracking-wider font-bold text-xl px-5 py-1 border-2 rounded-sm border-secondary bg-tertiary
                lg:hover:bg-tertiary-light active:shadow-inner active:shadow-black transition-shadow
                duration-75 sm:text-2xl md:text-5xl xl:text-7xl sm:px-5 sm:py-1 md:py-3 md:px-10 xl:px-14 xl:py-4 shadow shadow-black
                flex items-center justify-center text-secondary"
            >
                {text}
            </a>
        </Link>
    );
}
 
export default NavbarButton;
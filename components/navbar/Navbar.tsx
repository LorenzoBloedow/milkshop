import { FunctionComponent } from "react";
import Logo from "./Logo";
import NavbarButton from "./NavbarButton";

interface NavbarProps {
    
}
 
const Navbar: FunctionComponent<NavbarProps> = () => {
    return (
        <nav
        className="sticky flex gap-3 sm:gap-4 md:gap-7 xl:gap-9 p-2 sm:p-2.5 md:p-4 xl:px-10 bg-tertiary-dark border-y-4 border-secondary
            shadow-black shadow-md"
        >
            <Logo />
            <div className="flex gap-3 sm:gap-4 md:gap-7 xl:gap-9 ml-auto">
                <NavbarButton text="Products" link="/products"/>
                <NavbarButton text="About" link="/about" />
            </div>

        </nav>
    );
}
 
export default Navbar;
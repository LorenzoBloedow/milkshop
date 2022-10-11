import { FunctionComponent } from "react";
import Cow from "../../public/svg_out/cow.svg";

interface LogoProps {
    
}
 
const Logo: FunctionComponent<LogoProps> = () => {
    return (

        <div className="flex flex-col gap-1 md:gap-2 items-center justify-center">
            <div className="h-8 w-8 sm:h-12 sm:w-12 md:h-16 md:w-16 xl:h-24 xl:w-24 fill-secondary">
                <Cow
                height="full"
                width="full"
                />
            </div>

            <h1
            className="font-cartoonish tracking-wider text-xs sm:text-sm md:text-xl xl:text-3xl pl-0.5 text-secondary"
            >
                <span className="text-primary">Milk</span>Shop
            </h1>
        </div>

    );
}
 
export default Logo;
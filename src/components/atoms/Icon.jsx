import * as Outline from "@heroicons/react/24/outline";
import * as Solid from "@heroicons/react/24/solid";

const Icon = ({ name, size = 20, solid = false, className = "" }) => {
    const HeroIcon = (solid ? Solid : Outline)[name];
    if (!HeroIcon) return null;

    return <HeroIcon style={{ width: size, height: size }} className={className} />;
};

export default Icon;
import { useInView } from "framer-motion";
import { useRef } from "react";
import RedLine from "./RedLine";

interface IProps {
    title: string
}
const Title = ({ title }: IProps) => {
    const projectRef = useRef(null);
    const isInView = useInView(projectRef, { once: true });

    function spacedTitle(title: string) {
        return title.split("")
            .map(c => {
                return c + " "
            })
            .join("");
    }

    return (
        <div
            ref={projectRef}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }} className='flex flex-col items-center justify-around'>
            <h3 className="py-8 text-3xl font-bold uppercase">{spacedTitle(title)}</h3>
            <RedLine />
        </div>
    );
};

export default Title;
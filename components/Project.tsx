import { useInView } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import { useRef } from 'react'


export interface IProjectProps {
    backend: string[]
    frontend: string[]
    title: string
    description: string
    image: StaticImageData
}

const Project = (props: IProjectProps) => {
    const projectRef = useRef(null);
    const isInView = useInView(projectRef, { once: true });

    return (
        <div
            ref={projectRef}
            style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            className="flex flex-wrap lg:flex-nowrap items-start mb-32 p-8 lg:p-0"
        >
            <div className="z-20 w-full lg:w-1/3 text-center lg:text-right">
                {/* Project Title */}
                <div className="text-4xl font-semibold uppercase">{props.title}</div>

                {/* Project Description */}
                <div className="p-4 my-4 bg-gray-50 rounded-xl bg-opacity-90 w-full lg:w-[130%] text-medina-red font-semibold text-lg leading-6 text-center lg:text-left">
                    {props.description}
                </div>

                {/* Project Skills */}
                <div>
                    {props.frontend?.length > 0 && <>
                        <div className="font-semibold text-medina-blue">Frontend:</div>
                        <div className='font-light text-gray-400'>{props.frontend.join(", ")}</div>
                    </>
                    }
                    {props.backend?.length > 0 && <>
                        <div className="font-semibold text-medina-blue">Backend:</div>
                        <div className='font-light text-gray-400'>{props.backend.join(", ")}</div>
                    </>
                    }
                </div>
            </div>
            <div className='z-10 w-full lg:w-2/3 lg:ml-8 pt-4 lg:pt-0'>
                {/* Project Image */}
                <Image layout={"responsive"} src={props.image} width={1420} height={458} alt={`Project ${props.title}`} />
            </div>
        </div>
    );
};

export default Project;
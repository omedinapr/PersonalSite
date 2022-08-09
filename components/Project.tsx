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
            className="flex items-start mb-32"
        >
            <div className="z-20 w-1/3 text-right">
                {/* Project Title */}
                <div className="text-4xl font-semibold uppercase">{props.title}</div>

                {/* Project Description */}
                <div className="p-4 my-4 bg-gray-50 rounded-xl bg-opacity-90 w-[130%] text-medina-red font-semibold text-lg text-left leading-6">
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
            <div className='z-10 w-2/3 ml-8'>
                {/* Project Image */}
                <Image layout={"responsive"} src={props.image} width={1420} height={458} alt={`Project ${props.title}`} />

                {/* Project Screenshots */}
                {/* <div className='flex items-center justify-end mt-4'>
                    <div className='w-16 h-16 mr-4 border rounded-lg'></div>
                    <div className='w-16 h-16 mr-4 border rounded-lg'></div>
                    <div className='w-16 h-16 mr-4 border rounded-lg'></div>
                    <div className='w-16 h-16 mr-4 border rounded-lg'></div>
                    <div className='w-16 h-16 mr-4 border rounded-lg'></div>
                </div> */}
            </div>
        </div>
    );
};

export default Project;
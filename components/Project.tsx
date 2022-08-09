import ShipLeap from '../assets/images/projects/ShipLeap.png'
import Image, { StaticImageData } from 'next/image'


export interface IProjectProps {
    backend: string[]
    frontend: string[]
    title: string
    description: string
    image: StaticImageData
}

const Project = (props: IProjectProps) => {

    return (
        <div className="flex items-start mb-32">
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
                <Image layout={"responsive"} src={props.image} width={1420} height={458} />

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
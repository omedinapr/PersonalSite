import type { NextPage } from 'next'
import Image from 'next/image'
import BigO from '../assets/images/bigO.webp'
import Me from '../assets/images/drawing.svg'
import OPattern from '../assets/images/opattern.png'
import RedLine from '../components/RedLine'
import Title from '../components/Title'
import Project, { IProjectProps } from '../components/Project'

import Project_ShipLeap from "../assets/images/projects/ShipLeap.png"
import Project_ParagonW2P from "../assets/images/projects/ParagonW2P.png"

import SocialGithub from '../assets/images/socials/github.svg'
import SocialLinkedIn from '../assets/images/socials/linkedin.svg'
import SocialTwitter from '../assets/images/socials/twitter.svg'

import { AnimationControls, motion, TargetAndTransition, Transition, useInView, useScroll, VariantLabels } from "framer-motion";
import { useRef, useState } from 'react'

const Home: NextPage = () => {
  const { scrollYProgress } = useScroll();

  const [bigOAnimation, setBigOAnimation] = useState({
    opacity: 0.5
  } as boolean | VariantLabels | AnimationControls | TargetAndTransition | undefined);
  const [bigOTransition, setBigOTransition] = useState({
    delay: 3,
    repeat: 1,
    ease: 'easeInOut',
    duration: 4
  } as Transition | undefined);

  const projects: IProjectProps[] = [
    {
      title: "ShipLeap",
      frontend: ["Electron", "Vue", "Tailwind CSS"],
      backend: ["AWS EC2", "NestJS", "Typescript", "Rest API"],
      description: "A complete, easy-to-use shipping solution that you and your customers will love",
      image: Project_ShipLeap
    },
    {
      title: "Paragon W2P",
      frontend: ["Vue", "PHP", "Tailwind CSS"],
      backend: ["AWS EC2", "PHP"],
      description: "Your easy-to-use, dependable web-to-print solution",
      image: Project_ParagonW2P
    }
  ]

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: "#00adbf",
          transformOrigin: "0%",
          scaleX: scrollYProgress,
          zIndex: 100
        }}
      />
      <section className='w-full h-full text-medina-black'>
        {/* Big O */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={bigOAnimation}
          transition={bigOTransition}
          onAnimationComplete={() => {
            console.log("FINISHEDDDDDDDDDDD");
            setBigOAnimation({
              opacity: [0.5, 0.5, 0.5],
              rotate: [0, 2, 0],
            });
            setBigOTransition({
              delay: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              duration: 4
            })
          }}
          className='w-3/4 absolute top-[30%] -left-[30%] -z-10 opacity-20'
        >
          <Image layout='responsive' priority={false} src={BigO} placeholder={"blur"} width={1410.63} height={1410.63} alt="Big O background" />
        </motion.div>

        {/* Home Container */}
        <div className='flex items-center justify-around w-full h-full p-8'>

          {/* Logo & Menu */}
          <div className='flex flex-col w-[400px] p-8 items-center -mt-[15%]'>

            <div className='flex items-center justify-around w-full'>
              <motion.img
                initial={{
                  x: 300,
                  rotate: 360
                }}
                animate={{
                  x: "0%",
                  rotate: 0
                }}
                transition={{
                  duration: 2,
                  bounce: 1,
                }}
                onAnimationComplete={() => {

                }}
                src="/logo/O.svg"
                className='h-[50px] mr-2'
                alt="O Logo"
              />
              <motion.img
                initial={{
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                transition={{
                  duration: 1,
                  bounce: 1,
                  delay: 2
                }}
                src="/logo/Medina.svg"
                className='h-[50px]'
                alt="Medina Logo"
              />
            </div>

            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 3
              }}
              className="flex flex-col items-center justify-around"
            >
              <ul className='py-6'>
                <li className='inline px-3 text-gray-500 hover:text-medina-red hover:font-semibold'>
                  <a href="#work">WORK</a>
                </li>
                <li className='inline px-3 text-gray-500 hover:text-medina-red hover:font-semibold'>
                  <a href="#contact">CONTACT</a>
                </li>
              </ul>
              <RedLine />
            </motion.div>
          </div>

          {/* About Me */}
          <motion.div
            initial={{
              scale: 0
            }}
            animate={{
              scale: 1
            }}
            transition={{
              delay: 3,
              duration: 2
            }}
            className='absolute bottom-10 right-0 w-[40%]'
          >
            <div className="flex items-end w-full">
              <div className='w-1/3'>
                <Image src={Me} width={243.85} height={250.4} layout={"responsive"} alt="Drawing of OMedina" />
              </div>
              <div className='w-2/3 p-6 pl-12 mt-8 -ml-8 text-white rounded-xl bg-medina-red'>
                <h2 className='font-bold text-[28px]'>Hello, I&apos;m Oscar Medina</h2>
                <p className='text-lg'>developer by
                  <motion.span
                    className='px-1'
                    animate={{
                      opacity: [0, 1, 1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}
                  > 🌞 </motion.span>
                  and developer by
                  <motion.span
                    className='px-1'
                    animate={{
                      opacity: [0, 1, 1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror"
                    }}
                  >🌙</motion.span>, based out of New Jersey. In addition to creating automated solutions through code, I also enjoy live streaming and going out to restaurants.</p>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Work Container */}
      <section className='w-full text-medina-black'>
        {/* O's Pattern Background */}
        <div className='absolute w-full -z-20'>
          <Image layout='responsive' src={OPattern} width={3840} height={936} alt="Big Os pattern" />
        </div>

        {/* Start */}
        <div className='max-w-5xl mx-auto'>
          {/* Spacer */}
          <div className='h-[400px]'></div>

          {/* Title */}
          <Title title="PROJECTS/WORK" />

          {/* Project Container */}
          <div className='mt-[300px]'>
            {projects.map(project => {
              return <Project key={`project-${project.title}`} backend={project.backend} description={project.description} frontend={project.frontend} image={project.image} title={project.title} />
            })}
          </div>

        </div>
      </section>

      {/* Contact */}
      <section className='relative h-screen w-full overflow-x-hidden overflow-y-clip'>
        {/* Big O Background */}
        <div className='w-3/4 absolute -top-[0%] -right-[30%] -z-10 opacity-5'>
          <Image layout='responsive' priority={false} src={BigO} placeholder={"blur"} width={1410.63} height={1410.63} alt="Big O backgroun" />
        </div>

        {/* O's Pattern Background */}
        <div className='absolute bottom-0 w-full -z-20'>
          <Image className='rotate-180' layout='responsive' src={OPattern} width={3840} height={936} alt="Big Os pattern" />
        </div>

        {/* Contact Container */}
        <div className='flex items-center justify-around h-full w-full'>
          <div>
            <Title title='contact' />
            <div className='flex items-center justify-around max-w-[300px] mx-auto pt-14 pb-8'>
              <Image src={SocialGithub} width={43.65} height={43} alt="Github" />
              <Image src={SocialLinkedIn} width={43.22} height={43.22} alt="LinkedIn" />
              <Image src={SocialTwitter} width={52.82} height={42.91} alt="Twitter" />
            </div>
            <p className='text-[52px] font-bold text-medina-red text-center'>hello@omedina.me</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

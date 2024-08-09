import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import degree2 from "../../public/images/articles/degree2.jpeg"
import docker from "../../public/images/articles/docker.jpg"
import Twelfth from "../../public/images/articles/12th.jpg"
import sem from "../../public/images/articles/sem.jpg"
import degree1 from "../../public/images/articles/degree1.jpg"
import anudip from "../../public/images/articles/anudip.jpg"
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'
const FramerImage=motion(Image);
const FeaturedCertificate=({img,title,summary,link})=>{
    return(<li className='dark:bg-dark dark:border-light relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl'>
         <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light'></div>
        
         <Link href={link} target={'_blank'}
        className='w-full inline-block cursor-pointer overflow-hidden rounded-lg'
        download={true}
        >
            <FramerImage src={img} alt={title} className='w-full h-auto'
            whileHover={{scale:1.05}}
            transition={{duration:0.2}}
            priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
        </Link>
        <Link href={link} target={'_blank'}>
            <h2 className='capitalize text-2xl font-bold my-2 hover:underline xs:text-lg '>{title}</h2>
        </Link>
        <p className='text-sm mb-2'>{summary}</p>
    </li>)
}
const education = () => {
  return (
   <>
   <Head>
        <title>Shubham | Education Page</title>
        <meta name='description' content='any description'></meta>
    </Head>
    <TransitionEffect/>
    <main  className='w-full mb-16 flex dark:text-light flex-col items-center justify-center overflow-hidden'>
        <Layout className='pt-16'>
            <AnimatedText text="Credentials & Achievements" className='mb-16 text-6xl lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl'/>
        <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
        <FeaturedCertificate 
            title="Twelfth Certificate"
            link="/12th.jpg"
            summary=""
            img={Twelfth}
            
            />
        <FeaturedCertificate
               title="University of Mumbai Grade Card"
               link="/sem.jpg"
               summary=""
               img={sem}

               />


         <FeaturedCertificate
                    title="University of Mumbai Certificate"
                    link="/degree2.jpg"
                    summary=""
                    img={degree2}

                    />

               <FeaturedCertificate
                        title="University of Mumbai Certificate"
                        link="/degree1.jpeg"
                        summary=""
                        img={degree1}

                        />

         <FeaturedCertificate
                    title="Java Full Stack Developer Certificate"
                    link="/anudip.jpg"
                    summary=""
                    img={anudip}

                    />

            
             <FeaturedCertificate 
            title="DevOps Certificate"
            link="/docker.jpg"
            summary=""
            img={docker}
            />
        </ul>
        </Layout>
    </main>
   </>
  )
}

export default education
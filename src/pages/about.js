import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, { useEffect, useRef } from 'react';
import profile from '../../public/images/profile/file.png';

import Image from 'next/image';
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import TransitionEffect from '@/components/TransitionEffect';

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        });
    }, [springValue, value]);

    return <span ref={ref}></span>;
};

const About = () => {
    return (
        <>
            <Head>
                <title>Shubham | About Page</title>
                <meta name="description" content="Learn more about Shubham's background and skills." />
            </Head>
            <TransitionEffect />
            <main className="flex w-full flex-col items-center justify-center dark:text-light">
                <Layout className="pt-16">
                    <AnimatedText text="Welcome To My Creative Space!" className="mb-16 !text-6xl lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8" />
                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
                        <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
                            <h2 className="mb-6 text-2xl font-extrabold uppercase text-dark dark:text-light xl:text-3xl md:text-2xl sm:text-xl"> About Me</h2>
                            <p className="font-medium my -6">
                                I am a software engineer with experience in developing and maintaining web applications using Spring Boot, Hibernate, and MicroServices architecture.
                            </p>
                            <p className="font-medium my-6">
                                I have contributed to frontend development using ReactJS, ensuring a seamless user experience. Additionally, I have implemented Docker for application containerization, optimizing deployment workflows and improving system reliability.
                            </p>
                            <p className="font-medium my-6">
                                My skills also include working with databases such as Oracle, MySQL, and SQL Server, as well as front-end technologies like HTML, CSS, JavaScript, Bootstrap, and ReactJS. I am proficient in desktop operating systems including Windows, Unix, Linux, and Mac.
                            </p>
                        </div>

                        <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
                            <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1rem] bg-dark dark:bg-light"></div>
                            <Image src={profile} alt="Shubham's Pic" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 850px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                        </div>

                        <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold"><AnimatedNumbers value={5} />+</span>
                                <h2 className="xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light">Projects Completed</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold"><AnimatedNumbers value={3} />+</span>
                                <h2 className="xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light">Frameworks</h2>
                            </div>
                            <div className="flex flex-col items-end justify-center xl:items-center">
                                <span className="md:text-6xl sm:text-5xl xs:text-4xl inline-block text-7xl font-bold"><AnimatedNumbers value={10} />+</span>
                                <h2 className="xl:text-center md:text-lg sm:text-base xs:text-sm text-xl font-medium capitalize text-dark/75 dark:text-light">Skills</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Education />
                </Layout>
            </main>
        </>
    );
};

export default About;

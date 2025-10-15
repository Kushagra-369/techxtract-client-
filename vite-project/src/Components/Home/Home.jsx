import React from 'react';
import { motion } from 'framer-motion';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import './index.css';

export default function Home() {
    return (
        <div className="bg-black min-h-screen flex flex-col items-center justify-center px-6 py-16 gap-8 lg:flex-row 
                pt-[180px] sm:pt-[200px] lg:pt-32">

            {/* Left Image */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-auto flex justify-center"
                whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 200, damping: 10 }
                }}
            >
                <img
                    src={image2}
                    alt="Tech Image Left"
                    className="animate-border-glow w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border-2 rounded-2xl border-cyan-400"
                />
            </motion.div>

            {/* Center Text with 3D hover animation */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 200, damping: 10 }
                }}
                className="relative w-full sm:w-4/5 md:w-2/3 lg:w-1/3 p-6 sm:p-8 text-left rounded-xl min-h-[auto] lg:min-h-[400px] cursor-pointer perspective-1000"
            >
                {/* Animated border */}
                <div className="absolute inset-0 border-2 rounded-xl animate-border-glow pointer-events-none"></div>

                <h1 className="relative text-cyan-300 text-lg sm:text-xl md:text-2xl font-medium leading-relaxed">
                    TechXtract is the official technology society of our Department — a hub for innovation,
                    collaboration, and engineering creativity. While the society thrives on campus and on Instagram
                    (@techxtract_official), it currently lacks a unified digital identity.
                </h1>
            </motion.div>

            {/* Right Image */}
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-auto flex justify-center"
                whileHover={{
                    scale: 1.05,
                    rotateX: 5,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 200, damping: 10 }
                }}
            >
                <img
                    src={image3}
                    alt="Tech Image Right"
                    className="animate-border-glow w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 border-2 rounded-2xl border-cyan-400"
                />
            </motion.div>

        </div>
    );
}

"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

export default function SplashScreen({
    onComplete,
}: {
    onComplete: () => void;
}) {
    useEffect(() => {
        const timeout = setTimeout(onComplete, 4000); // Adjust duration as needed
        return () => clearTimeout(timeout);
    }, [onComplete]);

    const text = "Penang Silver Chariot Tracker";

    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100vh" }}
            transition={{ delay: 3, duration: 1, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-black flex items-center justify-center"
        >
            <motion.div className="relative text-white text-3xl md:text-5xl font-bold text-center">
                {/* Text Appearing Above Progress Bar */}
                <motion.div className="overflow-hidden mb-4">
                    {text.split(" ").map((letter, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: "100%" }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ y: "-100vh", opacity: 0 }}
                            transition={{
                                delay: 1 + index * 0.1, // Delay until progress bar finishes
                                duration: 0.5,
                                ease: "easeOut",
                            }}
                            className="inline-block mx-1"
                        >
                            {letter}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Progress Bar */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full h-1 bg-white origin-left"
                />
            </motion.div>
        </motion.div>
    );
}

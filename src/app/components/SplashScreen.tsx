"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

class TextScramble {
    private el: HTMLDivElement;
    private chars: string;
    private frameRequest: number | null;
    private frame: number;
    private queue: Array<{
        from: string;
        to: string;
        start: number;
        end: number;
        char?: string;
    }>;
    private resolve: () => void;

    constructor(el: HTMLDivElement) {
        this.el = el;
        this.chars = "!<>-_\\/[]{}—=+*^?#________";
        this.frameRequest = null;
        this.frame = 0;
        this.queue = [];
        this.resolve = () => {};
        this.update = this.update.bind(this);
    }

    setText(newText: string): Promise<void> {
        const oldText = this.el.innerText || "";
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise<void>(
            (resolve) => (this.resolve = resolve)
        );
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 40);
            this.queue.push({ from, to, start, end });
        }

        cancelAnimationFrame(this.frameRequest!);
        this.frame = 0;
        this.update();
        return promise;
    }

    private update(): void {
        let output = "";
        let complete = 0;

        for (let i = 0; i < this.queue.length; i++) {
            // eslint-disable-next-line prefer-const
            let { from, to, start, end, char } = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.28) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }

        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update);
            this.frame++;
        }
    }

    private randomChar(): string {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}

const TextScrambleComponent = ({
    phrases,
    className,
    onComplete,
}: {
    phrases: string[];
    className: string;
    onComplete: () => void;
}) => {
    const textRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (textRef.current && phrases[currentIndex]) {
            // Ensure valid phrase
            const fx = new TextScramble(textRef.current);
            const next = () => {
                fx.setText(phrases[currentIndex]).then(() => {
                    if (currentIndex < phrases.length - 1) {
                        setTimeout(
                            () => setCurrentIndex((prev) => prev + 1),
                            1000
                        );
                    } else {
                        setTimeout(onComplete, 700);
                    }
                });
            };
            next();
        }
    }, [currentIndex, phrases, onComplete]);

    return <div ref={textRef} className={className}></div>;
};

export default function SplashScreen({
    onComplete,
}: {
    onComplete: () => void;
}) {
    return (
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: "-100vh" }}
            transition={{ delay: 3.5, duration: 0.7, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full h-full bg-primary-50 flex items-center justify-center"
        >
            <motion.div
                className="relative text-primary-800 text-xl md:text-6xl font-extralight font-playfair text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 0.5 }}
                transition={{ duration: 0.5 }}
            >
                <TextScrambleComponent
                    phrases={["ByeByte", "Chariot Tracker"]}
                    className="tracking-wider"
                    onComplete={onComplete}
                />
            </motion.div>
        </motion.div>
    );
}

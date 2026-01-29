"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ReadMore = ({ text, maxLines = 3, className = "", textClassName = "text-base text-dark/80 font-light leading-6 md:leading-7 lg:leading-8" }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    const [isClamped, setIsClamped] = useState(true);
    const [collapsedHeight, setCollapsedHeight] = useState(0);
    const textRef = useRef(null);

    useEffect(() => {
        const calculateHeight = () => {
            if (textRef.current) {
                const style = window.getComputedStyle(textRef.current);
                const lh = parseFloat(style.lineHeight);
                const currentLineHeight = !isNaN(lh) ? lh : parseFloat(style.fontSize) * 1.5;

                setCollapsedHeight(currentLineHeight * maxLines);

                // If currently clamped, scrollHeight > clientHeight indicates overflow.
                // If expanded (not clamped), check via calculation? 
                // Actually, relying on initial clamped state is safest.
                // If valid overflow detection is needed while expanded, we'd need to compare scrollHeight vs collapsedHeight.
                const isContentLonger = textRef.current.scrollHeight > (currentLineHeight * maxLines);
                setIsOverflowing(isContentLonger);
            }
        };

        // Initial calculation
        calculateHeight();

        // Recalculate on resize
        window.addEventListener('resize', calculateHeight);
        return () => window.removeEventListener('resize', calculateHeight);
    }, [text, maxLines]);

    const handleToggle = () => {
        if (isExpanded) {
            setIsExpanded(false);
            // Wait for animation to finish to re-clamp (done in onAnimationComplete)
        } else {
            setIsClamped(false);
            setIsExpanded(true);
        }
    };

    return (
        <div className={className}>
            <motion.div
                className="overflow-hidden relative"
                initial={false}
                animate={{ height: isExpanded ? "auto" : (collapsedHeight || "auto") }}
                transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                onAnimationComplete={() => {
                    if (!isExpanded) {
                        setIsClamped(true);
                    }
                }}
            >
                <p
                    ref={textRef}
                    className={`${textClassName} break-words whitespace-pre-line`}
                    style={{
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: isClamped ? maxLines : "unset",
                        overflow: "hidden"
                    }}
                >
                    {text}
                </p>
            </motion.div>

            {(isOverflowing || isExpanded) && (
                <button
                    onClick={handleToggle}
                    className="mt-3 text-primary font-medium text-sm hover:text-primary/80 transition-colors duration-200 flex items-center gap-1 group"
                >
                    {isExpanded ? (
                        <>
                            Read Less
                            <svg
                                className="w-4 h-4 transition-transform group-hover:-translate-y-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                            </svg>
                        </>
                    ) : (
                        <>
                            Read More
                            <svg
                                className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </>
                    )}
                </button>
            )}
        </div>
    );
};

export default ReadMore;

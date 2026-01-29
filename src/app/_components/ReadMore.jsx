"use client";

import { useState, useRef, useEffect } from "react";

const ReadMore = ({ text, maxLines = 3, className = "" }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            // Check if the content overflows the container when collapsed
            const isOverflowing = textRef.current.scrollHeight > textRef.current.clientHeight;
            setShowButton(isOverflowing);
        }
    }, [text, maxLines]);

    return (
        <div className={className}>
            <p
                ref={textRef}
                className={`text-base text-dark/80 font-light leading-6 md:leading-7 lg:leading-8 break-words transition-all duration-300 ${isExpanded ? "" : "line-clamp-3"}`}
                style={{
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: isExpanded ? "unset" : maxLines,
                    overflow: "hidden"
                }}
            >
                {text}
            </p>

            {(showButton || isExpanded) && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
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

"use client";

import { useEffect, useState } from "react";

interface ParallaxState {
    scrollY: number;
    windowHeight: number;
}

export function useParallax(): ParallaxState {
    const [state, setState] = useState<ParallaxState>({
        scrollY: 0,
        windowHeight: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            setState((prev) => ({
                ...prev,
                scrollY: window.scrollY,
            }));
        };

        const handleResize = () => {
            setState((prev) => ({
                ...prev,
                windowHeight: window.innerHeight,
            }));
        };

        // Initial values
        setState({
            scrollY: window.scrollY,
            windowHeight: window.innerHeight,
        });

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return state;
}

export function getParallaxOffset(scrollY: number, speed: number = 0.5): number {
    return scrollY * speed;
}

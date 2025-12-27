"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean; // If false, animation will reverse when scrolling back
}

export function useScrollAnimation<T extends HTMLElement>(
    options: UseScrollAnimationOptions = {}
): [RefObject<T | null>, boolean] {
    const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", once = false } = options;
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (once) {
                    // Only animate once
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(element);
                    }
                } else {
                    // Animate in both directions
                    setIsVisible(entry.isIntersecting);
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [threshold, rootMargin, once]);

    return [ref, isVisible];
}

// Hook for tracking multiple elements with staggered animations
export function useMultiScrollAnimation(
    count: number,
    options: UseScrollAnimationOptions = {}
): [RefObject<HTMLDivElement | null>, boolean[]] {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visibleItems, setVisibleItems] = useState<boolean[]>(Array(count).fill(false));
    const { threshold = 0.1, rootMargin = "0px 0px -30px 0px", once = false } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger the visibility
                    for (let i = 0; i < count; i++) {
                        setTimeout(() => {
                            setVisibleItems(prev => {
                                const newState = [...prev];
                                newState[i] = true;
                                return newState;
                            });
                        }, i * 100);
                    }
                    if (once) {
                        observer.unobserve(element);
                    }
                } else if (!once) {
                    // Hide all items when scrolling away
                    setVisibleItems(Array(count).fill(false));
                }
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [count, threshold, rootMargin, once]);

    return [ref, visibleItems];
}

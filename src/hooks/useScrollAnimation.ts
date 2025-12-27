"use client";

import { useEffect, useRef, useState, RefObject } from "react";

interface UseScrollAnimationOptions {
    threshold?: number;
    rootMargin?: string;
    once?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
    options: UseScrollAnimationOptions = {}
): [RefObject<T | null>, boolean] {
    const { threshold = 0.15, rootMargin = "-10% 0px -10% 0px", once = false } = options;
    const ref = useRef<T | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                // Always update visibility based on intersection state for bidirectional animation
                if (once) {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(element);
                    }
                } else {
                    // Bidirectional: true when in view, false when out of view
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
    const { threshold = 0.1, rootMargin = "-5% 0px -5% 0px", once = false } = options;

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Stagger the visibility when entering view
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
                    // Hide all items when scrolling out of view (scroll up)
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

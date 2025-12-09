import { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ImageCarouselProps {
    images: string[];
    initialIndex: number;
    open: boolean;
    onClose: () => void;
}

export default function ImageCarousel({
    images,
    initialIndex,
    open,
    onClose,
}: ImageCarouselProps) {
    const closeButtonRef = useRef<HTMLButtonElement | null>(null);
    const firstFocusableRef = useRef<HTMLButtonElement | null>(null);
    const lastFocusableRef = useRef<HTMLButtonElement | null>(null);
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [direction, setDirection] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    useEffect(() => {
        if (open) {
            setCurrentIndex(initialIndex);
        }
    }, [open, initialIndex]);

    useEffect(() => {
        if (open) {
            const target = firstFocusableRef.current ?? closeButtonRef.current;
            target?.focus();
        }
    }, [open]);

    const paginate = useCallback(
        (newDirection: number) => {
            setDirection(newDirection);
            setCurrentIndex((prev) => {
                let next = prev + newDirection;
                if (next < 0) next = images.length - 1;
                if (next >= images.length) next = 0;
                return next;
            });
        },
        [images.length]
    );

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!open) return;

            if (e.key === "Escape") {
                e.preventDefault();
                onClose();
                return;
            }

            if (e.key === "ArrowLeft") {
                e.preventDefault();
                paginate(-1);
                return;
            }

            if (e.key === "ArrowRight") {
                e.preventDefault();
                paginate(1);
                return;
            }

            if (e.key === "Tab") {
                const first = firstFocusableRef.current ?? closeButtonRef.current;
                const last = lastFocusableRef.current ?? closeButtonRef.current;
                if (!first || !last) return;

                const active = document.activeElement as HTMLElement | null;
                const root = document.querySelector('[data-carousel-root="true"]');
                if (!root) return;

                if (!active || !root.contains(active)) {
                    e.preventDefault();
                    first.focus();
                    return;
                }

                if (!e.shiftKey && active === last) {
                    e.preventDefault();
                    first.focus();
                } else if (e.shiftKey && active === first) {
                    e.preventDefault();
                    last.focus();
                }
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, paginate, onClose]);

    if (!mounted) return null;

    return createPortal(
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/95 backdrop-blur-xl"
                    style={{ zIndex: 99999 }}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image carousel dialog"
                    data-carousel-root="true"
                    onClick={onClose}
                >
                    {/* Close Button - More visible */}
                    <button
                        ref={closeButtonRef}
                        onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                        }}
                        className="fixed top-4 right-4 p-3 bg-gradient-to-br from-amber-600/80 to-amber-500/60 hover:from-amber-600 hover:to-amber-500 border border-amber-400/70 rounded-full text-black hover:text-black/90 shadow-lg shadow-amber-500/40 transition-all duration-300 group z-[100002] focus:outline-none focus:ring-2 focus:ring-amber-400"
                        aria-label="Close carousel"
                    >
                        <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                    </button>

                    {/* Counter */}
                    <div
                        className="fixed top-6 left-6 px-4 py-2 bg-black/70 border border-amber-500/70 rounded-full backdrop-blur-md z-[100002]"
                    >
                        <span className="text-amber-400 font-mono font-bold">
                            {currentIndex + 1}
                        </span>
                        <span className="text-white/30 mx-2">/</span>
                        <span className="text-white/50 font-mono">{images.length}</span>
                    </div>

                    {/* Navigation Controls - Left */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            paginate(-1);
                        }}
                        className="fixed left-4 md:left-8 top-1/2 -translate-y-1/2 p-4 md:p-6 bg-black/70 border border-amber-500/70 rounded-full text-amber-100 shadow-[0_0_15px_rgba(245,158,11,0.5)] backdrop-blur-md transition-all duration-300 group hover:scale-110 hover:bg-black/90 hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.8)] z-[100002]"
                    >
                        <ChevronLeft className="w-8 h-8 md:w-10 md:h-10 group-hover:-translate-x-1 transition-transform" />
                    </button>

                    {/* Navigation Controls - Right */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            paginate(1);
                        }}
                        className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 p-4 md:p-6 bg-black/70 border border-amber-500/70 rounded-full text-amber-100 shadow-[0_0_15px_rgba(245,158,11,0.5)] backdrop-blur-md transition-all duration-300 group hover:scale-110 hover:bg-black/90 hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.8)] z-[100002]"
                        ref={lastFocusableRef}
                    >
                        <ChevronRight className="w-8 h-8 md:w-10 md:h-10 group-hover:translate-x-1 transition-transform" />
                    </button>
                    {/* Dots Indicator */}
                    <div
                        className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 px-6 py-4 bg-black/70 border border-amber-500/70 rounded-full backdrop-blur-xl z-[100002]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {images.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${idx === currentIndex
                                    ? "bg-amber-400 w-8 shadow-[0_0_15px_rgba(251,191,36,0.6)]"
                                    : "bg-white/20 hover:bg-white/50 hover:scale-125"
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Main Image Container - Centered */}
                    <div
                        className="fixed inset-0 flex items-center justify-center p-4 md:p-20 z-[100001]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <AnimatePresence initial={false} custom={direction} mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={{
                                    enter: (direction: number) => ({
                                        x: direction > 0 ? 1000 : -1000,
                                        opacity: 0,
                                        scale: 0.8,
                                        rotateY: direction > 0 ? 45 : -45,
                                    }),
                                    center: {
                                        zIndex: 1,
                                        x: 0,
                                        opacity: 1,
                                        scale: 1,
                                        rotateY: 0,
                                    },
                                    exit: (direction: number) => ({
                                        zIndex: 0,
                                        x: direction < 0 ? 1000 : -1000,
                                        opacity: 0,
                                        scale: 0.8,
                                        rotateY: direction < 0 ? 45 : -45,
                                    }),
                                }}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                    scale: { duration: 0.4 },
                                    rotateY: { duration: 0.4 },
                                }}
                                className="absolute max-w-7xl max-h-full flex items-center justify-center"
                                style={{ perspective: "1000px" }}
                            >
                                <div className="relative w-auto h-auto max-w-full max-h-[85vh] rounded-xl overflow-hidden shadow-2xl shadow-amber-500/10 border border-amber-500/30">
                                    <ImageWithFallback
                                        src={images[currentIndex]}
                                        alt={`Slide ${currentIndex + 1}`}
                                        className="w-auto h-auto max-w-full max-h-[85vh] object-contain"
                                    />
                                    {/* Glossy overlay effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>,
        document.body
    );
}
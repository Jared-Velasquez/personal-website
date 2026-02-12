"use client";

import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "./useInView";
import { useState } from "react";

const blogPosts = [
    {
        title: "Building Scalable React Applications",
        excerpt: "Learn the best practices and patterns for building React applications that scale with your team and user base.",
        date: "Feb 10, 2026",
        readTime: "8 min read",
        category: "React",
        image: "https://images.unsplash.com/photo-1581276879432-15e50529f34b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        slug: "building-scalable-react-applications"
    },
];

export function Blog() {
    const { ref, isInView } = useInView({ threshold: 0.2 });
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesPerView, setSlidesPerView] = useState(3);

    // Calculate slides per view based on window size
    useState(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setSlidesPerView(1);
            } else if (window.innerWidth < 1024) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(3);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    });

    const maxIndex = Math.max(0, blogPosts.length - slidesPerView);

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    return (
        <section id="blog" ref={ref} className="min-h-screen flex items-center px-6 md:px-20 lg:px-32 py-20">
            <div className="w-full max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-4">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-100">
                                Recent Articles
                            </h2>
                            <div className="h-px flex-1 bg-slate-700 max-w-xs"></div>
                        </div>
                        <div className="hidden md:flex gap-4">
                            <button
                                onClick={handlePrev}
                                disabled={currentIndex === 0}
                                className="w-10 h-10 rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentIndex >= maxIndex}
                                className="w-10 h-10 rounded-full border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500/10 transition-colors flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
                                aria-label="Next"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="overflow-hidden">
                        <motion.div
                            className="flex gap-6"
                            animate={{ x: `calc(-${currentIndex * (100 / slidesPerView)}% - ${currentIndex * 1.5}rem)` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {blogPosts.map((post, index) => (
                                <div
                                    key={post.slug}
                                    className="flex-shrink-0"
                                    style={{ width: `calc(${100 / slidesPerView}% - ${(slidesPerView - 1) * 1.5 / slidesPerView}rem)` }}
                                >
                                    <BlogCard post={post} index={index} isInView={isInView} />
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-2 mt-8">
                        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all ${currentIndex === index
                                    ? 'bg-emerald-500 w-8'
                                    : 'bg-slate-600 hover:bg-slate-500'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* <motion.div
                        className="text-center mt-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors"
                        >
                            View all articles
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </motion.div> */}
                </motion.div>
            </div>
        </section>
    );
}

function BlogCard({
    post,
    index,
    isInView
}: {
    post: typeof blogPosts[0];
    index: number;
    isInView: boolean;
}) {
    return (
        <motion.article
            className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700 hover:border-emerald-500 transition-all group h-full flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 * Math.min(index, 3), duration: 0.6 }}
            whileHover={{ y: -5 }}
        >
            <div className="relative overflow-hidden h-48">
                <div className="absolute inset-0 bg-emerald-500/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-emerald-500/90 text-slate-900 text-xs font-semibold rounded-full">
                        {post.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                    <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                    </span>
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-emerald-500 transition-colors">
                    {post.title}
                </h3>

                <p className="text-slate-400 mb-4 flex-1">
                    {post.excerpt}
                </p>

                <a
                    href={`#blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-emerald-500 hover:text-emerald-400 transition-colors text-sm font-semibold"
                >
                    Read more
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.article>
    );
}
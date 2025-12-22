"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectCard({ project }) {
    const cardRef = useRef(null);

    useEffect(() => {
        if (!cardRef.current) return;

        const animation = gsap.fromTo(
            cardRef.current,
            {
                x: -100,
                opacity: 0
            },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                    toggleActions: "play none none none",
                    once: true,
                }
            }
        );

        return () => {
            animation.kill();
        };
    }, []);

    return (
        <div
            ref={cardRef}
            className="border border-zinc-700 rounded-lg overflow-hidden hover:border-zinc-500 transition-colors bg-zinc-900/50"
        >
            {project.image_url && (
                <div className="w-full h-48 overflow-hidden bg-zinc-800">
                    <Image
                        src={project.image_url}
                        alt={project.title}
                        width={800}
                        height={400}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                </div>
            )}

            <div className="p-6">
                <h2 className="text-2xl font-bold mb-3">{project.title}</h2>

                {project.description && (
                    <p className="text-zinc-400 mb-4 line-clamp-3">{project.description}</p>
                )}

                {project.tech_tack && (
                    <div className="flex gap-2 flex-wrap mb-4">
                        {project.tech_tack.split(',').map((tech, i) => (
                            <span key={i} className="px-3 py-1 bg-zinc-800 rounded-full text-xs text-zinc-300">
                                {tech.trim()}
                            </span>
                        ))}
                    </div>
                )}

                <div className="flex gap-3 mt-4">
                    {project.github_url && (
                        <a
                            href={project.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm transition-colors"
                        >
                            GitHub
                        </a>
                    )}

                    {project.live_url && (
                        <a
                            href={project.live_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded text-sm transition-colors"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
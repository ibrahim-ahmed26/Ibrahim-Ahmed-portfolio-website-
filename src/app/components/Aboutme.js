"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)
export default function AboutSection() {
    const sectionRef = useRef(null)
    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, x: -900 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%", // when section enters viewport
                    toggleActions: "play none none none",
                },
            }
        )
    }, [])
    const skills = [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Next.js' },
        { name: 'Tailwind CSS' }
    ];
    return (
        <div id="about" className="bg-zinc-950 text-zinc-100" ref={sectionRef}>
            <div className="p-4">
                <h2 className="text-4xl text-center mb-2 text-white">
                    About Me
                </h2>

                <div>
                    <p className="w-full text-center text-zinc-300 animate-pulse">
                        Hi! I&apos;m Ibrahim Ahmed, a passionate Front-End Developer based in Cairo, Egypt.
                        I specialize in building responsive, clean, and user-friendly web interfaces
                        using modern technologies.
                    </p>

                    <div>
                        <h3 className="text-center text-3xl text-white mt-6">
                            My Tech Stack
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-6 text-center">
                            {skills.map((skill) => (
                                <div
                                    key={skill.name}
                                    className="bg-slate-900 border border-slate-800 rounded-xl
                                               hover:bg-slate-800 hover:-translate-y-1
                                               transition-all duration-300"
                                >
                                    <p className="text-sky-400 font-medium">
                                        {skill.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-center mt-6">
                    {[
                        { icon: '🎨', title: 'Design to Code', desc: 'Pixel-perfect implementations' },
                        { icon: '⚡', title: 'Performance', desc: 'Optimized & fast websites' },
                        { icon: '📱', title: 'Responsive', desc: 'Mobile-first approach' }
                    ].map((card) => (
                        <div
                            key={card.title}
                            className="bg-zinc-900 border border-zinc-800 rounded-xl
                                       hover:bg-zinc-800 transition-colors duration-300"
                        >
                            <div className="text-3xl">{card.icon}</div>
                            <h4 className="text-white">{card.title}</h4>
                            <p className="text-zinc-400">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center  p-2">
                <button className="text-white text-xl">
                    <a
                        href="/Ibrahim Ahmed Hussein - FrontEndDeveloper.pdf"
                        download="Ibrahim-Ahmed-CV.pdf"
                        className="inline-block bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        Download CV
                    </a>
                </button>
            </div>
        </div>
    );
}

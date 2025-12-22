"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma, FaNetworkWired } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSupabase, SiApifox } from "react-icons/si";
import { MdApi, MdDevices } from "react-icons/md";
gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { x: 400, opacity: 0 },
            {
                opacity: 1,
                x: 0,
                duration: 1,
                delay: 0.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                    toggleActions: "play none none none",
                },
            }
        );
    }, []);

    const skills = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
        { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
        { name: "React js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Next js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Figma", icon: <FaFigma className="text-purple-500" /> },
        { name: "Networking and Switching", icon: <FaNetworkWired className="text-blue-700" /> },
        { name: "Supabase", icon: <SiSupabase className="text-green-600" /> },
        { name: "REST API", icon: <MdApi className="text-blue-600" /> },
        { name: "Responsive Design", icon: <MdDevices className="text-gray-400" /> },
    ];

    return (
        <div className="bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8 overflow-hidden min-h-screen">
            <h1 className="md:text-4xl text-2xl text-center font-bold mb-12 text-white">
                Skills
            </h1>
            <div
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                id="skills"
                ref={sectionRef}
            >
                {skills.map((skill) => (
                    <div
                        className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 text-white hover:bg-slate-700/50 hover:border-blue-500 text-center rounded-xl p-6 transition-all hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer"
                        key={skill.name}
                    >
                        <span className="text-5xl inline-block mb-3">{skill.icon}</span>
                        <p className="mt-2 font-semibold text-lg">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
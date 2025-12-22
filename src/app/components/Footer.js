import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/ibrahim-ahmed26",
            icon: <FaGithub />,
            color: "hover:text-gray-400"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/ibrahim-ahmed-53795a213/",
            icon: <FaLinkedin />,
            color: "hover:text-blue-500"
        },
        {
            name: "Facebook",
            url: "https://www.facebook.com/IbrahimAhmed201",
            icon: <FaFacebook />,
            color: "hover:text-blue-600"
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/ibrahiimahmeed8/",
            icon: <FaInstagram />,
            color: "hover:text-pink-500"
        },
        {
            name: "Email",
            url: "mailto:ibrahimahmed384888@gmail.com",
            icon: <FaEnvelope />,
            color: "hover:text-red-500"
        }
    ];

    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-4">
                {/* Social Links */}
                <div className="flex justify-center items-center gap-6 mb-6">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-2xl transition-all duration-300 ${link.color} hover:scale-110`}
                            aria-label={link.name}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>

                {/* Email */}
                <div className="text-center mb-4">
                    <a 
                        href="mailto:ibrahimahmed384888@gmail.com"
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ibrahimahmed384888@gmail.com
                    </a>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-800 my-6"></div>

                {/* Copyright */}
                <div className="text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} Ibrahim Ahmed. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
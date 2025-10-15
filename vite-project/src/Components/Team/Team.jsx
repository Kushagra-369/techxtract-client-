import React from 'react';
import { FaUsers, FaPaintBrush, FaCog, FaShareAlt, FaLaptopCode } from 'react-icons/fa';

export default function Team() {
    const departments = [
        {
            name: "Public Relations",
            icon: <FaUsers className="inline mr-2" />,
            head: "Hitesh Tyagi",
            members: ["Bob Smith", "Carol Lee", "David Kim"]
        },
        {
            name: "Graphic Designing",
            icon: <FaPaintBrush className="inline mr-2" />,
            head: "Saksham",
            members: ["Frank White", "Grace Park", "Hannah Brown"]
        },
        {
            name: "Technical",
            icon: <FaLaptopCode className="inline mr-2" />,
            head: "Aryan Chauhan",
            members: ["Rachel King", "Steve Allen", "Tina Baker"]
        },
        {
            name: "Operations",
            icon: <FaCog className="inline mr-2" />,
            head: "Nidhish Bansal",
            members: ["Jackie Davis", "Kevin Hall", "Laura Scott"]
        },
        {
            name: "Social Media",
            icon: <FaShareAlt className="inline mr-2" />,
            head: "Tanuj Kumar",
            members: ["Nathan Young", "Olivia Turner", "Paul Harris"]
        }
    ];

    return (
        <div className="bg-black text-white min-h-screen px-6 py-10 pt-[180px] sm:pt-[200px] lg:pt-32">
            {/* pt-[180px] for mobile, sm:pt-[200px] for small screens, lg:pt-32 for desktop */}

            {/* Page Heading */}
            <h1 className="text-4xl sm:text-5xl font-bold text-cyan-400 text-center mb-12 animate-fade-in">
                Our Team
            </h1>

            {/* First row: first 3 departments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center mb-6">
                {departments.slice(0, 3).map((dept, index) => (
                    <div
                        key={index}
                        className="bg-gray-900 border-2 border-cyan-400 rounded-xl p-6 w-full sm:w-80"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-300">
                            {dept.icon}{dept.name}
                        </h2>
                        <p className="font-semibold mb-2">Head: {dept.head}</p>
                        <p className="font-medium">Members:</p>
                        <ul className="list-disc list-inside">
                            {dept.members.map((member, i) => (
                                <li key={i}>{member}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Second row: last 2 departments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 justify-items-center">
                {departments.slice(3).map((dept, index) => (
                    <div
                        key={index + 3}
                        className="bg-gray-900 border-2 border-cyan-400 rounded-xl p-6 w-full sm:w-80"
                    >
                        <h2 className="text-xl sm:text-2xl font-bold mb-2 text-cyan-300">
                            {dept.icon}{dept.name}
                        </h2>
                        <p className="font-semibold mb-2">Head: {dept.head}</p>
                        <p className="font-medium">Members:</p>
                        <ul className="list-disc list-inside">
                            {dept.members.map((member, i) => (
                                <li key={i}>{member}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

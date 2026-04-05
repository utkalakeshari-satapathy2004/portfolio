"use client";

const skills = [
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", },
    { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    // { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", img: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg", },
    { name: "shadcn/ui", img: "https://ui.shadcn.com/favicon.ico", },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", },
    { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", },
    // { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    // { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",     }
];

const Skills = () => {
    return (
        <section className="w-full py-15 bg-white dark:bg-[#060c1f] overflow-hidden">

            <p className="text-3xl text-center text-blue-500 font-medium uppercase tracking-wider pb-10">
                SKILLS
            </p>


            <div className="max-w-6xl mx-auto marquee-wrapper overflow-hidden">
                <div className="animate-marquee flex items-center h-16 w-max">
                    {[...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills, ...skills].map((skill, i) => (
                        <div
                            key={i}
                            className="mr-6 w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 hover:scale-110 transition"
                        >
                            <img
                                src={skill.img}
                                alt={skill.name}
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
"use client";

const skills = [
    { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Redux", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
    { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Express", img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
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
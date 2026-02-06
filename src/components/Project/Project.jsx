import style from "./Project.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
const Project = () => {
    return (
        <div className={`${style.project_container}  mt-5 mb-4`}>
            <h2 className={style.highlight}>Project</h2>
            <div className={`${style.project_list} mt-5`}>
                <ProjectCard
                    src="/WeSphere/logo.png"
                    title="SOCIAL NETWORKING PLATFORM"
                    type="Web App"
                    description="A social networking website that allows users to connect, share posts, and interact with each other, similar to Meta’s Threads."
                    stack={["React.js", "Node.js", "Express", "SQL Server"]}
                    time={3}
                    member={1}
                    url="/project/WeSphere"
                    feartured={true}
                />
                <ProjectCard
                    src="/WorkFind/logo.png"
                    title="JOB SEARCH PLATFORM"
                    type="Web App"
                    description="A job search platform that connects job seekers with employers. Employers can create and manage their own job postings, while job seekers can use an advanced search tool with custom filters to find suitable positions."
                    stack={["Vue.js", "Node.js", "MongoDB", "Express"]}
                    time={3}
                    member={1}
                    url="/project/WorkFind"
                />
                <ProjectCard
                    src="/Voyage/logo.png"
                    title="BUS TICKET BOOKING PLATFORM"
                    type="Web App"
                    description="Voyage is a bus ticket booking management website project that offers booking services for users, as well as
management tools for the system administrators."
                    stack={["PHP", "HTML", "CSS", "JavaScript", "MySQL"]}
                    time={3}
                    member={1}
                    url="/project/Voyage"
                />
            </div>
        </div>
    );
};
export default Project;

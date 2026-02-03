import style from "./Project.module.css";
import ProjectCard from "../ProjectCard/ProjectCard";
const Project = () => {
    return (
        <div className={style.project_container}>
            <ProjectCard
                src="/images/project1.jpg"
                title="E-commerce Platform"
                type="Web App"
                description="Nền tảng thương mại điện tử hiện đại với tích hợp thanh toán, quản lý kho hàng và dashboard analytics thời gian thực."
                stack={["React", "Node.js", "MongoDB", "Stripe"]}
                time={3}
                member={4}
                url="https://example.com/project1"
            />
        </div>
    );
};
export default Project;

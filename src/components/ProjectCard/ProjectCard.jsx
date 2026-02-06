import style from "./ProjectCard.module.css";
import { useNavigate } from "react-router-dom";
const ProjectCard = ({
    src,
    title,
    type,
    description,
    stack,
    time,
    member,
    url,
    feartured,
}) => {
    const navigate = useNavigate();
    return (
        <div className={style.card_modern}>
            <div className={style.card_image}>
                <img src={src} alt="" />
            </div>
            <div className={style.card_content}>
                <div>
                    <div className={style.card_header}>
                        <div>
                            <h3 className={style.card_title}>{title}</h3>
                            <span className={style.card_category}>{type}</span>
                            {feartured && (
                                <span
                                    className={`${style.card_category} ${style.card_featured}`}
                                >
                                    <span>⭐</span>
                                    Featured Project
                                </span>
                            )}
                        </div>
                    </div>
                    <p className={style.card_description}>{description}</p>
                    <div className={style.card_tags}>
                        {stack.map((tech, index) => (
                            <span key={index} className={style.tag}>
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div>
                    <div className={style.card_footer}>
                        <div className={style.card_meta}>
                            <div className={style.meta_item}>
                                <span>⏱️</span>
                                <span>{time} month</span>
                            </div>
                            <div className={style.meta_item}>
                                <span>👥</span>
                                <span>Team {member}</span>
                            </div>
                        </div>
                        <a
                            className={style.card_link}
                            onClick={() => {
                                navigate(url);
                            }}
                        >
                            View More
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;

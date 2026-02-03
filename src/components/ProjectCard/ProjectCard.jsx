import style from "./ProjectCard.module.css";

const ProjectCard = ({
    src,
    title,
    type,
    description,
    stack,
    time,
    member,
    url,
}) => {
    return (
        <div className={style.card_modern}>
            <div className={style.card_image}>
                <img src={src} alt="" />
            </div>
            <div className={style.card_content}>
                <div className={style.card_header}>
                    <div>
                        <h3 className={style.card_title}>{title}</h3>
                        <span className={style.card_category}>{type}</span>
                    </div>
                </div>
                <p className={style.card_description}>{description}</p>
                <div className={style.card_tags}>
                    {stack.map((tech, index) => (
                        <span key={index} className={style.tag}>
                            {tech}
                        </span>
                    ))}
                    {/* <span className={style.tag}>React</span>
                    <span className={style.tag}>Node.js</span>
                    <span className={style.tag}>MongoDB</span>
                    <span className={style.tag}>Stripe</span> */}
                </div>
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
                    <a href={url} className={style.card_link}>
                        Xem chi tiết
                        <span>→</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default ProjectCard;

import style from "./AboutMe.module.css";
const AboutMe = () => {
    return (
        <div className={`${style.about_me_container} mt-5 mb-4 row`}>
            <div className="col-6">
                <div className={style.about_me_picture}>
                    <img src="/portfolio/picture.jpg" alt="" />
                </div>
            </div>
            <div className={`col-6 ${style.about_me_content}`}>
                <h4>Minh Han - Fullstack Developer</h4>
                <p>
                    I am a passionate fullstack developer with expertise in both
                    frontend and backend technologies. I enjoy building scalable
                    and user-friendly web applications.
                </p>
            </div>
        </div>
    );
};
export default AboutMe;

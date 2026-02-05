import style from "./AboutMe.module.css";
const AboutMe = () => {
    return (
        <div className={`${style.about_me_container} mt-5 mb-4`}>
            <h2 className={style.highlight}>About me</h2>
            <div className="row w-100">
                <div className="col-6">
                    <div className={style.about_me_picture}>
                        <img src="/portfolio/picture.jpg" alt="" />
                    </div>
                </div>
                <div className={`col-6 ${style.about_me_content}`}>
                    <h4>Minh Han - Fullstack Developer</h4>
                    <p>
                        My name is Minh Hân. I graduated with a degree in
                        Information Technology from Can Tho University and am
                        currently seeking opportunities as an Intern/Fresher
                        Full-stack Developer. I previously gained internship
                        experience as a DevOps Intern at the IT Department of
                        Tay Do College.
                    </p>
                    <p>
                        I am passionate about programming and software
                        development, particularly in web development and AI. I
                        have experience working with technologies such as
                        React.js, Vue.js, Node.js, and Express, as well as
                        databases including SQL Server and MongoDB. I am always
                        eager to learn and stay up to date with new technologies
                        to continuously improve my skills.
                    </p>
                    <p>
                        In addition to my academic studies, I actively
                        participate in club and volunteer activities to develop
                        my soft skills, while also learning from and sharing
                        knowledge within the programming community. I believe
                        that collaboration and knowledge sharing are essential
                        for personal growth and meaningful contributions to the
                        community.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default AboutMe;

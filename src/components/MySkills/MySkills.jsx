import style from "./MySkills.module.css";
const MySkills = () => {
    return (
        <div className={`${style.my_skills_container} mt-5 mb-3 no_select`}>
            <h2 className={style.highlight}>My Skills</h2>
            <div className={`${style.skills_grid} mt-5`}>
                <div className={style.skills_column}>
                    <h4>Front-end</h4>
                    <ul className={style.skills_list}>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/html_logo.png" alt="" />
                            </div>
                            <span>HTML</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/css_logo.png" alt="" />
                            </div>
                            <span>CSS</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/js_logo.png" alt="" />
                            </div>
                            <span>JavaScript</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/dart_logo.png" alt="" />
                            </div>
                            <span>Dart</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/react_logo.png" alt="" />
                            </div>
                            <span>React</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/vue_logo.png" alt="" />
                            </div>
                            <span>Vue</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/flutter_logo.png" alt="" />
                            </div>
                            <span>Flutter</span>
                        </li>
                    </ul>
                </div>
                <div className={style.skills_column}>
                    <h4>Back-end</h4>
                    <ul className={style.skills_list}>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/php_logo.png" alt="" />
                            </div>
                            <span>PHP</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/python_logo.png" alt="" />
                            </div>
                            <span>Python</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/nodejs_logo.png" alt="" />
                            </div>
                            <span>Node.js</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/mysql_logo.png" alt="" />
                            </div>
                            <span>MySQL</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/sql_logo.png" alt="" />
                            </div>
                            <span>SQL Server</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/mongodb_logo.png" alt="" />
                            </div>
                            <span>MongoDB</span>
                        </li>
                    </ul>
                </div>
                <div className={style.skills_column}>
                    <h4>DevOps/Deploy</h4>
                    <ul className={style.skills_list}>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/git_logo.png" alt="" />
                            </div>
                            <span>Github Pages</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/vercel_logo.png" alt="" />
                            </div>
                            <span>Vercel</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/window_logo.png" alt="" />
                            </div>
                            <span>Windows Server</span>
                        </li>
                    </ul>
                </div>
                <div className={style.skills_column}>
                    <h4>Others</h4>
                    <ul className={style.skills_list}>
                        <li>
                            <div className={style.skill_logo}>
                                <img src="/portfolio/figma_logo.png" alt="" />
                            </div>
                            <span>Figma</span>
                        </li>
                        <li>
                            <div className={`${style.skill_logo}`}>
                                <img src="/portfolio/github_logo.png" alt="" />
                            </div>
                            <span>GitHub</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
export default MySkills;

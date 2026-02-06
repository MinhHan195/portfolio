import style from "./MySkills.module.css";
const MySkills = () => {
    const toggleAccordion = (e) => {
        const item = e.currentTarget.parentElement;
        console.log(item);
        const wasActive = item.classList.contains(style.active);
        document.querySelectorAll(`.${style.accordion_item}`).forEach((i) => {
            i.classList.remove(style.active);
        });
        console;
        if (wasActive) {
            item.classList.remove(style.active);
        } else {
            item.classList.add(style.active);
        }
    };
    return (
        <div className={`${style.my_skills_container} mt-5 mb-3 no_select`}>
            <h2 className={style.highlight}>My Skills</h2>
            <div className={`${style.accordion_container} mt-5`}>
                <div className={`${style.accordion_item} ${style.active}`}>
                    <button
                        className={`${style.accordion_button}`}
                        onClick={toggleAccordion}
                    >
                        <span>Front-end</span>
                        <span className={style.accordion_icon}>▼</span>
                    </button>
                    <div className={style.accordion_content}>
                        <div className={`${style.skills_grid}`}>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/html_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>HTML</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/css_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>CSS</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/js_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>JavaScript</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/dart_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>Dart</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/react_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>React</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/vue_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>Vue</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/flutter_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>Flutter</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.accordion_item}`}>
                    <button
                        className={`${style.accordion_button}`}
                        onClick={toggleAccordion}
                    >
                        <span>Back-end</span>
                        <span className={style.accordion_icon}>▼</span>
                    </button>
                    <div className={style.accordion_content}>
                        <div className={`${style.skills_grid}`}>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/php_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>PHP</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/python_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>Python</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/nodejs_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>Node.js</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/mysql_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>MySQL</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/sql_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>SQL Server</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/mongodb_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.accordion_item}`}>
                    <button
                        className={`${style.accordion_button}`}
                        onClick={toggleAccordion}
                    >
                        <span>DevOps/Deploy</span>
                        <span className={style.accordion_icon}>▼</span>
                    </button>
                    <div className={style.accordion_content}>
                        <div className={`${style.skills_grid}`}>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/git_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>Github Pages</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/vercel_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>Vercel</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/window_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>Windows Server</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${style.accordion_item}`}>
                    <button
                        className={`${style.accordion_button}`}
                        onClick={toggleAccordion}
                    >
                        <span>Other</span>
                        <span className={style.accordion_icon}>▼</span>
                    </button>
                    <div className={style.accordion_content}>
                        <div className={`${style.skills_grid}`}>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/figma_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>Figma</span>
                            </div>
                            <div className={`${style.skill_badge}`}>
                                <span className={style.skill_icon}>
                                    <img
                                        src="/portfolio/SkillsIcon/github_logo.png"
                                        alt=""
                                    />
                                </span>
                                <span>GitHub</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${style.skills_grid_container} mt-5`}>
                <div className={style.skills_column}>
                    <h4>Front-end</h4>
                    <ul className={style.skills_list}>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/html_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>HTML</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/css_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>CSS</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/js_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>JavaScript</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/dart_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>Dart</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/react_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>React</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/vue_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>Vue</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/flutter_logo.png"
                                    alt=""
                                />
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
                                <img
                                    src="/portfolio/SkillsIcon/php_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>PHP</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/python_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>Python</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/nodejs_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>Node.js</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/mysql_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>MySQL</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/sql_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>SQL Server</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/mongodb_logo.png"
                                    alt=""
                                />
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
                                <img
                                    src="/portfolio/SkillsIcon/git_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>Github Pages</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/vercel_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>Vercel</span>
                        </li>
                        <li>
                            <div className={style.skill_logo}>
                                <img
                                    src="/portfolio/SkillsIcon/window_logo.png"
                                    alt=""
                                />
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
                                <img
                                    src="/portfolio/SkillsIcon/figma_logo.png"
                                    alt=""
                                />
                            </div>
                            <span>Figma</span>
                        </li>
                        <li>
                            <div className={`${style.skill_logo}`}>
                                <img
                                    src="/portfolio/SkillsIcon/github_logo.png"
                                    alt=""
                                />
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

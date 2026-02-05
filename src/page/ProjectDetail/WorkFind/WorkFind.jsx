import style from "./WorkFind.module.css";
import { useTheme } from "../../../plugin/useTheme";
import { useNavigate } from "react-router-dom";
const WorkFind = () => {
    const navigate = useNavigate();
    const { theme, toggleTheme } = useTheme();
    const toggleThemeHandler = () => {
        toggleTheme();
        const icon = document.getElementById("theme-icon");
        icon.textContent = theme === "dark" ? "☀️" : "🌙";
    };
    return (
        <div className={style.projectDetail_container}>
            <div className={style.header}>
                <div className={style.header_content}>
                    <a
                        href="#"
                        className={style.back_btn}
                        onClick={() => navigate(-1)}
                    >
                        <span>
                            <i class="bi bi-arrow-left"></i>
                        </span>
                        <span>Back</span>
                    </a>
                    <div className={style.header_actions}>
                        <div
                            className={`${style.theme_toggle} me-4 py-1 px-3 no_select`}
                            onClick={toggleThemeHandler}
                        >
                            <div className={style.toggle_slider}>
                                <span id="theme-icon">
                                    {theme === "dark" ? "🌙" : "☀️"}
                                </span>
                            </div>
                        </div>
                        <a
                            href="https://github.com/MinhHan195/Work-Find.git"
                            target="_blank"
                            className={`${style.action_btn}`}
                        >
                            <span>
                                <i class="bi bi-github"></i>
                            </span>
                            <span>GitHub</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className={style.main_content}>
                {/* <!-- Hero Section --> */}
                <section className={style.hero_section}>
                    <div className={style.project_meta}>
                        <span className={`${style.meta_badge} ${style.status}`}>
                            <span className={style.status_dot}></span>
                            <span>Completed </span>
                        </span>
                        <span className={style.meta_badge}>
                            <span>🗓️</span>
                            <span>2025</span>
                        </span>
                        <span className={style.meta_badge}>
                            <span>👥</span>
                            <span>Team of 1</span>
                        </span>
                    </div>

                    <h1 className={style.hero_title}>Job search platform</h1>
                    <p className={style.hero_description}>
                        A job search platform that connects job seekers with
                        employers. Employers can create, manage, and publish job
                        postings, define job requirements, and track
                        applications. Job seekers can build and manage their
                        profiles, save jobs, apply online, and use an advanced
                        search system with customizable filters to find suitable
                        positions. The platform also supports secure
                        authentication and provides a streamlined experience for
                        both employers and candidates.
                    </p>
                    {/* <p className={style.hero_description}>
                        After successfully logging in, users can perform various
                        actions such as creating posts, editing their own posts,
                        and viewing and interacting with other users’ posts
                        through features like liking, reposting, commenting, and
                        saving posts. When users find accounts with interesting
                        content, they can follow them using the follow feature.
                        Conversely, if users do not wish to see certain accounts
                        appear in their feed, they can block those accounts.
                    </p>
                    <p className={style.hero_description}>
                        In addition, the website supports a search feature that
                        allows users to search for posts or other user accounts.
                        Users can also manage their personal information on the
                        profile page, including details such as username, date
                        of birth, gender, bio, links, posted content, media,
                        reposted posts, and more.
                    </p>
                    <p className={style.hero_description}>
                        Furthermore, users can manage their account settings on
                        the settings page, including options such as configuring
                        a private account, managing the block list, managing the
                        restricted list, disabling the account, switching
                        accounts, and more. Finally, the website also offers
                        additional features such as switching between dark and
                        light themes and viewing the list of liked and saved
                        posts.
                    </p> */}
                </section>

                {/* <!-- Tech Stack --> */}
                <section className={style.tech_stack}>
                    <h2 className={style.section_title}>🛠️ Tech Stack</h2>
                    <div className={style.tech_grid}>
                        <div className={style.tech_category}>
                            <h3>
                                <span>⚛️</span>
                                <span>Frontend</span>
                            </h3>
                            <div className={style.tech_tags}>
                                <span className={style.tech_tag}>Vue.js</span>
                                <span className={style.tech_tag}>HTML</span>
                                <span className={style.tech_tag}>CSS</span>
                                <span className={style.tech_tag}>
                                    JavaScript
                                </span>
                                <span className={style.tech_tag}>Pinia</span>
                                <span className={style.tech_tag}>
                                    Bootstrap5
                                </span>
                                <span className={style.tech_tag}>Axios</span>
                                <span className={style.tech_tag}>Vite</span>
                            </div>
                        </div>

                        <div className={style.tech_category}>
                            <h3>
                                <span>🔧</span>
                                <span>Backend</span>
                            </h3>
                            <div className={style.tech_tags}>
                                <span className={style.tech_tag}>Node.js</span>
                                <span className={style.tech_tag}>Express</span>
                                <span className={style.tech_tag}>JWT</span>
                                <span className={style.tech_tag}>
                                    NodeMailer
                                </span>
                            </div>
                        </div>

                        <div className={style.tech_category}>
                            <h3>
                                <span>💾</span>
                                <span>Database</span>
                            </h3>
                            <div className={style.tech_tags}>
                                <span className={style.tech_tag}>MongoDB</span>
                            </div>
                        </div>

                        <div className={style.tech_category}>
                            <h3>
                                <span>💳</span>
                                <span>Services</span>
                            </h3>
                            <div className={style.tech_tags}>
                                <span className={style.tech_tag}>
                                    Cloudinary
                                </span>
                            </div>
                        </div>

                        <div className={style.tech_category}>
                            <h3>
                                <span>🔧</span>
                                <span>Tool & others</span>
                            </h3>
                            <div className={style.tech_tags}>
                                <span className={style.tech_tag}>Git</span>
                                <span className={style.tech_tag}>Postman</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- Screenshots --> */}
                <section className={style.screenshots_section}>
                    <h2 className={style.section_title}>📸 Screenshots</h2>
                    <div className={style.screenshots_carousel}>
                        <div id="carouselExample" className="carousel slide">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img
                                        src="/portfolio/WorkFind/login.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/register.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/forgot-password.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/home.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/home2.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/home3.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/Find.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/JobDetail.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/JobDetail2.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/JobDetail3.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/profileSetting.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/profileSetting2.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/profileSetting3.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/JobAppliedManagement.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/JobFavorite.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/CVManagement.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/recruitment.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/profileSetting2.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/profileSetting3.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/Jobmanagerment.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/WorkFind/jobapplice.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                            </div>
                            <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="prev"
                            >
                                <span
                                    className="carousel-control-prev-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                    Previous
                                </span>
                            </button>
                            <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselExample"
                                data-bs-slide="next"
                            >
                                <span
                                    className="carousel-control-next-icon"
                                    aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </section>

                {/* <!-- Features --> */}
                <section className={style.features_section}>
                    <h2 className={style.section_title}>✨ Main features</h2>
                    <div className={style.features_grid}>
                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🔍</div>
                            <h3>Find Jobs</h3>
                            <p>
                                Allows users to search for relevant jobs with
                                advanced filtering options.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>📝</div>
                            <h3>Post a Job</h3>
                            <p>
                                Employers can post job listings by filling out a
                                predefined form with the required job criteria.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>📨</div>
                            <h3>Apply with CV</h3>
                            <p>
                                Users can apply to jobs by uploading their CVs.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🧑🏻‍💻</div>
                            <h3>Profile settings</h3>
                            <p>
                                Users can manage personal information such as
                                address and phone number, as well as review
                                their saved and applied jobs.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🔐</div>
                            <h3>Reset Password</h3>
                            <p>
                                Users can reset their password securely through
                                email verification and a secure password reset
                                process.
                            </p>
                        </div>
                    </div>
                </section>

                {/* <!-- Challenges & Solutions --> */}
                {/* <section className={style.challenges_section}>
                    <h2 className={style.section_title}>
                        🎯 Challenges & Solutions
                    </h2>

                    <div className={style.challenge_item}>
                        <h3>
                            <span>🔒</span>
                            <span>JWT Token Management</span>
                        </h3>
                        <p className={style.challenge_description}>
                            JWT token management involves challenges such as
                            secure token storage, handling expiration and
                            refresh flows, and preventing unauthorized access in
                            case of token leakage.
                        </p>
                        <div className={style.solution}>
                            <div className={style.solution_label}>
                                <span>💡</span>
                                <span>Solution:</span>
                            </div>
                            <div className={style.solution_text}>
                                Detect abnormal token usage, such as unusually
                                frequent access or excessive refresh token
                                requests, and blacklist compromised tokens to
                                prevent further use. Use short token expiration
                                times and store tokens in HttpOnly cookies on
                                the frontend.
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <!-- Team --> */}
                <section className={style.team_section}>
                    <h2 className={style.section_title}>👥 Team Members</h2>
                    <div className={style.team_grid}>
                        <div className={style.team_member}>
                            <div className={style.team_avatar}>👨‍💻</div>
                            <div className={style.team_name}>Me</div>
                            <div className={style.team_role}>Full-stack</div>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </section>
            </div>
        </div>
    );
};
export default WorkFind;

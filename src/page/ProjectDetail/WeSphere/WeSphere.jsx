import style from "./WeSphere.module.css";
import { useTheme } from "../../../plugin/useTheme";
import { useNavigate } from "react-router-dom";
const WeSphere = () => {
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
                            href="https://github.com/MinhHan195/WeSphere.git"
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
                        <span
                            className={`${style.meta_badge} ${style.featured}`}
                        >
                            <span>⭐</span>
                            <span>Featured Project</span>
                        </span>
                        <span className={`${style.meta_badge} ${style.status}`}>
                            <span className={style.status_dot}></span>
                            <span>On Hold</span>
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

                    <h1 className={style.hero_title}>
                        Social Networking Platform
                    </h1>
                    <p className={style.hero_description}>
                        This is a social networking website that allows users to
                        connect and interact with one another. The website
                        provides a login feature with two authentication
                        methods: using a user-created account or logging in via
                        an Instagram account.
                    </p>
                    <p className={style.hero_description}>
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
                    </p>
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
                                <span className={style.tech_tag}>ReactJS</span>
                                <span className={style.tech_tag}>HTML</span>
                                <span className={style.tech_tag}>CSS</span>
                                <span className={style.tech_tag}>
                                    JavaScript
                                </span>
                                <span className={style.tech_tag}>
                                    Redux Toolkit
                                </span>
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
                                <span className={style.tech_tag}>
                                    Sequelize
                                </span>
                                <span className={style.tech_tag}>JWT</span>
                                <span className={style.tech_tag}>
                                    InstagramAPI
                                </span>
                                <span className={style.tech_tag}>
                                    Socket.io
                                </span>
                            </div>
                        </div>

                        <div className={style.tech_category}>
                            <h3>
                                <span>💾</span>
                                <span>Database</span>
                            </h3>
                            <div className={style.tech_tags}>
                                <span className={style.tech_tag}>Redis</span>
                                <span className={style.tech_tag}>
                                    SQL Server
                                </span>
                            </div>
                        </div>

                        {/* <div className={style.tech_category}>
                            <h3>
                                <span>☁️</span>
                                <span>Infrastructure</span>
                            </h3>
                            <div className={style.tech_tags}>
                                <span className={style.tech_tag}>AWS</span>
                                <span className={style.tech_tag}>Docker</span>
                                <span className={style.tech_tag}>
                                    Kubernetes
                                </span>
                                <span className={style.tech_tag}>
                                    GitHub Actions
                                </span>
                                <span className={style.tech_tag}>Nginx</span>
                            </div>
                        </div> */}

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

                {/* <!-- Video Demo Section --> */}
                <section className={style.video_section}>
                    <h2 className={style.section_title}>🎥 Video Demo</h2>
                    <div className={style.video_container}>
                        <div className={style.video_wrapper}>
                            {/* <!-- Thay YOUR_VIDEO_ID bằng ID video YouTube của bạn --> */}
                            <iframe
                                src="https://www.youtube.com/embed/-k4vy_5yKlo?t=7s"
                                title="Project Demo Video"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                    <p className={style.video_description}>
                        💡 This video provides a full demo of the system's main
                        features.
                    </p>
                </section>

                {/* <!-- Features --> */}
                <section className={style.features_section}>
                    <h2 className={style.section_title}>✨ Main features</h2>
                    <div className={style.features_grid}>
                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>
                                <i className="bi bi-box-arrow-in-right"></i>
                            </div>
                            <h3>Sign in with Instagram</h3>
                            <p>
                                Allows users to log in with their Instagram
                                account. Seamless OAuth integration for easy
                                access.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>📝</div>
                            <h3>Create post</h3>
                            <p>
                                Users are able to create posts, save draft
                                posts, and manage or edit their own posts.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🧑🏻‍💻</div>
                            <h3>Profile settings</h3>
                            <p>
                                Users can manage personal information, as well
                                as their own and reposted posts, on their
                                profile page.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🤝</div>
                            <h3>Post interactions</h3>
                            <p>
                                Users can interact with posts through likes,
                                comments, reposts, and saves.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🔍</div>
                            <h3>Search for posts and users</h3>
                            <p>
                                Allows users to search for posts and user
                                accounts.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🔔</div>
                            <h3>Real-time Notifications</h3>
                            <p>
                                WebSocket notifications cho order updates,
                                inventory alerts và promotional campaigns.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>⚙️</div>
                            <h3>Account settings</h3>
                            <p>
                                Allows users to customize account privacy and
                                control interactions for a personalized
                                experience.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🌐</div>
                            <h3>Online status indicator</h3>
                            <p>
                                Allows users to see the activity status of
                                accounts they follow.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>
                                <img src="/insta.png" alt="" />
                            </div>
                            <h3>Instagram OAuth 2.0 Authentication</h3>
                            <p>
                                Supports social login via Instagram using OAuth
                                2.0 for secure authentication.
                            </p>
                        </div>
                    </div>
                </section>

                {/* <!-- Screenshots --> */}
                {/* <section className={style.screenshots_section}>
                    <h2 className={style.section_title}>📸 Screenshots</h2>
                    <div className={style.screenshots_grid}>
                        <div className={style.screenshot_item}>
                            <img src="/WeSphere/home.png" alt="" />
                        </div>
                        <div className={style.screenshot_item}>
                            <img src="" alt="" />
                        </div>
                        <div className={style.screenshot_item}>
                            <div className={style.screenshot_overlay}>
                                <div className={style.screenshot_label}>
                                    Shopping Cart
                                </div>
                            </div>
                        </div>
                        <div className={style.screenshot_item}>
                            <div className={style.screenshot_overlay}>
                                <div className={style.screenshot_label}>
                                    Checkout Process
                                </div>
                            </div>
                        </div>
                        <div className={style.screenshot_item}>
                            <div className={style.screenshot_overlay}>
                                <div className={style.screenshot_label}>
                                    Admin Dashboard
                                </div>
                            </div>
                        </div>
                        <div className={style.screenshot_item}>
                            <div className={style.screenshot_overlay}>
                                <div className={style.screenshot_label}>
                                    Mobile View
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <!-- Challenges & Solutions --> */}
                <section className={style.challenges_section}>
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

                    <div className={style.challenge_item}>
                        <h3>
                            <span>📢</span>
                            <span>Real-time online status notifications</span>
                        </h3>
                        <p className={style.challenge_description}>
                            Find an efficient solution for accurate real-time
                            notifications with minimal server and database
                            overhead.
                        </p>
                        <div className={style.solution}>
                            <div className={style.solution_label}>
                                <span>💡</span>
                                <span>Solution:</span>
                            </div>
                            <div className={style.solution_text}>
                                Use Redis to store users’ online status instead
                                of the database. A 5-minute countdown is
                                maintained on the server, while the client sends
                                a heartbeat request every 5 minutes to confirm
                                activity. If no heartbeat is received within the
                                time limit, the user is marked offline.
                            </div>
                        </div>
                    </div>

                    <div className={style.challenge_item}>
                        <h3>
                            <span>🔔</span>
                            <span>Notifications</span>
                        </h3>
                        <p className={style.challenge_description}>
                            Notifications are a critical feature; however, HTTP
                            only responds to client requests, while WebSocket
                            maintains a persistent two-way connection that can
                            consume excessive resources, requiring a more
                            efficient solution.
                        </p>
                        <div className={style.solution}>
                            <div className={style.solution_label}>
                                <span>💡</span>
                                <span>Solution:</span>
                            </div>
                            <div className={style.solution_text}>
                                Use Server-Sent Events (SSE) to establish a
                                one-way server-to-client connection, enabling
                                proactive notifications without prior client
                                requests and reducing API calls.
                            </div>
                        </div>
                    </div>
                </section>

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
export default WeSphere;

import style from "./Voyage.module.css";
import { useTheme } from "../../../plugin/useTheme";
import { useNavigate } from "react-router-dom";
const Voyage = () => {
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
                            href="https://github.com/MinhHan195/Voyage-website"
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
                            <span>2024</span>
                        </span>
                        <span className={style.meta_badge}>
                            <span>👥</span>
                            <span>Team of 1</span>
                        </span>
                    </div>

                    <h1 className={style.hero_title}>
                        Bus Ticket Booking Platform
                    </h1>
                    <p className={style.hero_description}>
                        Voyage is an online bus ticket booking platform that
                        enables users to search, select, and book bus tickets
                        with ease. The platform offers a user-friendly interface
                        where users can explore available routes, view detailed
                        schedules, choose seats, and make secure reservations
                        directly from their devices. In addition, Voyage helps
                        streamline the booking process by providing a convenient
                        and efficient experience for both travelers and bus
                        operators.
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
                                <span className={style.tech_tag}>HTML</span>
                                <span className={style.tech_tag}>CSS</span>
                                <span className={style.tech_tag}>
                                    JavaScript
                                </span>
                                <span className={style.tech_tag}>
                                    Bootstrap5
                                </span>
                            </div>
                        </div>

                        <div className={style.tech_category}>
                            <h3>
                                <span>🔧</span>
                                <span>Backend</span>
                            </h3>
                            <div className={style.tech_tags}>
                                <span className={style.tech_tag}>PHP</span>
                                <span className={style.tech_tag}>
                                    MVC Architecture
                                </span>
                                <span className={style.tech_tag}>PDO</span>
                            </div>
                        </div>

                        <div className={style.tech_category}>
                            <h3>
                                <span>💾</span>
                                <span>Database</span>
                            </h3>
                            <div className={style.tech_tags}>
                                <span className={style.tech_tag}>MySQL</span>
                            </div>
                        </div>

                        <div className={style.tech_category}>
                            <h3>
                                <span>🔧</span>
                                <span>Tool & others</span>
                            </h3>
                            <div className={style.tech_tags}>
                                <span className={style.tech_tag}>Git</span>
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
                                        src="/portfolio/Voyage/home.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/home2.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/home3.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/register.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/login.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/result.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/ticketdetail.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/confirm.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/pay.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/account.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/editaccount.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/changepassword.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/admin.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/admin2.png"
                                        className="d-block w-100"
                                        alt="..."
                                    />
                                </div>
                                <div className="carousel-item">
                                    <img
                                        src="/portfolio/Voyage/admin3.png"
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
                            <h3>Search Trips</h3>
                            <p>
                                Allows users to easily search for suitable trips
                                using three key inputs: departure location,
                                destination, and travel time.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>📝</div>
                            <h3>Trip Information</h3>
                            <p>
                                Allows users to view detailed trip information,
                                including departure terminal, destination,
                                travel duration, estimated arrival time, and
                                available seats for booking.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🎫</div>
                            <h3>Ticket Booking</h3>
                            <p>
                                Users can book selected trips by choosing their
                                preferred seats and completing the payment
                                process using multiple payment methods.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🧑🏻‍💻</div>
                            <h3>Profile settings</h3>
                            <p>
                                Users can manage personal information such as
                                address and phone number.
                            </p>
                        </div>

                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>🔐</div>
                            <h3>Booking History</h3>
                            <p>
                                Allows users to view their booking history,
                                track ticket statuses (paid, canceled, or
                                completed), and access detailed information for
                                each booking.
                            </p>
                        </div>
                        <div className={style.feature_card}>
                            <div className={style.feature_icon}>👨🏻‍💼</div>
                            <h3>Admin Dashboard</h3>
                            <p>
                                Provides admin tools to manage users, routes,
                                trips, vehicles, and billing records.
                            </p>
                        </div>
                    </div>
                </section>

                {/* <!-- Challenges & Solutions --> */}
                <section className={style.challenges_section}>
                    <h2 className={style.section_title}>
                        🎯 Challenges & Solutions
                    </h2>

                    <div className={style.challenge_item}>
                        <h3>
                            <span>🔒</span>
                            <span>SQL Injection Prevention</span>
                        </h3>
                        <p className={style.challenge_description}>
                            SQL Injection is a security vulnerability that
                            allows attackers to inject malicious SQL code into
                            database queries through user input, potentially
                            enabling unauthorized access, modification, or
                            deletion of data.
                        </p>
                        <div className={style.solution}>
                            <div className={style.solution_label}>
                                <span>💡</span>
                                <span>Solution:</span>
                            </div>
                            <div className={style.solution_text}>
                                Use PDO with prepared statements and parameter
                                binding to create and execute secure database
                                queries.
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
export default Voyage;

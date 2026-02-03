import style from "./HomePage.module.css";
// import { useLanguage } from "../../plugin/useLanguage";
import { useTheme } from "../../plugin/useTheme";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MySkills from "../../components/MySkills/MySkills";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Project from "../../components/Project/Project";
const HomePage = () => {
    // const { t } = useLanguage();
    const { theme, toggleTheme } = useTheme();

    const toggleThemeHandler = () => {
        toggleTheme();
        const icon = document.getElementById("theme-icon");
        icon.textContent = theme === "dark" ? "☀️" : "🌙";
    };

    return (
        <div className={style.container}>
            <div className={`${style.header_container} pb-2`}>
                <div className={`${style.header_dialog}  mt-3`}>
                    <div style={{ width: "144px" }}>
                        <div className={`${style.avatar} no_select`}>
                            <img src="/portfolio/avatar.jpg" alt="avatar" />
                        </div>
                    </div>
                    <div className={`${style.nav_menu} py-1 px-3 no_select`}>
                        <a className="me-4">Home</a>
                        <a href="#skills" className="me-4">
                            Project
                        </a>
                        <a href="#about" className="me-4">
                            About Me
                        </a>
                        <a href="#contact" className="me-4">
                            Contact
                        </a>
                    </div>
                    <div className="d-flex align-items-center h-100">
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
                        {/* <div
                            className={`${style.language_toggle} py-1 px-3 no_select`}
                            onClick={() => setLang(lang === "en" ? "vi" : "en")}
                        >
                            {lang.toUpperCase()}
                            {lang === "vi" ? (
                                <span className="fi fi-vn"></span>
                            ) : (
                                <span class="fi fi-us"></span>
                            )}
                        </div> */}
                    </div>
                </div>
            </div>
            <HeroBanner />
            <div id="skills"></div>
            <MySkills />
            <div id="project"></div>
            <Project />
            <div id="about"></div>
            <AboutMe />
            <div id="contact"></div>
            <Contact />
            <div className={style.footer}>©2026 Created by Nguyen Minh Han</div>
        </div>
    );
};
export default HomePage;

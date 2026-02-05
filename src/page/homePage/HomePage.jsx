import style from "./HomePage.module.css";
// import { useLanguage } from "../../plugin/useLanguage";
import { useTheme } from "../../plugin/useTheme";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import MySkills from "../../components/MySkills/MySkills";
import AboutMe from "../../components/AboutMe/AboutMe";
import Contact from "../../components/Contact/Contact";
import Project from "../../components/Project/Project";
import StaggeredMenu from "../../components/StaggeredMenu/StaggeredMenu";
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
            <div id="home"></div>
            <div className={`${style.header_container_1} pb-2`}>
                <div className={`${style.header_dialog}  mt-3`}>
                    <div style={{ width: "144px" }}>
                        <div className={`${style.avatar} no_select`}>
                            <img src="/portfolio/avatar.jpg" alt="avatar" />
                        </div>
                    </div>
                    <div className={`${style.nav_menu} py-1 px-3 no_select`}>
                        <a href="#home" className="me-4">
                            Home
                        </a>
                        <a href="#skills" className="me-4">
                            Skills
                        </a>
                        <a href="#project" className="me-4">
                            Project
                        </a>
                        <a href="#about" className="me-4">
                            About
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
            <div className={`${style.header_container_2} pb-2`}>
                <div className={`${style.header_dialog}  mt-3`}>
                    <div style={{ width: "144px" }}>
                        <div className={`${style.avatar} no_select`}>
                            <img src="/portfolio/avatar.jpg" alt="avatar" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
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
                        </div>
                        <StaggeredMenu />
                    </div>
                </div>
            </div>
            <HeroBanner />
            <div
                id="skills"
                className={`${style.scroll} ${style.scroll_skills} mt-5 pt-4`}
            ></div>
            <MySkills />
            <div id="project" className={style.scroll}></div>
            <Project />
            <div id="about" className={style.scroll}></div>
            <AboutMe />
            <div id="contact" className={style.scroll}></div>
            <Contact />
            <div className={style.footer}>©2026 Created by Nguyen Minh Han</div>
        </div>
    );
};
export default HomePage;

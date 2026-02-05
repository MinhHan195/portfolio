import { useRef } from "react";
import style from "./StaggeredMenu.module.css";
const StaggeredMenu = () => {
    const layer1 = useRef(null);
    const layer2 = useRef(null);
    const layer3 = useRef(null);
    const iconRef = useRef(null);

    const toggleMenu = () => {
        if (layer1.current.classList.contains(style.hide)) {
            layer1.current.classList.remove(style.hide);

            layer2.current.classList.remove(style.hide);

            layer3.current.classList.remove(style.hide);

            iconRef.current.classList.add(style.staggered_menu_icon_rotate);
        } else {
            layer1.current.classList.add(style.close);
            layer2.current.classList.add(style.close);
            layer3.current.classList.add(style.close);
            iconRef.current.classList.remove(style.staggered_menu_icon_rotate);
            setTimeout(() => {
                layer1.current.classList.add(style.hide);
                layer2.current.classList.add(style.hide);
                layer3.current.classList.add(style.hide);
                layer1.current.classList.remove(style.close);
                layer2.current.classList.remove(style.close);
                layer3.current.classList.remove(style.close);
            }, 500);
        }
    };
    return (
        <>
            <div
                className={style.staggered_menu_icon}
                onClick={toggleMenu}
                ref={iconRef}
            >
                <i className="bi bi-plus-lg"></i>
            </div>
            <div
                ref={layer1}
                className={`${style.staggered_menu_layer} ${style.layer_1} ${style.hide}`}
            ></div>
            <div
                ref={layer2}
                className={`${style.staggered_menu_layer} ${style.layer_2} ${style.hide}`}
            ></div>
            <div
                ref={layer3}
                className={`${style.staggered_menu_container} ${style.hide}`}
            >
                <div className={style.staggered_menu_content}>
                    <div className={`${style.nav_menu} py-1 px-3 no_select`}>
                        <div className={style.nav_menu_item}>
                            <a
                                href="#home"
                                className="me-4"
                                onClick={toggleMenu}
                            >
                                Home
                            </a>
                        </div>
                        <div className={style.nav_menu_item}>
                            <a
                                href="#skills"
                                className="me-4"
                                onClick={toggleMenu}
                            >
                                Skills
                            </a>
                        </div>
                        <div className={style.nav_menu_item}>
                            <a
                                href="#project"
                                className="me-4"
                                onClick={toggleMenu}
                            >
                                Project
                            </a>
                        </div>
                        <div className={style.nav_menu_item}>
                            <a
                                href="#about"
                                className="me-4"
                                onClick={toggleMenu}
                            >
                                About Me
                            </a>
                        </div>
                        <div className={style.nav_menu_item}>
                            <a
                                href="#contact"
                                className="me-4"
                                onClick={toggleMenu}
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default StaggeredMenu;

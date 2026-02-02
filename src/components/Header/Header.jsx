/* eslint-disable no-unused-vars */
import { useLanguage } from "../../plugin/useLanguage";
import style from "./Header.module.css";
const Header = () => {
    const { lang, setLang, t } = useLanguage();
    return (
        <div className={style.header_container}>
            <ul>
                <li>{t("home")}</li>
                <li>{t("about")}</li>
                <li>{t("projects")}</li>
                <li>{t("contact")}</li>
            </ul>
        </div>
    );
};
export default Header;

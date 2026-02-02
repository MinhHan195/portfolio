import { useEffect, useState } from "react";
import { LANGUAGES } from "./locales";
export function useLanguage() {
    const [lang, setLang] = useState(() => {
        return document.documentElement.lang;
    });

    const t = (key) => {
        return LANGUAGES[lang]?.[key] || key;
    };

    useEffect(() => {
        document.documentElement.lang = lang;
    }, [lang]);

    return { lang, setLang, t };
}

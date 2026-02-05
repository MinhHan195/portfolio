import style from "./HeroBanner.module.css";
import CardSwap, { Card } from "../CardSwap/CardSwap.jsx";
import TextType from "../TextType/TextType.jsx";

const HeroBanner = () => {
    return (
        <section className={`${style.hero_banner_container} mb-4`}>
            <div className="no_select">
                <div className="row align-items-center min-vh-100">
                    {/* <!-- Left --> */}
                    <div className="col-xl-7">
                        <div className={style.hero_content}>
                            <h1 className={style.hero_title}>
                                Hi, I'm{" "}
                                <span className={style.highlight}>
                                    Minh Hân
                                </span>
                                <br />A{" "}
                                <span className={style.highlight}>
                                    Fresher Fullstack Developer
                                </span>
                            </h1>

                            <p className={style.hero_desc}>
                                With a strong interest in web technologies, I
                                continuously learn and craft clean, responsive
                                websites that blend design and functionality.
                            </p>

                            <div className={style.hero_actions}>
                                <a
                                    className={style.btn_highlight}
                                    href="https://www.instagram.com/mh.minh_han/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className={`bi bi-instagram`}></i>
                                </a>
                                <a
                                    className={style.btn_highlight}
                                    href="https://www.facebook.com/share/1DFAfAw5Et/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a
                                    className={style.btn_highlight}
                                    href="https://github.com/MinhHan195"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-github"></i>
                                </a>
                                <a
                                    className={style.btn_highlight}
                                    href="https://www.linkedin.com/in/nguyen-minh-han"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                            <div
                                className={`mt-5 pt-5 w-100 position-relative ${style.view_more_container}`}
                            >
                                <button className={style.btn_view_more}>
                                    <a href="#skills">
                                        View more{" "}
                                        <span>
                                            <i className="bi bi-arrow-down"></i>
                                        </span>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Right: Code Card --> */}
                    <div className="col-xl-5 d-none d-xl-block">
                        <div
                            className={style.card_swap_container}
                            style={{ height: "600px", position: "relative" }}
                        >
                            <CardSwap
                                cardDistance={60}
                                verticalDistance={70}
                                delay={5000}
                                pauseOnHover={false}
                            >
                                <Card>
                                    <div className={style.terminal}>
                                        <div className={style.terminal_header}>
                                            <div
                                                className={`${style.terminal_dot} ${style.dot_red}`}
                                            ></div>
                                            <div
                                                className={`${style.terminal_dot} ${style.dot_yellow}`}
                                            ></div>
                                            <div
                                                className={`${style.terminal_dot} ${style.dot_green}`}
                                            ></div>
                                            <div
                                                className={style.terminal_title}
                                            >
                                                developer.js
                                            </div>
                                        </div>
                                        <div className={style.terminal_body}>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                >
                                                    $
                                                </span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        const{" "}
                                                    </span>
                                                    developer = {"{"}
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    name:
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        "Minh Hân"
                                                    </span>
                                                    ,
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    role:
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        "Fullstack Developer"
                                                    </span>
                                                    ,
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    skills: [
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        "React"
                                                    </span>
                                                    ,
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        "Vue"
                                                    </span>
                                                    ,
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        "Node.js"
                                                    </span>
                                                    ,
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        "SQL Server"
                                                    </span>
                                                    ,
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        "MongoDB"
                                                    </span>
                                                    ]
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    {"}"}
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                ></span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                >
                                                    $
                                                </span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_function
                                                        }
                                                    >
                                                        console.log
                                                    </span>
                                                    (developer.skills)
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={`${style.terminal_text} ${style.code_comment}`}
                                                >
                                                    // ["React", "Vue",
                                                    "Node.js","SQL Server",
                                                    "MongoDB"]
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                ></span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                >
                                                    $
                                                </span>
                                                <span
                                                    className={`${style.terminal_text} ${style.code_success}`}
                                                >
                                                    ✓ Ready to build amazing
                                                    things!
                                                </span>
                                                <span
                                                    className={style.cursor}
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className={style.terminal}>
                                        <div className={style.terminal_header}>
                                            <div
                                                className={`${style.terminal_dot} ${style.dot_red}`}
                                            ></div>
                                            <div
                                                className={`${style.terminal_dot} ${style.dot_yellow}`}
                                            ></div>
                                            <div
                                                className={`${style.terminal_dot} ${style.dot_green}`}
                                            ></div>
                                            <div
                                                className={style.terminal_title}
                                            >
                                                education.sh
                                            </div>
                                        </div>
                                        <div className={style.terminal_body}>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                >
                                                    $
                                                </span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    cat ~/education/journey.txt
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                ></span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={`${style.terminal_text} ${style.code_success}`}
                                                >
                                                    ╔════════════════════════════════════╗
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={`${style.terminal_text} ${style.code_success}`}
                                                >
                                                    ║&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                    EDUCATION BACKGROUND
                                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;║
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={`${style.terminal_text} ${style.code_success}`}
                                                >
                                                    ╚════════════════════════════════════╝
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                ></span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                >
                                                    📚
                                                </span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_keyword
                                                        }
                                                    >
                                                        University:
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        Can Tho University
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                >
                                                    🎯
                                                </span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_keyword
                                                        }
                                                    >
                                                        Degree:
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        Bachelor of Engineering
                                                        in Information
                                                        Technology
                                                    </span>
                                                    <span
                                                        className={style.badge}
                                                    ></span>
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                >
                                                    📅
                                                </span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_keyword
                                                        }
                                                    >
                                                        Period:
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_number
                                                        }
                                                    >
                                                        2021
                                                    </span>{" "}
                                                    -
                                                    <span
                                                        className={
                                                            style.code_number
                                                        }
                                                    >
                                                        2025
                                                    </span>
                                                </span>
                                            </div>

                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                ></span>
                                            </div>

                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                >
                                                    $
                                                </span>
                                                <span
                                                    className={`${style.terminal_text} ${style.code_success}`}
                                                >
                                                    ✓ Continuous learning
                                                    mindset
                                                </span>
                                                <span
                                                    className={style.cursor}
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                                <Card>
                                    <div className={style.terminal}>
                                        <div className={style.terminal_header}>
                                            <div
                                                className={`${style.terminal_dot} ${style.dot_red}`}
                                            ></div>
                                            <div
                                                className={`${style.terminal_dot} ${style.dot_yellow}`}
                                            ></div>
                                            <div
                                                className={`${style.terminal_dot} ${style.dot_green}`}
                                            ></div>
                                            <div
                                                className={style.terminal_title}
                                            >
                                                lifestyle.js
                                            </div>
                                        </div>
                                        <div className={style.terminal_body}>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        class{" "}
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_classname
                                                        }
                                                    >
                                                        MinhHanLifestyle
                                                    </span>{" "}
                                                    <span
                                                        className={
                                                            style.code_symbol
                                                        }
                                                    >
                                                        {"{"}
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        constructor
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_symbol2
                                                        }
                                                    >
                                                        () {" {"}
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        this
                                                    </span>
                                                    .
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        activelife
                                                    </span>{" "}
                                                    ={" "}
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        {"{ "}
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        active:
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_symbol
                                                        }
                                                    >
                                                        [
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_keyword
                                                        }
                                                    >
                                                        "Badminton"
                                                    </span>
                                                    ,
                                                    <span
                                                        className={
                                                            style.code_keyword
                                                        }
                                                    >
                                                        "Football"
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_symbol
                                                        }
                                                    >
                                                        ]
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        {" };"}
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        this
                                                    </span>
                                                    .
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        relaxtion
                                                    </span>{" "}
                                                    ={" "}
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        {"{ "}
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        music:
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_symbol
                                                        }
                                                    >
                                                        [
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_keyword
                                                        }
                                                    >
                                                        "Rap"
                                                    </span>
                                                    ,
                                                    <span
                                                        className={
                                                            style.code_keyword
                                                        }
                                                    >
                                                        "Balad"
                                                    </span>
                                                    ,
                                                    <span
                                                        className={
                                                            style.code_keyword
                                                        }
                                                    >
                                                        "City pop"
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_symbol
                                                        }
                                                    >
                                                        ]
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        {" };"}
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        this
                                                    </span>
                                                    .
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        exploration
                                                    </span>{" "}
                                                    ={" "}
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        {"{ "}
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        traveling:
                                                    </span>{" "}
                                                    <span
                                                        className={
                                                            style.code_boolean
                                                        }
                                                    >
                                                        true
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        {" };"}
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        this
                                                    </span>
                                                    .
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        growth
                                                    </span>{" "}
                                                    ={" "}
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        {"{ "}
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_string
                                                        }
                                                    >
                                                        learning:
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_symbol
                                                        }
                                                    >
                                                        [
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_keyword
                                                        }
                                                    >
                                                        "Technology"
                                                    </span>
                                                    ,
                                                    <span
                                                        className={
                                                            style.code_keyword
                                                        }
                                                    >
                                                        "Finance & Investments"
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_symbol
                                                        }
                                                    >
                                                        ]
                                                    </span>
                                                    <span
                                                        className={
                                                            style.code_const
                                                        }
                                                    >
                                                        {" };"}
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_symbol2
                                                        }
                                                    >
                                                        {"}"}
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                >
                                                    <span
                                                        className={
                                                            style.code_symbol
                                                        }
                                                    >
                                                        {"}"}
                                                    </span>
                                                </span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                ></span>
                                                <span
                                                    className={
                                                        style.terminal_text
                                                    }
                                                ></span>
                                            </div>
                                            <div
                                                className={style.terminal_line}
                                            >
                                                <span
                                                    className={
                                                        style.terminal_prompt
                                                    }
                                                >
                                                    //
                                                </span>
                                                <span
                                                    className={`${style.terminal_text} ${style.code_success}`}
                                                >
                                                    ✨Living life with purpose &
                                                    passion!
                                                </span>
                                                <span
                                                    className={style.cursor}
                                                ></span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </CardSwap>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default HeroBanner;

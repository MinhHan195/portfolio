import style from "./HeroBanner.module.css";
import CardSwap, { Card } from "../CardSwap/CardSwap.jsx";
import TextType from "../TextType/TextType.jsx";

const HeroBanner = () => {
    return (
        <section className={`${style.hero_banner_container} mb-4`}>
            <div className="no_select">
                <div className="row align-items-center min-vh-100">
                    {/* <!-- Left --> */}
                    <div className="col-lg-7">
                        <h1 className={style.hero_title}>
                            Hi, I'm{" "}
                            <span className={style.highlight}>Minh Hân</span>
                            <br />A{" "}
                            <span className={style.highlight}>
                                Fullstack Developer
                            </span>
                        </h1>

                        <p className={style.hero_desc}>
                            I craft modern, scalable, and maintainable web
                            applications with a strong focus on performance and
                            clean architecture.
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
                    </div>

                    {/* <!-- Right: Code Card --> */}
                    <div className="col-lg-5 d-none d-lg-block">
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
                                    <h3>Card 1</h3>
                                    <p>Your content here</p>
                                </Card>
                                <Card>
                                    <h3>Card 2</h3>
                                    <p>Your content here</p>
                                </Card>
                                <Card>
                                    <h3>Card 3</h3>
                                    <p>Your content here</p>
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

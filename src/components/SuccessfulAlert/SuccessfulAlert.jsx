import style from "./SuccessfulAlert.module.css";

const SuccessfulAlert = ({ showSuccessAlert, setShowSuccessAlert }) => {
    const handleSetShowSuccessAlert = (value) => {
        if (value === false) {
            const element = document.querySelector(
                `.${style.success_alert_container}`,
            );
            element.classList.remove(style.show);
            element.classList.add(style.hide);

            // Ẩn layer sau khi animation chạy xong
            element.addEventListener(
                "animationend",
                () => {
                    setShowSuccessAlert(false);
                },
                { once: true },
            );
        }
    };
    return (
        <>
            {showSuccessAlert && (
                <div className={`${style.success_alert_layer} `}>
                    <div
                        className={`${style.success_alert_container} ${showSuccessAlert ? style.show : style.hide}`}
                    >
                        <div className={style.success_alert_header}>
                            <div className={style.success_checkmark}>
                                <div className={style.checkmark_circle}>
                                    <div className={style.checkmark_icon}>
                                        <img
                                            src="/portfolio/check.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <h3>Sent successfully!</h3>
                        </div>
                        <div className={style.success_alert_body}>
                            <p>
                                Thank you for contacting me. I have received
                                your message and will respond at the earliest
                                opportunity.
                            </p>
                        </div>
                        <div className={style.success_alert_footer}>
                            <button
                                className={`${style.success_alert_close_btn} ${style.btn}`}
                                onClick={() => handleSetShowSuccessAlert(false)}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => handleSetShowSuccessAlert(false)}
                                className={`${style.success_alert_home_btn} ${style.btn}`}
                            >
                                Home
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
export default SuccessfulAlert;

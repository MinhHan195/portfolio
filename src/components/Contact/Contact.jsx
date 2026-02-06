import { useEffect, useState } from "react";
import style from "./Contact.module.css";
import emailjs from "@emailjs/browser";
import FailAlert from "../FailAlert/FailAlert.jsx";
import SuccessfulAlert from "../SuccessfulAlert/SuccessfulAlert.jsx";
const Contact = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [showDangerAlert, setShowDangerAlert] = useState(false);
    const [errors, setErrors] = useState({ email: "", message: "" });
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const sendEmail = () => {
        const nextErrors = { email: "", message: "" };
        const trimmedEmail = (email || "").trim();
        const trimmedMessage = (message || "").trim();

        if (!trimmedEmail) nextErrors.email = "Please enter your email.";
        else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(trimmedEmail))
                nextErrors.email = "Please enter a valid email address.";
        }

        if (!trimmedMessage) nextErrors.message = "Please enter a message.";

        setErrors(nextErrors);

        if (nextErrors.email || nextErrors.message) {
            return;
        }

        setLoading(true);

        emailjs
            .send(
                "service_lh62pqg",
                "template_2gcrjre",
                {
                    from_name: trimmedEmail,
                    message: trimmedMessage,
                },
                "x-XbZvTNwEa6XoNJp",
            )
            .then(
                (result) => {
                    console.log("Gửi thành công", result.text);
                    setEmail("");
                    setMessage("");
                    setErrors({ email: "", message: "" });
                    setShowDangerAlert(false);
                    setShowSuccessAlert(true);
                    setLoading(false);
                },
                (error) => {
                    setShowDangerAlert(true);
                    setLoading(false);
                    console.log("Gửi thất bại", error.text);
                },
            );
    };

    useEffect(() => {
        let timer;
        if (showDangerAlert) {
            timer = setTimeout(() => {
                setShowDangerAlert(false);
            }, 5000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [showDangerAlert]);

    return (
        <>
            <div className={`${style.contact_container} mt-5 mb-5`}>
                <h2 className={style.highlight}>Contact Me</h2>
                <div className={style.contact_form}>
                    <div className={style.item}>
                        <input
                            type="email"
                            className={style.form_control}
                            placeholder="Your Email"
                            value={email}
                            readOnly={loading}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                            <div className={style.input_error}>
                                {errors.email}
                            </div>
                        )}
                    </div>
                    <div className={style.item}>
                        <textarea
                            placeholder="Note"
                            id="floatingTextarea"
                            value={message}
                            rows={8}
                            readOnly={loading}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {errors.message && (
                            <div className={style.input_error}>
                                {errors.message}
                            </div>
                        )}
                    </div>
                    <div className={style.item}>
                        <button
                            onClick={sendEmail}
                            disabled={loading}
                            className={style.btn_submit}
                        >
                            {loading ? (
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">
                                        Loading...
                                    </span>
                                </div>
                            ) : (
                                "SEND MESSAGE"
                            )}
                        </button>
                    </div>
                </div>
                <h3 className={`${style.highlight} mt-3`}>OR</h3>
                <div className={style.contact_info}>
                    <div>
                        <i className="bi bi-telephone-fill me-2"></i>
                        +84977442854
                    </div>
                    <div>
                        <i className="bi bi-envelope me-3"></i>
                        work.minhhan@gmail.com
                    </div>
                </div>
            </div>
            {showDangerAlert && <FailAlert show={showDangerAlert} />}
            {showSuccessAlert && (
                <SuccessfulAlert
                    setShowSuccessAlert={setShowSuccessAlert}
                    showSuccessAlert={showSuccessAlert}
                />
            )}
        </>
    );
};
export default Contact;

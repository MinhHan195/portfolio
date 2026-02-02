import style from "./FailAlert.module.css";

const FailAlert = ({ show, message }) => {
    return (
        <div
            className={`${style.fail_alert_container} ${show ? style.showAlert : style.hideAlert}`}
        >
            {message || "Something wrong happened! Please try again later."}
        </div>
    );
};
export default FailAlert;

import { buttonConfig } from "../game/configs/button-config";

const Button = () => {
    const { buttonText, buttonStyle } = buttonConfig;
    return (
        <button id="button" style={buttonStyle}>
            {buttonText}
        </button>
    );
};

export default Button;

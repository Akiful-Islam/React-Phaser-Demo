import { buttonConfig } from "../game/configs/button-config";

// I wanted to try and implement a react button component inside phaser canvas
// But I couldn't really figure it out
// So this component is unused and dead code

const Button = () => {
    const { buttonText, buttonStyle } = buttonConfig;
    return (
        <button id="button" style={buttonStyle}>
            {buttonText}
        </button>
    );
};

export default Button;

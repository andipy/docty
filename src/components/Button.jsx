import React from "react";

const Button = ({buttonLabel, onClickFunction, button}) => {
    return (
        <button className={button.style + " mt-3 py-2 rounded-lg font-regular" }onClick={onClickFunction}>{button.label}</button>
    )
}

export default Button;
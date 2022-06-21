import React from "react";

const Input = ({ placeholder, type, label, name, onChange }) => {
    return (
        <div className="mb-6">
            <label>{label}</label>
            <input
                className="bg-teal-50 w-full py-3 px-4 rounded-lg font-regular"
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={onChange}
            />
        </div>        
    )
}

export default Input;
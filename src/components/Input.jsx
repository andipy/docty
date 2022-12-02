import React from "react";

const Input = ({ placeholder, type, label, name, onChange }) => {
    return (
        <div className="mb-6">
            <label className="text-white">{label}</label>
            <input
                className="mt-1 bg-dark-secondary-700 w-full py-3 px-4 rounded-lg font-regular text-white"
                placeholder={placeholder}
                type={type}
                name={name}
                onChange={onChange}
            />
        </div>
    )
}

export default Input;
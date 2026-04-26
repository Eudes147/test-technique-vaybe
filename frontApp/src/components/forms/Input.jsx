import {useState} from "react"
import Reveal from "../common/Reveal";

function Input({ label, type, name,placeholder,onChange,value, mandatory }) {
    return (
        <Reveal delay={0.5} className="w-full max-w-xs form-control">
            <label className="label">
                <span className="label-text">{label}</span>{mandatory && <span className=" color-red-500"> *</span>}
            </label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required
                className="input input-bordered outline-none focus:ring-2 focus:ring-cobalt-blue-700 focus:border-transparent w-full max-w-xs"
            />
        </Reveal>
    );
}

export default Input;
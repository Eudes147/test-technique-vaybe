import Reveal from "../common/Reveal"

function FileInput({ label, name, value,placeholder, onChange, mandatory }) {
    return (
        <Reveal delay={0.5} className="w-full max-w-xs form-control">
            <label className="label">
                <span className="label-text">{label}</span>{mandatory && <span className=" color-red-500"> *</span>}
            </label>
            <input
                type="file"
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required
                className="file-input input-bordered outline-none focus:ring-2 focus:ring-cobalt-blue-700 focus:border-transparent w-full max-w-xs"
            />
        </Reveal>
    );
}

export default FileInput;
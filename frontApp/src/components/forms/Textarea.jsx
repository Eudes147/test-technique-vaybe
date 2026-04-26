import Reveal from "../common/Reveal"

function Textarea({ label,placeholder, value, onChange, mandatory }) {
    return (
        <Reveal delay={0.5} className="w-full max-w-xs form-control">
            <label className="label">
                <span className="label-text">{label}</span>{mandatory && <span className=" color-red-500"> *</span>}
            </label>
            <textarea className="textarea outline-none focus:ring-2 focus:ring-cobalt-blue-700 focus:border-transparent w-full max-w-xs" placeholder={placeholder} value={value} onChange={onChange}></textarea>
        </Reveal>
    );
}

export default Textarea;
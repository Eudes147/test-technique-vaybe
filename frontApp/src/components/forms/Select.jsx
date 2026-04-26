import Reveal from "../common/Reveal"

function Select({ label, options }) {
    return (
        <Reveal delay={0.5} className="form-control w-full max-w-xs">
            <label className="label">
                <span className="label-text">{label}</span><span className="color-red-500">*</span>
            </label>
            <select defaultValue="Rôle" className="select outline-none focus:ring-2 focus:ring-cobalt-blue-700 focus:border-transparent w-full max-w-xs">
                {
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </Reveal>
    );
}

export default Select;
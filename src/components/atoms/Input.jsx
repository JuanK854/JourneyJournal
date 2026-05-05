
function Input({ type = "text", placeholder, value, onChange, className = "" }) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full rounded-full px-4 py-2 text-sm outline-1 ${className}`}
        />
    )
}
export default Input
function Input({ type = "text", name, placeholder, value, onChange, autoComplete, className = "" }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            className={`w-full rounded-full px-4 py-2 text-sm outline-1 ${className}`}
        />
    );
}

export default Input;
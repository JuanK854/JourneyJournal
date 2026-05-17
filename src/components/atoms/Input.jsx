function Input({ type = "text", name, placeholder, value, onChange, autoComplete, readOnly, onClick, className = "" }) {
    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            readOnly={readOnly}
            onClick={onClick}
            className={`w-full rounded-md px-4 py-2 text-sm bg-blue-50 border border-gray-200 outline-none focus:border-[#ff7226] ${className}`}
        />
    );
}

export default Input;
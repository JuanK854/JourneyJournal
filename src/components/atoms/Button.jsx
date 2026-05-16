
function Button({ children, onClick, variant = "primary", type = "button", disabled = false, className = "" }) {
    const variants = {
        primary: "bg-[#ff7226] text-amber-50 rounded-full py-2 font-semibold hover:bg-[#f4895a] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        ghost: "cursor-pointer py-2 px-8 text-gray-600 hover:text-[#ff7226] hover:bg-orange-50 disabled:opacity-50 disabled:cursor-not-allowed",
        outline: "border border-[#ff7226] text-[#ff7226] rounded-lg py-2 font-semibold hover:bg-orange-50 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
    };

    return (
        <button type={type} onClick={onClick} disabled={disabled} className={`${variants[variant]} ${className}`}>
            {children}
        </button>
    );
}

export default Button;
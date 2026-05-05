
function Button({ children, onClick, variant = "primary", type = "button", className = "" }) {
    const variants = {
        primary: "bg-[#ff7226] text-amber-50 rounded-full py-2 font-semibold hover:bg-[#f4895a] cursor-pointer",
        ghost: "cursor-pointer shadow py-2 px-8 hover:bg-[#F6A071]",
    }
    return (
        <button type={type} onClick={onClick} className={`${variants[variant]} ${className}`}>
            {children}
        </button>
    )
}
export default Button
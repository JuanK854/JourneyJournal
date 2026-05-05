
function Avatar({ src, alt = "Foto de perfil", size = "md", ring = false }) {
    const sizes = { sm: "w-8 h-8", md: "w-10 h-10", lg: "w-20 h-20" }
    return (
        <img
            className={`${sizes[size]} rounded-full object-cover ${ring ? "ring-8 ring-white shadow-2xl" : ""}`}
            src={src}
            alt={alt}
        />
    )
}
export default Avatar
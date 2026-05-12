
function AuthLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#fde8da] flex flex-col items-center justify-center gap-6">
            {children}
        </div>
    )
}
export default AuthLayout
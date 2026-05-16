import { useNavigate } from 'react-router-dom'
import Logo from '../atoms/Logo'
import NavUser from '../molecules/NavUser'
import useAuth from '../../hooks/useAuth'

function Navbar() {
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        logout()
        navigate('/login')
    }

    return (
        <header className="sticky top-0 w-full bg-[#F6A071] z-50 shadow-md">
            <nav className="flex justify-between items-center px-15 py-3">
                <Logo />
                <div className="flex items-center gap-4">
                    <NavUser src={user?.profile_picture} userName={user?.name} />
                    <button onClick={handleLogout} className="text-sm text-white hover:text-amber-100 cursor-pointer">
                        Salir
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
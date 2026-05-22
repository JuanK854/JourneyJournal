import { useNavigate } from 'react-router-dom'
import Logo from '../atoms/Logo'
import NavUser from '../molecules/NavUser'
import Icon from '../atoms/Icon'
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
            <nav className="flex justify-between items-center px-4 py-3">
                <Logo />
                <div className="flex items-center gap-3">
                    <a href="/settings" className="text-white hover:text-amber-100">
                        <Icon name="Cog6ToothIcon" size={22} className="text-white" />
                    </a>
                    <NavUser src={user?.profile_picture} userName={user?.name} />
                    <button onClick={handleLogout} className="text-white hover:text-amber-100 cursor-pointer">
                        <Icon name="ArrowRightOnRectangleIcon" size={22} className="text-white" />
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
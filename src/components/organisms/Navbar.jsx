import Logo from '../atoms/Logo'
import NavUser from '../molecules/NavUser'

function Navbar({ profileImg, userName }) {
    return (
        <header className="sticky top-0 w-full bg-[#F6A071] z-50 shadow-md">
            <nav className="flex justify-between items-center px-15 py-3">
                <Logo />
                <NavUser src={profileImg} userName={userName} />
            </nav>
        </header>
    )
}
export default Navbar
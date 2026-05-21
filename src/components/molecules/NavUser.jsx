import Avatar from '../atoms/Avatar'
import useAuth from '../../hooks/useAuth'

function NavUser({ src, userName }) {
    const { user } = useAuth()

    return (
        <a href={`/profile/${user?.id}`} className="flex items-center gap-2">
            <Avatar src={src} size="sm" />
            <span className="font-bold text-sm text-white">{userName}</span>
        </a>
    )
}

export default NavUser
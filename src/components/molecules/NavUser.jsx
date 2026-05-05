import Avatar from '../atoms/Avatar'

function NavUser({ src, userName, href = "/profile" }) {
    return (
        <a href={href} className="flex items-center gap-2">
            <Avatar src={src} size="sm" />
            {userName}
        </a>
    )
}
export default NavUser
import Avatar from '../atoms/Avatar'

function PostMeta({ src, userName, username, time, ubicacion, href = "/profile" }) {
    return (
        <div className="flex items-center gap-3 p-4">
            <a href={href}>
                <Avatar src={src} size="md" />
            </a>
            <div>
                <p className="font-semibold text-sm">{username || userName}</p>
                <p className="text-xs text-gray-400">{time} · {ubicacion}</p>
            </div>
        </div>
    )
}

export default PostMeta
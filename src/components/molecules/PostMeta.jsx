import Avatar from '../atoms/Avatar'

function PostMeta({ src, userName, username, time, ubicacion, userId }) {
    return (
        <div className="flex items-center gap-3 p-4">
            <a href={`/profile/${userId}`}>
                <Avatar src={src} size="md" />
            </a>
            <div>
                <a href={`/profile/${userId}`}>
                    <p className="font-semibold text-sm hover:underline">{username || userName}</p>
                </a>
                <p className="text-xs text-gray-400">{time} · {ubicacion}</p>
            </div>
        </div>
    )
}

export default PostMeta
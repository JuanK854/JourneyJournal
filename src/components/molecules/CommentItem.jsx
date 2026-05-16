import Avatar from '../atoms/Avatar'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'

function CommentItem({ comment, onDelete }) {
    const { user } = useAuth()
    const isOwner = user?.id === comment.user_id

    const handleDelete = async () => {
        try {
            await api.delete(`/comments/${comment.id}`)
            onDelete()
        } catch {
            console.error('Error al eliminar comentario')
        }
    }

    return (
        <div className="flex items-start gap-3 py-2">
            <Avatar src={comment.profile_picture} size="sm" />
            <div className="flex-1">
                <div className="bg-white rounded-lg px-3 py-2">
                    <p className="font-semibold text-xs">{comment.username}</p>
                    <p className="text-sm">{comment.content}</p>
                </div>
                <div className="flex items-center gap-3 mt-1 px-1">
                    <span className="text-xs text-gray-400">
                        {new Date(comment.created_at).toLocaleTimeString()}
                    </span>
                    {isOwner && (
                        <button onClick={handleDelete} className="text-xs text-red-400 hover:text-red-600 cursor-pointer">
                            Eliminar
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CommentItem
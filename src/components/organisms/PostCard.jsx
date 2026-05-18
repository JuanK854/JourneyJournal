import { useState, useEffect } from 'react'
import PostMeta from '../molecules/PostMeta'
import PostActions from '../molecules/PostActions'
import CommentItem from '../molecules/CommentItem'
import CommentBox from '../molecules/CommentBox'
import api from '../../services/api'

function PostCard({ postId, userId, profileImg, userName, username, time, ubicacion, title, body, viajeImg, showActions = false }) {
    const [showComments, setShowComments] = useState(false)
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchComments = async () => {
        setLoading(true)
        try {
            const { data } = await api.get(`/comments/${postId}`)
            setComments(data)
        } catch {
            console.error('Error al cargar comentarios')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (showComments) fetchComments()
    }, [showComments])

    return (
        <div className="bg-amber-50 rounded-md shadow overflow-hidden">
            <PostMeta src={profileImg} userName={userName} username={username} time={time} ubicacion={ubicacion} userId={userId} />
            <div className="px-4 pb-3">
                <h2 className="font-semibold text-lg mb-1">{title}</h2>
                <p className="text-sm">{body}</p>
            </div>
            {viajeImg && <img className="w-full object-cover max-h-72" src={viajeImg} alt="Imagen de viaje" />}
            {showActions && (
                <PostActions onComment={() => setShowComments(!showComments)} />
            )}
            {showComments && (
                <div className="px-4 pb-2">
                    {loading && <p className="text-xs text-gray-400 py-2">Cargando comentarios...</p>}
                    {comments.map(comment => (
                        <CommentItem key={comment.id} comment={comment} onDelete={fetchComments} />
                    ))}
                    <CommentBox postId={postId} onComment={fetchComments} />
                </div>
            )}
        </div>
    )
}

export default PostCard
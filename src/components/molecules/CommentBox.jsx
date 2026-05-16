import { useState } from 'react'
import Avatar from '../atoms/Avatar'
import Input from '../atoms/Input'
import Button from '../atoms/Button'
import useAuth from '../../hooks/useAuth'
import api from '../../services/api'

function CommentBox({ postId, onComment }) {
    const { user } = useAuth()
    const [content, setContent] = useState('')
    const [loading, setLoading] = useState(false)

    const handleSubmit = async () => {
        if (!content.trim()) return
        setLoading(true)
        try {
            await api.post(`/comments/${postId}`, { content })
            setContent('')
            onComment()
        } catch {
            console.error('Error al comentar')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex items-center gap-3 px-4 py-3">
            <Avatar src={user?.profile_picture} size="sm" />
            <Input
                placeholder="Escribe un comentario . . ."
                value={content}
                onChange={e => setContent(e.target.value)}
                className="rounded-lg"
            />
            <Button onClick={handleSubmit} disabled={loading || !content.trim()} className="px-4 rounded-lg">
                {loading ? '...' : 'Enviar'}
            </Button>
        </div>
    )
}

export default CommentBox
import toast from 'react-hot-toast'

function PostActions({ onComment, postId }) {
    const handleShare = () => {
        const url = `${window.location.origin}/posts/${postId}`
        navigator.clipboard.writeText(url)
            .then(() => toast.success('Link copiado'))
            .catch(() => toast.error('No se pudo copiar el link'))
    }

    return (
        <div className="flex text-sm">
            <button
                onClick={onComment}
                className="flex-1 py-2 text-gray-600 hover:text-[#ff7226] hover:bg-orange-50 cursor-pointer"
            >
                Comentar
            </button>
            <button
                onClick={handleShare}
                className="flex-1 py-2 text-gray-600 hover:text-[#ff7226] hover:bg-orange-50 cursor-pointer"
            >
                Compartir
            </button>
        </div>
    )
}

export default PostActions
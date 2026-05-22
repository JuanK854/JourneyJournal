import Button from '../atoms/Button'

function PostActions({ onComment, postId }) {
    const handleShare = () => {
        const url = `${window.location.origin}/posts/${postId}`
        navigator.clipboard.writeText(url)
            .then(() => alert('Link copiado al portapapeles'))
            .catch(() => alert('No se pudo copiar el link'))
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
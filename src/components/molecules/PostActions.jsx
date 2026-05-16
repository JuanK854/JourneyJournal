import Button from '../atoms/Button'

function PostActions({ onComment }) {
    return (
        <div className="flex border-t text-sm items-center justify-center">
            <Button variant="ghost" onClick={onComment} className="px-29">Comentar</Button>
            <Button variant="ghost" className="px-29">Compartir</Button>
        </div>
    )
}

export default PostActions
import PostMeta from '../molecules/PostMeta'
import PostActions from '../molecules/PostActions'

function PostCard({ profileImg, userName, time, ubicacion, title, body, viajeImg, showActions = false }) {
    return (
        <div className="bg-amber-50 rounded-md shadow overflow-hidden">
            <PostMeta src={profileImg} userName={userName} time={time} ubicacion={ubicacion} />
            <div className="px-4 pb-3">
                <h2 className="font-semibold text-lg mb-1">{title}</h2>
                <p className="text-sm">{body}</p>
            </div>
            <img className="w-full object-cover max-h-72" src={viajeImg} alt="Imagen de viaje" />
            {showActions && <PostActions />}
        </div>
    )
}
export default PostCard
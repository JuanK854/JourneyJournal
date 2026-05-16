import { useNavigate } from 'react-router-dom'
import MainLayout from '../components/templates/MainLayout'
import PostCard from '../components/organisms/PostCard'
import Input from '../components/atoms/Input'
import Spiner from '../components/atoms/Spiner'
import usePosts from '../hooks/usePosts'

function Home() {
    const { posts, loading, error } = usePosts()
    const navigate = useNavigate()

    return (
        <MainLayout>
            <section className="w-full max-w-xl">
                <div className="bg-amber-50 rounded-md shadow p-2 flex items-center gap-3">
                    <Input placeholder="¿Dónde te encuentras el día de hoy?" className="outline-none cursor-pointer" onClick={() => navigate('/crear-post')} />
                </div>
            </section>

            {loading && (
                <div className="flex justify-center py-10">
                    <Spiner size={32} />
                </div>
            )}

            {error && <p className="text-sm text-red-400">{error}</p>}

            {!loading && posts.map(post => (
                <section key={post.id} className="w-full max-w-xl">
                    <PostCard
                        profileImg={post.profile_picture}
                        userName={post.name}
                        time={new Date(post.created_at).toLocaleTimeString()}
                        ubicacion={post.city && post.country ? `${post.city}, ${post.country}` : post.city || post.country || ''}
                        title={post.title}
                        body={post.description}
                        viajeImg={post.media?.[0]?.url}
                        showActions
                    />
                </section>
            ))}
        </MainLayout>
    )
}

export default Home

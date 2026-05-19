import { useState } from 'react'
import MainLayout from '../components/templates/MainLayout'
import PostCard from '../components/organisms/PostCard'
import PostBox from '../components/organisms/PostBox'
import PostForm from '../components/organisms/PostForm'
import Spiner from '../components/atoms/Spiner'
import usePosts from '../hooks/usePosts'

function Home() {
    const { posts, loading, error } = usePosts()
    const [showModal, setShowModal] = useState(false)

    return (
        <MainLayout>
            <section className="w-full max-w-xl">
                <PostBox onOpen={() => setShowModal(true)} />
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
                        postId={post.id}
                        userId={post.user_id}
                        profileImg={post.profile_picture}
                        userName={post.name}
                        username={post.username}
                        time={new Date(post.created_at).toLocaleTimeString()}
                        ubicacion={post.city && post.country ? `${post.city}, ${post.country}` : post.city || post.country || ''}
                        title={post.title}
                        body={post.description}
                        media={post.media}
                        showActions
                    />
                </section>
            ))}

            {showModal && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
                    onClick={() => setShowModal(false)}
                >
                    <div onClick={e => e.stopPropagation()} className="w-full max-w-xl">
                        <PostForm onClose={() => setShowModal(false)} />
                    </div>
                </div>
            )}
        </MainLayout>
    )
}

export default Home
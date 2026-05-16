import MainLayout from '../components/templates/MainLayout'
import ProfileCard from '../components/organisms/ProfileCard'
import PostCard from '../components/organisms/PostCard'
import Spiner from '../components/atoms/Spiner'
import useAuth from '../hooks/useAuth'
import usePosts from '../hooks/usePosts'

function Profile() {
    const { user } = useAuth()
    const { posts, loading, error } = usePosts(user?.id)

    return (
        <MainLayout>
            <section className="w-full max-w-xl shadow-md">
                <ProfileCard
                    profileImg={user?.profile_picture}
                    userName={user?.name}
                    bio={user?.bio}
                    viajes={0}
                    posts={posts.length}
                    paises={0}
                />
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
                        profileImg={post.profile_picture}
                        userName={post.name}
                        time={new Date(post.created_at).toLocaleTimeString()}
                        ubicacion={post.city && post.country ? `${post.city}, ${post.country}` : post.city || post.country || ''}
                        title={post.title}
                        body={post.description}
                        viajeImg={post.media?.[0]?.url}
                    />
                </section>
            ))}
        </MainLayout>
    )
}

export default Profile
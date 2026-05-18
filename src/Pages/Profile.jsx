import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MainLayout from '../components/templates/MainLayout'
import ProfileCard from '../components/organisms/ProfileCard'
import PostCard from '../components/organisms/PostCard'
import Spiner from '../components/atoms/Spiner'
import usePosts from '../hooks/usePosts'
import api from '../services/api'

function Profile() {
    const { id } = useParams()
    const { posts, loading, error } = usePosts(id)
    const [profileUser, setProfileUser] = useState(null)

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const { data } = await api.get(`/users/${id}`)
                setProfileUser(data)
            } catch {
                console.error('Error al cargar usuario')
            }
        }
        fetchUser()
    }, [id])

    return (
        <MainLayout>
            <section className="w-full max-w-xl shadow-md">
                <ProfileCard
                    profileImg={profileUser?.profile_picture}
                    userName={profileUser?.name}
                    bio={profileUser?.bio}
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
                        username={post.username}
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
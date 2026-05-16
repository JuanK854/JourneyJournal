import MainLayout from '../components/templates/MainLayout'
import ProfileCard from '../components/organisms/ProfileCard'
import PostCard from '../components/organisms/PostCard'
import useAuth from '../hooks/useAuth'

function Profile() {
    const { user } = useAuth()
    const time = new Date().toLocaleTimeString()
    const ubicacion = "Kyoto, Japón"
    const viajeImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKkq6xd3ubBs-NI6zrL0U5RwCfAO50MykPg&s"

    return (
        <MainLayout>
            <section className="w-full max-w-xl shadow-md">
                <ProfileCard
                    profileImg={user?.profile_picture}
                    userName={user?.name}
                    bio={user?.bio}
                    viajes={0}
                    posts={0}
                    paises={0}
                />
            </section>
            <section className="w-full max-w-xl">
                <PostCard
                    profileImg={user?.profile_picture}
                    userName={user?.name}
                    time={time}
                    ubicacion={ubicacion}
                    title="Aventura en Kyoto"
                    body="Primer día explorando el Fushimi Inari Taisha. Miles de templos y santuarios por descubrir."
                    viajeImg={viajeImg}
                />
            </section>
        </MainLayout>
    )
}

export default Profile
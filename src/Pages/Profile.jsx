import MainLayout from '../components/templates/MainLayout'
import ProfileCard from '../components/organisms/ProfileCard'
import PostCard from '../components/organisms/PostCard'

function Profile() {
    const time = new Date().toLocaleTimeString()
    const userName = "Juan"
    const profileImg = "https://avatars.githubusercontent.com/u/105328583?v=4"
    const ubicacion = "Kyoto, Japón"
    const viajeImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKkq6xd3ubBs-NI6zrL0U5RwCfAO50MykPg&s"

    return (
        <MainLayout profileImg={profileImg} userName={userName}>
            <section className="w-full max-w-xl shadow-md">
                <ProfileCard
                    profileImg={profileImg}
                    userName={userName}
                    bio="Viajero viajante viajando a viajes vajeros"
                    viajes={12}
                    posts={48}
                    paises={4}
                />
            </section>
            <section className="w-full max-w-xl">
                <PostCard
                    profileImg={profileImg}
                    userName={userName}
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
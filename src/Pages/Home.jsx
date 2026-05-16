import MainLayout from '../components/templates/MainLayout'
import PostCard from '../components/organisms/PostCard'
import Input from '../components/atoms/Input'

function Home() {
    const time = new Date().toLocaleTimeString()
    const profileImg = "https://avatars.githubusercontent.com/u/105328583?v=4"
    const ubicacion = "Kyoto, Japón"
    const viajeImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYKkq6xd3ubBs-NI6zrL0U5RwCfAO50MykPg&s"

    return (
        <MainLayout>
            <section className="w-full max-w-xl">
                <div className="bg-amber-50 rounded-md shadow p-2 flex items-center gap-3">
                    <Input placeholder="¿Dónde te encuentras el día de hoy?" className="outline-none cursor-pointer" />
                </div>
            </section>
            <section className="w-full max-w-xl">
                <PostCard
                    profileImg={profileImg}
                    time={time}
                    ubicacion={ubicacion}
                    title="Aventura en Kyoto"
                    body="Primer día explorando el Fushimi Inari Taisha. Miles de templos y santuarios por descubrir."
                    viajeImg={viajeImg}
                    showActions
                />
            </section>
        </MainLayout>
    )
}

export default Home
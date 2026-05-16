import Navbar from '../organisms/Navbar'
import Footer from '../organisms/Footer'

function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-[#fde8da] flex flex-col items-center py-8 gap-5 px-4">
                {children}
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
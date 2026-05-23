import Avatar from '../atoms/Avatar'
import StatItem from '../molecules/StatItem'

function ProfileCard({ profileImg, userName, bio, posts, paises }) {
    return (
        <div className="bg-white rounded-md overflow-hidden">
            <div className="bg-[#b78aee] h-28 w-full" />
            <div className="flex flex-col items-center -mt-10 pb-6 px-4">
                <Avatar src={profileImg} size="lg" ring />
                <h2 className="font-bold text-lg mt-2">{userName}</h2>
                <p className="text-sm text-gray-400">{bio}</p>
            </div>
            <div className="flex justify-around py-3 border-t border-orange-100 text-sm text-gray-500 px-4">
                <StatItem value={posts} label="Posts" />
                <StatItem value={paises} label="Países" />
            </div>
        </div>
    )
}

export default ProfileCard
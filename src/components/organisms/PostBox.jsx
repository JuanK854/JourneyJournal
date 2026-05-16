import Input from '../atoms/Input'
import Avatar from '../atoms/Avatar'
import useAuth from '../../hooks/useAuth'

function PostBox({ onOpen }) {
    const { user } = useAuth()

    return (
        <div className="bg-amber-50 rounded-md shadow p-3 flex items-center gap-3 w-full">
            <Avatar src={user?.profile_picture} size="sm" />
            <Input
                placeholder="¿Dónde te encuentras el día de hoy?"
                readOnly
                onClick={onOpen}
                className="cursor-pointer"
            />
        </div>
    )
}

export default PostBox
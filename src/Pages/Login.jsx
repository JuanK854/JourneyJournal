import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/templates/AuthLayout'
import LoginForm from '../components/organisms/LoginForm'

function Login() {
    const navigate = useNavigate()
    return (
        <AuthLayout>
            <h1 className="text-4xl font-bold text-[#ff7226]">Travel App</h1>
            <LoginForm onSuccess={() => navigate('/home')} />
        </AuthLayout>
    )
}
export default Login
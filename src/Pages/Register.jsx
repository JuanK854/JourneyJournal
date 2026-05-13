import { useNavigate } from 'react-router-dom'
import AuthLayout from '../components/templates/AuthLayout'
import LoginForm from '../components/organisms/LoginForm'
import RegisterForm from '../components/organisms/RegisterForm'

function Register(){
    const navigate = useNavigate()


    return(
        <div>
            <h1 className="text-4xl font-bold text-[#ff7226]">Travel App</h1>
            <AuthLayout>
                <RegisterForm onSuccess={() => navigate('/home')}/>
            </AuthLayout>

        </div>
    )
}
export default Register
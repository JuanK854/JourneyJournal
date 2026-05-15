// Pages/Login.jsx
import AuthLayout from '../components/templates/AuthLayout'
import LoginForm from '../components/organisms/LoginForm'

function Login() {
    return (
        <AuthLayout>
            <h1 className="text-4xl font-bold text-[#ff7226]">JourneyJournal</h1>
            <LoginForm />
        </AuthLayout>
    )
}

export default Login
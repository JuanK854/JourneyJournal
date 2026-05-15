import AuthLayout from '../components/templates/AuthLayout'
import RegisterForm from '../components/organisms/RegisterForm'

function Register() {
    return (
        <AuthLayout>
            <h1 className="text-4xl font-bold text-[#ff7226]">JourneyJournal</h1>
            <RegisterForm />
        </AuthLayout>
    )
}

export default Register
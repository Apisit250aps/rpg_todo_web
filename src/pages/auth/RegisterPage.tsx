import RegisterForm from "../../components/forms/auth/RegisterForm"
function RegisterPage() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register</h1>
        </div>
        <RegisterForm />
      </div>
    </div>
  )
}

export default RegisterPage

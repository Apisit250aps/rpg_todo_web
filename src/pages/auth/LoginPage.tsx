import LoginForm from "../../components/forms/auth/LoginForm"
function LoginPage() {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login</h1>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage

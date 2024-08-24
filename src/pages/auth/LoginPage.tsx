import { useEffect } from "react"
import LoginForm from "../../components/forms/auth/LoginForm"
import { useNavigate } from "react-router-dom"
function LoginPage() {
  const navigate = useNavigate()

  useEffect(() => {
    // ตรวจสอบว่ามี authToken หรือไม่
    const authToken = localStorage.getItem("authToken")
    if (authToken) {
      // ถ้ามี authToken เปลี่ยนเส้นทางไปยังหน้า index
      navigate("/")
    }
  }, [navigate])

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

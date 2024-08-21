import { useState } from "react"
import apiClient from "../../../configs/axios"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    await apiClient
      .post("/auth/login", {
        username,
        password
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("authToken", response.data.token)
          Swal.fire({
            text: "Login Success!",
            icon: "success"
          })
          setTimeout(() => {
            navigate("/")
          }, 500)
        }
      })
  }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">username</span>
          </label>
          <input
            type="text"
            placeholder="username"
            className="input input-bordered"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label className="label">
            <a href="/register" className="label-text-alt link link-hover">
              I don't have an account!
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm

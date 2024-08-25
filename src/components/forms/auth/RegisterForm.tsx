import React, { useState } from "react"
import apiClient from "../../../configs/axios"
import Swal from "sweetalert2"
const RegisterForm: React.FC = () => {
  // State for form fields
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")

  // Handler for form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Send POST request to API endpoint
    await apiClient({
      method: "post",
      url: "/auth/register",
      data: {
        username,
        password,
        email
      }
    })
      .then((response) => {
        if (response.status === 201) {
          Swal.fire({
            title: "Successfully!",
            text: "Register Success!",
            icon: "success"
          })
        }
      })
      .catch((error) => {
        if (error.response.status === 409) {
          Swal.fire({
            title: "Error!",
            text: error.response.data.error,
            icon: "error"
          })
        } else if (error.response.status === 500) {
          Swal.fire({
            title: "Error!",
            text: error.response.data.error,
            icon: "error"
          })
        }
      })
    // Handle successful registration
  }
  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSubmit}>
      <div className="form-control">
          <label className="label">
            <span className="label-text">email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
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
            <a href="/login" className="label-text-alt link link-hover">
              I have an account!
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm

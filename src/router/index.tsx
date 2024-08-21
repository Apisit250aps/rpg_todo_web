import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
const router = createBrowserRouter([
  {
    path: "/",
    element: <>index</>
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  }
])

export default router

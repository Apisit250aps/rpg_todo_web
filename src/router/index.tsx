import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
import HomePage from "../pages/HomePage"
import Logout from "../pages/auth/Logout"
import CreateWorkPage from "../pages/CreateWorkPage"
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/logout",
    element: <Logout />
  },
  {
    path: "/:characterId",
    element: <CreateWorkPage />
  }
])

export default router

import { createBrowserRouter } from "react-router-dom"
import LoginPage from "../pages/auth/LoginPage"
import RegisterPage from "../pages/auth/RegisterPage"
import HomePage from "../pages/HomePage"
import Logout from "../pages/auth/Logout"
import CreateWorkPage from "../pages/CreateWorkPage"
import TasksPage from "../pages/TasksPage"
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
  },
  {
    path: "/:characterId/:workId",
    element: <TasksPage />
  }
])

export default router

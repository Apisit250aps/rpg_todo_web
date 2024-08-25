import { FC, ReactNode, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import apiClient from "../../configs/axios"

const HeroAuth: FC<{ children?: ReactNode }> = ({ children }) => {
  const navigate = useNavigate()
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await apiClient.get("/auth/check")
        if (response.status === 200) {
        
          setIsReady(true)
        }
      } catch {
        navigate("/logout")
      }
    }

    checkAuth()
  }, [navigate])

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content min-w-96">
        <div className="w-full flex flex-col items-center">
          {isReady ? (
            children
          ) : (
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HeroAuth

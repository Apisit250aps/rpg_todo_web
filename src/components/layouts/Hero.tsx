import { FC, ReactNode } from "react"

const HeroAuth: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center">
          <div className="min-w-96">{children}</div>
        </div>
      </div>
    </>
  )
}

export default HeroAuth

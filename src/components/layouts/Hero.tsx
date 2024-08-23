import { FC, ReactNode } from "react"

const HeroAuth: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content min-w-96">
          <div className="w-full flex flex-col items-center">{children}</div>
        </div>
      </div>
    </>
  )
}

export default HeroAuth

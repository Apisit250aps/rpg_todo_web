import { FC, ReactNode } from "react"

import { handleOpenModal } from "../modal"
const Navbar: FC<{
  modalId?: string
  children?: ReactNode
  title?: string
}> = ({ modalId = "", children = undefined, title = "" }) => {
  return (
    <>
      <div className="navbar bg-base-100 rounded-2xl w-full">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">{title}</a>
        </div>
        <div className="flex-none">
          <button
            type="button"
            onClick={() => handleOpenModal(modalId)}
            className="btn btn-ghost"
          >
            <i className="bx bx-message-square-add"></i>
          </button>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a href="/logout">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {children}
    </>
  )
}

export default Navbar

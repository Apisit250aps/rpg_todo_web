import { ReactNode } from "react"

export const openModal = (id: string) => {
  const modal = document.getElementById(id) as HTMLDialogElement
  if (modal) {
    modal.showModal()
  }
}

interface ModalProps {
  children: ReactNode
  id: string
  title: string
}

export default function Modal({ children, id, title }: ModalProps) {
  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-l">{title}</h3>
          <div className="divider"></div>
          {children}
        </div>
      </dialog>
    </>
  )
}

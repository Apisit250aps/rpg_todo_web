export const handleOpenModal = (id: string) => {
  const modal = document.getElementById(id) as HTMLDialogElement
  if (modal) {
    modal.showModal()
  }
}

export const handleCloseModal = (id: string) => {
  const modal = document.getElementById(id) as HTMLDialogElement
  if (modal) {
    modal.close()
  }
}

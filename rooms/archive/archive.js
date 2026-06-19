const AFIJArchive = {
  openModal(id) {
    const modal = document.getElementById(id);

    if (!modal) {
      alert("Missing modal: " + id);
      return;
    }

    document.body.appendChild(modal);
    modal.style.display = "block";
  },

  closeModal(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = "none";
  }
};

document.addEventListener("keydown", function(event) {
  if (event.key !== "Escape") return;

  const openModals = Array.from(document.querySelectorAll(".modal-app"))
    .filter(modal => modal.style.display === "block");

  const topModal = openModals[openModals.length - 1];

  if (topModal) topModal.style.display = "none";
});

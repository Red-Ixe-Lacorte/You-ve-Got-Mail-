function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove("hidden");

    setTimeout(() => {
        modal.classList.remove("opacity-0");
        if(modal.children[0]) {
            modal.children[0].classList.remove("scale-95");
            modal.children[0].classList.add("scale-100");
        }
    }, 10);
}
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add("opacity-0");
    if(modal.children[0]) {
        modal.children[0].classList.remove("scale-100");
        modal.children[0].classList.add("scale-95");
    }
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 300);
}

window.onclick = function(event) {
    if (event.target.classList.contains("fixed")) {
        if (!document.getElementById("messageModal").classList.contains("hidden")) closeModal("messageModal");
        if (!document.getElementById("privacyModal").classList.contains("hidden")) closeModal("privacyModal");
        if (!document.getElementById("termsModal").classList.contains("hidden")) closeModal("termsModal");

    }
}
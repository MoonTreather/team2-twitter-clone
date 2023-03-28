function changeButton() {
    /*Cambiar clase del boton*/
    const button = document.getElementById("follow-btn"); 
    const buttonPressed = (e) => {
    e.target.classList.toggle("follow");
    e.target.classList.toggle("following");
    e.target.innerText = e.target.innerText.trim() === "Follow" ? "Following" : "Follow";
    }
    button.addEventListener("click", buttonPressed);
}
  
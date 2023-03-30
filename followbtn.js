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

function change() {
    /*Cambiar clase del boton*/
    const button1 = document.getElementById("follow"); 
    const buttonPressed1 = (e) => {
    e.target.classList.toggle("follow");
    e.target.classList.toggle("following");
    e.target.innerText = e.target.innerText.trim() === "Follow" ? "Following" : "Follow";
    }
    button1.addEventListener("click", buttonPressed1);
}

function change2() {
    /*Cambiar clase del boton*/
    const button2 = document.getElementById("follow2"); 
    const buttonPressed2 = (e) => {
    e.target.classList.toggle("follow");
    e.target.classList.toggle("following");
    e.target.innerText = e.target.innerText.trim() === "Follow" ? "Following" : "Follow";
    }
    button2.addEventListener("click", buttonPressed2);
}

function change3() {
    /*Cambiar clase del boton*/
    const button3 = document.getElementById("follow3"); 
    const buttonPressed3 = (e) => {
    e.target.classList.toggle("follow");
    e.target.classList.toggle("following");
    e.target.innerText = e.target.innerText.trim() === "Follow" ? "Following" : "Follow";
    }
    button3.addEventListener("click", buttonPressed3);
}
  
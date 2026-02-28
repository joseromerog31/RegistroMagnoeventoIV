const confirmBtn = document.getElementById("confirmBtn");
const nameInput = document.getElementById("nameInput");
const errorMsg = document.getElementById("errorMsg");

// Pega aquí la URL de tu Web App
const scriptURL = "https://script.google.com/macros/s/AKfycbyjLolIN-EvQTOsyh0BPKetsE1NxrpfRwqIFYxcphwtNMpnndSdc3mgxnIS8RJ7nXiU/exec";

confirmBtn.addEventListener("click", async () => {
    const name = nameInput.value.trim();

    if (name === "") {
        errorMsg.textContent = "Por favor, escribe tu nombre.";
        return;
    }

    errorMsg.textContent = "";

    try {
        const formData = new FormData();
        formData.append("name", name);

        await fetch(scriptURL, {
            method: "POST",
            mode: "no-cors",
            body: formData
        });

        sessionStorage.setItem("guestName", name);
        window.location.href = "success.html";

    } catch (error) {
        errorMsg.textContent = "Hubo un problema al guardar el nombre.";
        console.error(error);
    }
});
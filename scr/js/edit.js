document.addEventListener("DOMContentLoaded", () => {
    
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const name = params.get("name");
    const age = params.get("age");
    const email = params.get("email");
    const modality = params.get("modality");

    
    const nameInput = document.getElementById("name");
    const ageInput = document.getElementById("age");
    const emailInput = document.getElementById("email");
    const modalityInput = document.getElementById("modality");

    nameInput.value = name || "";
    ageInput.value = age || "";
    emailInput.value = email || "";
    if (modality) {
        modalityInput.value = modality;
    }

    
    const cancelButton = document.querySelector(".cancel-button");
    cancelButton.addEventListener("click", () => {
        
        window.location.href = "index.html";
    });

    
    const saveButton = document.querySelector(".btn-save");
    saveButton.addEventListener("click", (event) => {
        event.preventDefault(); 

        
        alert("Alterações salvas com sucesso!");
        window.location.href = "index.html"; 
    });
});

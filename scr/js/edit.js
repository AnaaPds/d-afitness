document.addEventListener("DOMContentLoaded", () => {
    // Obtém os parâmetros da URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const name = params.get("name");
    const age = params.get("age");
    const email = params.get("email");
    const modality = params.get("modality");

    // Preenche os campos do formulário com os dados recebidos
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

    // Botão Cancelar
    const cancelButton = document.querySelector(".cancel-button");
    cancelButton.addEventListener("click", () => {
        // Retorna para a página inicial
        window.location.href = "index.html";
    });

    // Botão Salvar
    const saveButton = document.querySelector(".btn-save");
    saveButton.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o comportamento padrão do botão

        // Aqui você pode implementar o envio dos dados para o servidor
        alert("Alterações salvas com sucesso!");
        window.location.href = "index.html"; // Retorna à página inicial após salvar
    });
});
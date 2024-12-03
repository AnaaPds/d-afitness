document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.querySelector(".btn-save");
    const nameInput = document.querySelector(".form-add input[placeholder='Nome']");
    const ageInput = document.querySelector(".form-add input[placeholder='Idade']");
    const emailInput = document.querySelector(".form-add input[placeholder='Email']");
    const modalityInput = document.querySelector(".form-add select");
    const tableBody = document.querySelector("table tbody");

    // Função para adicionar um novo aluno à tabela
    saveButton.addEventListener("click", (event) => {
        event.preventDefault(); // Impede o comportamento padrão do botão
        
        // Verifica se todos os campos estão preenchidos
        if (!nameInput.value || !ageInput.value || !emailInput.value || !modalityInput.value) {
            alert("Por favor, preencha todos os campos antes de salvar.");
            return;
        }

        // Cria uma nova linha na tabela
        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${tableBody.children.length + 1}</td>
            <td>${nameInput.value}</td>
            <td>${ageInput.value}</td>
            <td>${emailInput.value}</td>
            <td>${modalityInput.value}</td>
            <td><button class="btn-edit"><img src="./scr/image/editar.png" alt="Editar"></button></td>
            <td><button class="btn-delete"><img src="./scr/image/lixeira.png" alt="Excluir"></button></td>
        `;
        tableBody.appendChild(newRow);

        // Limpa os campos do formulário
        nameInput.value = "";
        ageInput.value = "";
        emailInput.value = "";
        modalityInput.value = "";

        // Adiciona eventos aos botões da nova linha
        addRowEvents(newRow);
    });

    // Função para adicionar eventos de edição e exclusão às linhas
    function addRowEvents(row) {
        const editButton = row.querySelector(".btn-edit");
        const deleteButton = row.querySelector(".btn-delete");

        // Botão Editar
        editButton.addEventListener("click", () => {
            const cells = row.children;
        const id = cells[0].innerText;
        const name = cells[1].innerText;
        const age = cells[2].innerText;
        const email = cells[3].innerText;
        const modality = cells[4].innerText;

            const url = `edit.html?id=${id}&name=${encodeURIComponent(name)}&age=${age}&email=${encodeURIComponent(email)}&modality=${encodeURIComponent(modality)}`;
    window.location.href = url;
        });

        // Botão Excluir
        deleteButton.addEventListener("click", () => {
            if (confirm("Tem certeza que deseja excluir este aluno?")) {
                row.remove();
                alert("Aluno excluído com sucesso!");
            }
        });
    }

    // Adiciona eventos às linhas existentes
    const rows = tableBody.querySelectorAll("tr");
    rows.forEach(addRowEvents);
});

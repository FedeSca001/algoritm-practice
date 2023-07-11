const input = document.getElementById("palabraClave");
const listaResultado = document.querySelector(".lista-resultado");
let users = [];

const getUsers = async () => {
    const response = await fetch('user.json');
    users = await response.json();
};

const result = () => {
    const keyword = input.value.toLowerCase();
    let resultadoHTML = "";
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        for (const propiedad in user) {
            if (user.hasOwnProperty(propiedad)) {
                const valor = user[propiedad].toString().toLowerCase();
                if (valor.includes(keyword)) {
                    const textoResaltado = user.Nombre.replace(new RegExp(keyword, "gi"), match => `<span class="resaltado">${match}</span>`);
                    resultadoHTML += `Nombre: ${textoResaltado} Valor: ${valor}<br>`;
                }
            }
        }
    }
    listaResultado.innerHTML = resultadoHTML;
};

getUsers();

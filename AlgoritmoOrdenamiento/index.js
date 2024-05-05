const input = document.querySelector(".input-number");
const addNumber = document.querySelector(".add-number");
const ulOrdenados = document.querySelector(".ul-ordenados");
const ordenarButton = document.querySelector(".ordenar-button");

const listaDeNumero = [];

const renderizarLista = () => {
    ulOrdenados.innerHTML = "";
    listaDeNumero.forEach(numero => {
        const li = document.createElement("li");
        li.textContent = numero;
        ulOrdenados.appendChild(li);
    });
};

const agregarNumero = () => {
    listaDeNumero.push(Number(input.value));
    renderizarLista();
    input.value = "";
};

const bubbleSort = () => {
    let n = listaDeNumero.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (listaDeNumero[i] > listaDeNumero[i + 1]) {
                let temp = listaDeNumero[i];
                listaDeNumero[i] = listaDeNumero[i + 1];
                listaDeNumero[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    renderizarLista();
};

input.addEventListener('keydown',(e)=>{
    if (e.keyCode === 13) agregarNumero()
});

addNumber.addEventListener('click', agregarNumero);
ordenarButton.addEventListener('click', bubbleSort);

// Generar números aleatorios al cargar la página
const tamañoArray = 10000; // Diez mil elementos
for (let i = 0; i < tamañoArray; i++) {
    listaDeNumero.push(Math.floor(Math.random() * 1000000)); // Números aleatorios del 0 al 999999
}
renderizarLista();
console.log("Array gigante creado:", listaDeNumero);

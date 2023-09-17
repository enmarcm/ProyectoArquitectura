import CPU from "./js/CPU.js";
import memoria from "./js/Memoria.js";
import Registro from "./js/Registros.js";

let inputCantidad = document.querySelector(".inputCantidad");
let btnOk = document.querySelector(".btnOk");

let containerInputs = document.querySelector(".containerInputs");
let containerRowSumas = document.querySelector(".rowResultados");

let arrayDatos = [];

let tablas = document.querySelector(".colTablas");
let tablaRegistros = document.querySelector(".tablaBRegistros");
let tablaMemoria = document.querySelector(".tablaBMemoria");

let btnSumar = document.createElement("button");
btnSumar.classList.add("btn", "btn-danger", "w-100");
btnSumar.innerHTML = "Sumar";

btnOk.addEventListener("click", () => {
  BorrarInputs();

  if (inputCantidad.value != "" && !isNaN(Number(inputCantidad.value))) {
    if (inputCantidad.value < 2) {
      alert("Debe ser minimo de 2");
      inputCantidad.value = 2;
    }

    let cantidadN = Number(inputCantidad.value);

    for (let i = 0; i < cantidadN; i++) {
      let input = document.createElement("input");
      input.placeholder = `Valor N# ${i+1}`
      input.classList.add("form-control", "mb-4", "inputDato");

      containerInputs.append(input);
    }

    containerInputs.append(btnSumar);

    containerRowSumas.classList.remove("d-none");
  }
});

btnSumar.addEventListener("click", () => {
  memoria.BorrarMemoria();
  arrayDatos = [];
  let inputsDatos = document.querySelectorAll(".inputDato");

  inputsDatos.forEach((e) => {
    arrayDatos.push(Number(e.value));
  });
  memoria.AgregarValor(arrayDatos, Registro);
  document.querySelector(".valoresBinario").value =
    CPU.CambiarABinario(memoria);

  let resultadoNormal = memoria.AgregarValor(memoria.suma, Registro);

  document.querySelector(".resultadoNormal").value = resultadoNormal;

  document.querySelector(".resultadoBinario").value =
    CPU.CambiarABinario(resultadoNormal);

  LlenarTablaRegistros(tablaRegistros);
  LlenarTablaMemoria(tablaMemoria);

  tablas.classList.remove("d-none");
});

const LlenarTablaRegistros = (container) => {
  container.innerHTML = "";
  let registrosAlmacenados = Registro.MostrarRegistros();

  registrosAlmacenados.forEach((e) => {
    container.innerHTML += `<tr>
        <td>${e}</td>
    </tr>`;
  });
};

const LlenarTablaMemoria = (container) => {
  container.innerHTML = "";
  let memoriaAlmacenada = memoria.MostrarMemoria();

  memoriaAlmacenada.forEach((e) => {
    container.innerHTML += `<tr>
        <td>${e}</td>
    </tr>`;
  });
};

const BorrarInputs = () => {
  document.querySelectorAll(".inputDato").forEach((e) => {
    e.remove();
  });
};

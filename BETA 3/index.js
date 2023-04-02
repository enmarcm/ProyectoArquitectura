import UC from "./js/UC.js"
import CPU from "./js/CPU.js"
import Memoria from "./js/Memoria.js"
import Registro from "./js/Registros.js"


let arrayValores = [4,5,2,3,21,234,2,76,33,1,23,122,65,23,2,23,123,52,1,63,1,1,1,1,1]

let memoria = new Memoria().AgregarValor(arrayValores, Registro)
let datosBinario = CPU.CambiarABinario(memoria.memoria)

console.log(`El equivalente en binario de lo que se va a pasar es: ${datosBinario}`)

console.log("Mientras que los registros son")

Registro.MostrarRegistros()


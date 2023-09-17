import CPU from "./CPU.js";

class UC {
  static PasarACPU = (memoria, registro) => {
    let suma = CPU.Sumar(memoria, registro);

    memoria.memoria.forEach((e, i) => {
      registro.Registrar(
        `Se paso el dato de la Direccion de Memoria ${
          memoria.memoria.get(i).espacioMemoria
        } a la CPU`
      );
    });

    return suma;
  };
}

export default UC;

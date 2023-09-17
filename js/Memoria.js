import UC from "./UC.js";

class Memoria {
  constructor() {
    this.memoria = new Map();
    this.contadorMemoria = 0;
    this.suma;
    return this;
  }

  AgregarValor = (dato, registro) => {
    // Esto es para los reusltados
    if (!isNaN(dato)) {
      this.contadorMemoria++;
      this.memoria.set(this.contadorMemoria, {
        espacioMemoria: this.GenerarRandom(),
        valorPasado: dato,
      });
      registro.Registrar(`Agregado el dato ${dato} a la memoria`);
      return dato;
    } else if (typeof dato == "object") {
      for (let i = 0; i < dato.length; i++) {
        this.contadorMemoria++;
        this.memoria.set(this.contadorMemoria, {
          espacioMemoria: this.GenerarRandom(),
          valorPasado: dato[i],
        });
        registro.Registrar(`Agregado el dato ${dato[i]} a la memoria`);
      }

      this.suma = UC.PasarACPU(this, registro);
      return this;
    }
  };

  GenerarRandom = () => {
    let random = Math.floor(Math.random() * 8800);
    while (String(random).length < 4) {
      random = String(random);
      random = random += 0;
      random = Number(random);
    }
    return random;
  };

  MostrarMemoria = () => {
    let memoriaCompleta = [];
    this.memoria.forEach((e) => {
      memoriaCompleta.push(
        `En la Direccion de Memoria ${e.espacioMemoria}, esta el Dato: ${e.valorPasado}`
      );
    });

    return memoriaCompleta;
  };

  BorrarMemoria = () => {
    this.memoria.clear();
    this.contadorMemoria = 0;
    this.suma = 0;
    return this;
  };
}
let memoria = new Memoria();

export default memoria;

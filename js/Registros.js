class Registros {
  constructor() {
    this.registros = new Map();
    this.contadorRegistros = 0;
    return this;
  }

  Registrar = (tipoRegistro) => {
    this.registros.set(this.contadorRegistros, tipoRegistro);
    this.contadorRegistros++;
    return this;
  };

  MostrarRegistros = () => {
    let registrosCompletos = [];
    this.registros.forEach((e, i) => {
      registrosCompletos.push(`Numero de registro ${i}, Dato: ${e}`);
    });

    return registrosCompletos;
  };
}

let Registro = new Registros();
export default Registro;

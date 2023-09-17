class CPU {
  static CambiarABinario = (memoria) => {
    let numeros = new Map()
      .set(0, "0000")
      .set(1, "0001")
      .set(2, "0010")
      .set(3, "0011")
      .set(4, "0100")
      .set(5, "0101")
      .set(6, "0111")
      .set(7, "1000")
      .set(8, "1001")
      .set(9, "1010");

    let aux = "";
    let aux2 = 0;
    let resultadoEnBinario = "";

    if (typeof memoria.memoria == "object") {
      memoria.memoria.forEach((e) => {
        aux += e.valorPasado;
      });
    } else if (!isNaN(memoria)) {
      memoria = String(memoria);
      for (let i = 0; i < memoria.length; i++) {
        aux += memoria[i];
      }

      memoria = Number(memoria);
    }

    for (let index = 0; index < aux.length; index++) {
      aux2 = Number(aux[index]);
      aux2 = numeros.get(aux2);

      resultadoEnBinario += aux2;
    }

    return resultadoEnBinario;
  };

  static Sumar = (memoria) => {
    let suma = 0;

    memoria.memoria.forEach((e) => {
      suma += e.valorPasado;
    });

    return suma;
  };
}

export default CPU;

export default class Cl_vCinesUnidos {
  constructor(controlador) {
    this.vista = document.getElementById("mainForm");
    this.tabla = document.getElementById("mainForm_tabla");
    this.btAgregar = document.getElementById("mainForm_btAgregar");
    this.lblIngresoTotal = document.getElementById("mainForm_lblIngresoTotal");
    this.lblFamiliaMayorPago = document.getElementById("mainForm_lblFamiliaMayorPago");
    this.lblPromPagoLunes = document.getElementById("mainForm_lblPromPagoLunes");
    this.lblmontCaja = document.getElementById("mainForm_lblmontCaja")
    this.btAgregar.onclick = () => controlador.mostrarVistaFamilia();
    this.ocultar()
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
  reportarInicial({montCaja}) {
    this.lblmontCaja.innerHTML = montCaja
  }
  reportarFamilia({
    apellido,
    personas,
    dias,
    calcularMontPago,
    ingresoTotal,
    familiaMayorPago,
    promPagoLunes,
  }) {
    this.tabla.innerHTML += `
    <tr>
      <td>${apellido}</td>
      <td>${personas}</td>
      <td>${dias}</td>
      <td>${calcularMontPago}</td>
    </tr>`;
    this.lblIngresoTotal.innerHTML = ingresoTotal;
    this.lblFamiliaMayorPago.innerHTML = familiaMayorPago;
    this.lblPromPagoLunes.innerHTML = promPagoLunes;
  }
}

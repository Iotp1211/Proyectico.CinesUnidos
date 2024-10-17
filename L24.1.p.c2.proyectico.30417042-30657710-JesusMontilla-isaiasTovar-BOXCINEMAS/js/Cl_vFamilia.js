export default class Cl_vFamilia {
  constructor(controlador) {
    this.vista = document.getElementById("familiaForm");
    this.inApellido = document.getElementById("familiaForm_inApellido");
    this.inPersonas = document.getElementById("familiaForm_inPersonas");
    this.inDias = document.getElementById("familiaForm_inDias");
    this.btAceptar = document.getElementById("familiaForm_btAceptar");
    this.btAceptar.onclick = () =>
      controlador.agregarFamilia({
        apellido: this.inApellido.value,
        personas: this.inPersonas.value,
        dias: this.inDias.value,
      });
    this.ocultar();
  }
  mostrar() {
    this.vista.hidden = false;
  }
  ocultar() {
    this.vista.hidden = true;
  }
}
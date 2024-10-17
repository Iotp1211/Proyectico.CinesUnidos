export default class Cl_vInicial {
    constructor(controlador) {
        this.vista = document.getElementById("inicialForm");
        this.salida = document.getElementById("inicialForm_salida");
        this.inMontCaja = document.getElementById("inicialForm_inMontCaja");
        this.lblMontCaja = document.getElementById("inicialForm_lblMontCaja");
        this.btContinuar = document.getElementById("inicialForm_btContinuar");
        this.btContinuar.onclick = ()=> 
            controlador.agregarMontCaja({
                montCaja: this.inMontCaja.value,
        }); 
    }
    mostrar() {
        this.vista.hidden = false;
    }
    ocultar() {
        this.vista.hidden = true;
    }
    reportarInicial({
    montCaja,
}) {
this.lblMontCaja.innerHTML = montCaja;
}
}

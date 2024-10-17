import Cl_vCinesUnidos from "./Cl_vCinesUnidos.js";
import Cl_vFamilia from "./Cl_vFamilia.js";
import Cl_mCinesUnidos from "./Cl_mCinesUnidos.js";
import Cl_mFamilia from "./Cl_mFamilia.js";
import Cl_mInicial from "./Cl_mInicial.js";
import Cl_vInicial from "./Cl_vInicial.js";
export default class Cl_controlador {
  constructor() {
    this.mCinesUnidos = new Cl_mCinesUnidos();
    this.vFamilia = new Cl_vFamilia(this);
    this.vCinesUnidos = new Cl_vCinesUnidos(this);
    this.vInicial = new Cl_vInicial(this);
  }
  mostrarVistaFamilia() {
    this.vCinesUnidos.ocultar();
    this.vFamilia.mostrar();
    this.vInicial.ocultar();
  }
  mostrarVistaCinesUnidos() {
    this.vFamilia.ocultar();
    this.vCinesUnidos.mostrar();
    this.vInicial.ocultar();
  }
  mostrarVistaInicial() {
    this.vFamilia.ocultar();
    this.vCinesUnidos.ocultar();
    this.vInicial.mostrar();
  }
  agregarMontCaja({montCaja}) {
    let inicial = new Cl_mInicial({montCaja});
    this.mCinesUnidos.procesarInicial(inicial);
    this.vCinesUnidos.reportarInicial({
      montCaja: inicial.montCaja,
    });
    this.mCinesUnidos.procesarInicial(inicial);
    this.mostrarVistaCinesUnidos();
  }
  agregarFamilia({apellido, personas, dias}) {
    let familia = new Cl_mFamilia({apellido, personas, dias});
    this.mCinesUnidos.procesarFamilia(familia);
    this.vCinesUnidos.reportarFamilia({
      apellido: familia.apellido,
      personas: familia.personas,
      dias: familia.dias,
      calcularMontPago: familia.calcularMontPago(),
      ingresoTotal: this.mCinesUnidos.ingresoTotal(),
      familiaMayorPago: this.mCinesUnidos.familiaMayorPago(),
      promPagoLunes: this.mCinesUnidos.promPagoLunes(),
    });
    this.mostrarVistaCinesUnidos();
  }
}
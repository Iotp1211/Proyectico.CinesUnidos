export default class Cl_mCinesUnidos {
  constructor() {
    this.acTotalIngresos = 0;
    this.mayor = 0;
    this.cntLunes = 0;
    this.acumLunes = 0;
    this.auxNombre = "";
    this.acumMontCaja = 0;
  }

procesarInicial({montCaja}){
  this.acumMontCaja = montCaja;
}

  procesarFamilia(familia) {

    this.acTotalIngresos += familia.calcularMontPago();

    if (familia.calcularMontPago() > this.mayor){
       this.mayor = familia.calcularMontPago();
       this.auxNombre = familia.apellido;
    }

    if(familia.dias == 1){
      this.cntLunes++;
      this.acumLunes += familia.calcularMontPago();
    }
  }

  montCaja() {
    return this.acumMontCaja;
  }

  ingresoTotal() {
    return this.acTotalIngresos + this.montCaja();
  }
  familiaMayorPago() {
    return this.auxNombre;
  }
  promPagoLunes() {
    if(this.cntLunes == 0){
      return 0;
    }else{
    return (this.acumLunes / this.cntLunes)};
  }
}

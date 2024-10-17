export default class Cl_mFamilia {
  constructor({apellido, personas, dias,}) {
    this.apellido =apellido;
    this.personas = personas;
    this.dias = dias;
  }
  setApellido(a) {
    this._apellido = a;
  }
  getApellido() {
    return this._apellido;
  }
  setPersonas(p) {
    this._personas = +p;
  }
  getPersonas() {
    return this._personas;
  }
  setDias(d) {
    this._dias = +d;
  }
  getDias() {
    return this._dias;
  }
  calcularMontPago(){
    if(this.dias == 1){
      return this.personas * 1.5;  
    }else if(this.dias == 2){
      return this.personas * 3;
    }else if(this.dias == 3){
      return this.personas * 3;
    }else if(this.dias == 4){
      return this.personas * 3;
    }else if(this.dias == 5){
      return this.personas * 3;
    }else if(this.dias == 6){
      return this.personas * 3;
    }else if(this.dias == 7){
      return this.personas * 3;
    }else{
     return 0;
    }
  }
}
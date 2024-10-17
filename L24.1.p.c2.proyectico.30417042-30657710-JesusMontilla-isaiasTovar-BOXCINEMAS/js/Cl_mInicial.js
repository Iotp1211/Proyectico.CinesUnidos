export default class Cl_mInicial {
    constructor ({montCaja}){
        this.montCaja = montCaja;
    }

set montCaja(montCaja) {
    this._montCaja = +montCaja;
}

get montCaja(){
    return this._montCaja}
}


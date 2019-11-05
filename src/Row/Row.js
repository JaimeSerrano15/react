class Row {
    constructor(carnet, horario, hour, late) {
        this._carnet = carnet;
        this._horario = horario;
        this._hour = hour;
        this._late = late;
    }

    get carnet() { return this._carnet }
    get horario() { return this._horario }
    get hour() { return this._hour }
    get late() { return this._late }

    set carnet(carnet) {this._carnet = carnet}
    set horario(horario) {this._horario = horario}
    set hour(hour) {this._hour = hour}
    set late(late) {this._late = late}

}

export default Row;
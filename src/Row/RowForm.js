import React from 'react';
import Row from './Row';

class RowForm extends React.Component {
    constructor(props) {
        var date = new Date();
        super(props)
        this.state = { carnet: '', horario: '', hour: date.toLocaleString(), late: '' };

        //this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.Change = this.Change.bind(this);
        this.Change2 = this.Change.bind(this);
        this.Change3 = this.Change.bind(this);
        //this.Change4 = this.Change.bind(this);


    }

    handleSubmit(event) {
        event.preventDefault();

        let row = new Row(this.state.carnet, this.state.horario, this.state.hour, this.state.late);
        this.props.onSave(row);
        alert("a ver" + this.state.carnet + " - " + this.state.horario + " - " + this.state.hour + " - " + this.state.late);
    }

    Change(event){
        this.setState({carnet: event.target.value});
    }

    Change2(event){
        this.setState({horario: event.target.value});
    }

    Change3(event){
        if(event.state.checked){
            this.setState({late : "A_tiempo"});
        }
        else{
            this.setState({late: "Tarde"});
        }
    }



    /*handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }*/

    render() {
        return (
            <form id="contact" action="" onSubmit={this.handleSubmit}>
                <div className="jumbotron">
                    <h1>Registro de Laboratorio</h1>
                    <div>
                        <label for="carnet" class="col-sm-2 col-form-label">Ingrese el carnet: </label>
                        <br></br>
                        <input class="form-control" type="text" name="carnet" id="carnet_field" maxlength="8"   onChange={this.Change}></input>
                        <div class="form-group">
                            <label for="schedule">Seleccione el horario:</label>
                            <select value={this.state.horario} name="schedule" class="form-control" id="schedule_field" onChange={this.Change2}>
                                <option value="Lunes de 9:00 a 11.00">Lunes de 9:00 a 11.00</option>
                                <option value="Martes de 13:30 a 15:30">Martes de 13:30 a 15:30</option>
                                <option value="Miércoles de 9:00 a 11.00">Miércoles de 9:00 a 11.00</option>
                                <option value="Jueves de 13:30 a 15:30">Jueves de 13:30 a 15:30</option>
                                <option value="Viernes de 9:00 a 11.00">Viernes de 9:00 a 11.00</option>
                                <option value="Viernes de 15:30 a 17:30">Viernes de 15:30 a 17:30</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <div className="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="late_switch" name="check" onChange={this.Change3}></input>
                                <label class="custom-control-label" for="late_switch">Llegó tarde?</label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button name="submit" type="submit"  data-submit="...Sending" class="btn btn-danger" id="submit_btn" >Ingresar</button>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default RowForm;

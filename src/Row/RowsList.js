import React from 'react';
import Row from './Row';

class RowsList extends React.Component {

    renderBody(rows) {
        return rows.map(({ carnet, horario, hour, late }) => {
            return (
                <tr key={carnet}>
                    <td>{carnet}</td>
                    <td>{horario}</td>
                    <td>{hour}</td>
                    <td>{late}</td>
                    <td>
                        <button onClick={() => { this.props.onDelete(carnet) }}>Delete</button>
                    </td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div>
                <table class="table table-hover">
                    <thead>
                        <tr class="table-dark">
                            <th scope="col">Carnet</th>
                            <th scope="col">Horario de laboratorio</th>
                            <th scope="col">Hora de ingreso</th>
                            <th scope="col">Tarde?</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody id="table_body">
                        {this.renderBody(this.props.rows)}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default RowsList;
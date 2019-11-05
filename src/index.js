import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RowForm from './Row/RowForm';
import RowsList from './Row/RowsList';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rows: [],
            err: ''
        }
    }

    saveRow(row) {
        const rows = this.state.rows.slice();
        if (!rows.find((current) => {
            return current.carnet === row.carnet;
        })) {
            rows.push(row);
            this.setState({ rows, err: '' });
        } else {
            this.setState({ err: 'El carnet ya existe ' })
        }
    }

    deleteRow(carnet) {
        const rows = this.state.rows.filter(function (ele) {
            return ele.carnet !== carnet;
        });
        this.setState({ rows });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div>{this.state.err}</div>
                    <RowForm onSave={(row) =>{
                        this.saveRow(row)
                    }} />
                </div>
                <RowsList rows={this.state.rows} onDelete={(carnet) => {
                    this.deleteRow(carnet);
                }} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
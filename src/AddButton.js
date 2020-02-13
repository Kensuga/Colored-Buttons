import React, {Component} from 'react';
import Box from './Box'

class AddButton extends Component {
    constructor(){
        super()
            this.state = {
                boxes: [],
        }
    }

    insertBox = () => {
        let boxesNew = this.state.boxes
        boxesNew.push(<Box />);
        this.setState({ boxes: boxesNew })
    }

    removeBox = () => {
        let boxesNew = this.state.boxes
        boxesNew.pop();
        this.setState({ boxes: boxesNew })
    }



    render(){
        return (
            <div>
                <h1 className="App-Top">
                    <button onClick={ this.insertBox } className="addButtons">Add New Box</button>
                    <button onClick={ this.removeBox } className="removeButtons">Remove Box</button>
                </h1>
            <p className= "App-Top">{this.state.boxes}</p>
            </div>
    )}
}

export default AddButton;

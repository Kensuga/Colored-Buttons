import React, {Component} from 'react';

class Box extends Component {
    constructor(){
        super()
        this.state = {
            color: "White",
            increment: 0
        }
    }

    changeColor = () => {
        let newIncrement = this.state.increment
        if (newIncrement === 6){
            newIncrement = 0;
        } else {
            newIncrement = this.state.increment+1
        }
        this.setState({ increment: newIncrement })

        switch (newIncrement) {
            case 0:
                this.setState({ color: "White"})
                break;
            case 1:
                this.setState({ color: "Green"})
                break;
            case 2:
                this.setState({ color: "Blue"})
                break;
            case 3:
                this.setState({ color: "Yellow"})
                break;
            case 4:
                this.setState({ color: "Red"})
                break;
            case 5:
                this.setState({ color: "Purple"})
                break;
            case 6:
                this.setState({ color: "Orange"})
                break;
        }


    }

    render(){
        return (
            <div>
                <button onClick = { this.changeColor } style={{backgroundColor: `${this.state.color}`}} className="colorButton">
                {this.state.color}
                </button>
            </div>
    )}
}

export default Box;

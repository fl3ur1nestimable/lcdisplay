import "./Form.css";
import React from "react";

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state={
            text:""
        };
    }

    handleChange = (event) => {
        this.setState({
            text:event.target.value
        });
    }
 
    handleSetText = () =>{
        this.props.changeText(this.state.text);
    }

    render(){
        return(
            <div className="form">
                <input type="text" maxLength={6} value={this.state.text} onChange={this.handleChange} placeholder="Enter what you want to display"></input>
                <button onClick={this.handleSetText}>Display !</button>
            </div>
        );
    }
}

export default Form;
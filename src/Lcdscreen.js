import React from "react";
import "./Lcdscreen.css";
import Pixel from "./Pixel";
import PixelB from "./PixelB";

class Lcdscreen extends React.Component{

    componentDidMount = () =>{
        this.props.updateScreen();
    }

    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className="screen">
                {this.props.screenl.map((letter,i) => (
                    <table key={i}>
                        <tbody>
                            {letter.map((row,j)=>(
                                <tr key={j}>
                                    {row.map((number,k)=>(
                                        <td key={k}>
                                            {   number===1 ? <Pixel/> : <PixelB/>
                                            }
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ))}
            </div>
        );
    }
}

export default Lcdscreen;
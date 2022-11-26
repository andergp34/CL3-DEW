import React,{Component} from "react";
function hora(){
    return new Date().toLocaleTimeString()
}
function fecha(){
    return new Date().toLocaleDateString()
}
class Horario extends React.Component{
    constructor(props){
        super(props);
        this.state={
            h:hora(),
            f:fecha()
        }
    }
    state={
        h:null,
        f:null
    }
    render(){
        setTimeout(()=> this.setState({h:hora()}),1000)
        return(
            <div className="Horario">
                <p className="p-horario">Fecha: {this.state.f}</p>
                <p className="p-horario">Hora: {this.state.h}</p>
            </div>
        )
    }
}
export default Horario;
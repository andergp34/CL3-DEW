import React,{Component} from "react";
var cadena="Productos Lego"
const colores=["red","blue","yellow","violet","brown","green","pink","orange"]
var c = 0;


function colorear(){
    document.querySelector("#title").setAttribute("style", "color:"+colores[c])
    c++
    if(c>=colores.length) c =0
    return cadena
}
class Titulo extends React.Component{
    constructor(props){
        super(props);
        this.state={
            texto:cadena
        }
    }
    state={texto:null}
    render(){
        setTimeout(()=>{this.setState({texto:colorear()})},3000)
        return(
            <div className="Titulo">
                <h1 id="title">{this.state.texto}</h1>
            </div>
        )
    }
}
export default Titulo
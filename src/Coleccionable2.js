import React,{Component} from "react";
import img1 from './imgs14/coleccionable1.jpg'
import img2 from './imgs14/coleccionable2.jpg'
import img6 from './imgs14/coleccionable6.jpg'
import img4 from './imgs14/coleccionable4.jpg'
const coleccion=[img1,img2,img4,img6];

class Coleccionable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lista:coleccion.map(x => <img className="img-coleccion2" src={x}></img>)
        }
    }
    state={
        lista:null
    }
    render(){
        return(
            <div className="Coleccionable">
                <h1 className="h1-coleccionable">Productos</h1>
                <div className="div-coleccionable2">
                    {this.state.lista}
                </div>
            </div>
        )
    }
}
export default Coleccionable;
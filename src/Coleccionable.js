import React,{Component} from "react";
import img3 from './imgs/coleccionable3.jpg';
import img4 from './imgs/coleccionable4.jpg';
import img5 from './imgs/coleccionable5.jpg';

const coleccion=[img3,img4,img5];

class Coleccionable extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lista:coleccion.map((x,i)=> <img className="img-coleccion" src={x} img-i ={i} onMouseOver={this.over} onMouseOut={this.out}></img>)
        }
    }
    state={
        lista:null
    }
    over=(e,Event)=>{
        let i=e.target.getAttribute('img-i');
        e.target.setAttribute('style',
            'margin:22px; padding:0; transition:all 0.5s',coleccion[i])
    }
    out=(e,Event)=>{
        let i=e.target.getAttribute('img-i');
        e.target.setAttribute('style',
            'width:94%; height: 250px; padding:3%; border-radius:150px; border: 0.5px solid; background-color: blue; transition:all 1s',coleccion[i])
    }
    render(){
        return(
            <div className="Coleccionable">
                <h1 className="h1-coleccionable">Novedades</h1>
                <div className="div-coleccionable">
                    {this.state.lista}
                </div>
            </div>
        )
    }
}
export default Coleccionable;
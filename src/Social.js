import React,{Component} from "react";

import rf from './imgs14/face.jpg';
import rf1 from './imgs14/face1.jpg';
import rt from './imgs14/twitter.jpg';
import rt1 from './imgs14/twitter1.jpg';
import ri from './imgs14/instagram.jpg';
import ri1 from './imgs14/instagram1.jpg';

const imagenes =[rf,rt,ri];
const imagenes1=[rf1,rt1,ri1];

class Social extends React.Component{
    constructor(props){
        super(props);
        this.state={
            lista:imagenes.map((x,i)=>
                <img className="img-social" src={x} data-i={i}
                     onMouseOver={this.over} onMouseOut={this.out}></img>
            )
        }
    }
    state={lista:null}
    over=(e,Event)=>{
        let i=e.target.getAttribute('data-i');
        e.target.setAttribute('src',imagenes1[i]);
    }
    out=(e,Event)=>{
        let i=e.target.getAttribute('data-i');
        e.target.setAttribute('src',imagenes[i]);
    }

    render(){
        return(
            <div className="Social">
                {this.state.lista}
            </div>
        )
    }
}

export default Social
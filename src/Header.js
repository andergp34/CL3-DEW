import React,{Component} from "react";
import img1 from './imgs14/header.jpg';
import img2 from './imgs14/header1.jpg';
import img3 from './imgs14/header2.jpg';
import img4 from './imgs14/header3.jpg';
import img5 from './imgs14/header4.jpg';

const imagenes=[img1,img2,img3,img4,img5]
var i=0

function carrusel(){
    i++
    if(i>=imagenes.length) i=0
    return imagenes[i]
}
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={srcimagen:imagenes[0]}
    }
    state={srcimagen:null}
    render(){
        setTimeout(()=>{this.setState({srcimagen:carrusel()})},1000)
        return(
            <div className="Header">
                <img className="img-header" src={this.state.srcimagen}></img>
            </div>
        )
    }
}
export default Header
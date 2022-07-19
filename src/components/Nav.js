import React,  {Component} from 'react'
import { withRouter } from 'react-router-dom'
import {NavLink} from 'react-router-dom'

//Display 3 default img search options
class Nav extends Component{
    constructor() {
        super();
        this.state = {
            button: ''
        };
    }
    handleClick = (e) => {
        let buttonClicked = e.target.innerText.toLowerCase();
        this.props.onClick(buttonClicked);
        this.setState({button: buttonClicked});
    }
    render(){
         return(
        <nav className="main-nav">
            <ul>
            <li><NavLink to='/cherryBlossom'>Cherry Blossom</NavLink></li>
            <li><NavLink to='/snow'>Snow</NavLink></li>
            <li><NavLink to='/flower'>Flower</NavLink></li>
            </ul>
        </nav> 
    )
    }
   
}


export default withRouter(Nav)
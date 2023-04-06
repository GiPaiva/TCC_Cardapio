import React from "react";
import logo from "../../imgs/logo.png"

import "../../styles/Header.css"

export default function Header(){
    return(
        <div className="header">
            <div className="header-logo">
                <p>Cantina</p>
                <img className="logo" src={logo} alt="Logo do Senai"></img>
            <div className="header-detalhes"><div className="header-detalhes-div"></div></div>
            </div>
        </div>
    );
}
import React from 'react';
import logoImg from '../../assets/images/logo.svg';
import landing from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css'
function Landing(){
    return(
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="logo do site"/>
                    <h2>Sua plataforma de estudos online</h2>
                </div>
                
                <img 
                    src={landing}
                    alt="Plataforma de estudos"
                    className="hero-image"
                />
                <div className="buttons-container">
                    <a href="" className="study">
                        <img src={studyIcon} alt="icone de estudo"/>
                        Estudar
                    </a>
                    <a href="" className="give-classes">
                        <img src={giveClassesIcon} alt="icon dar aulas"/>
                        Dar aulas
                    </a>
                </div>
                <span className="total-connections">
                    Total de 200 de conexões
                    <img src={purpleHeartIcon} alt="coração roxo"/>
                </span>
            </div>
        </div>
    )
}
export default Landing;
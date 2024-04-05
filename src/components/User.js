import React from "react";
import "./User.css";

function User() {
    return  (
      <div className='user'>
        <img src="./media/jennie.jpg" alt="" width="50%" className="user__avatar"/>
        <h1 className="user__name">RASOARIVELO jenny Christina </h1>
        <p className="user__profession"> Administrateur Système et Réseaux</p>
        <p className="user__info"><i className="fas fa-home"></i>Namahora Sud </p>
        <div className="user__infos">
            <p className="user__info"><i className="fas fa-phone"></i> <a href="tel:+261340870084"> 032 17 358 27</a>  </p>
            <p className="user__info"><i className="fas fa-user"></i> celibataire, Malagasy</p>
            <p className="user__info"><i className="fas fa-map-marker"></i>17 Novembre 2002 à MORONDAVA</p>
            <p className="user__info"><i className="fas fa-envelope"></i>jennychristinah175@gmail.com</p>
        </div>

        </div>

     );   
} export default User;
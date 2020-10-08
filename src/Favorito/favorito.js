import React from "react";
import "./style.css";

const Favorito = ({ className, onClick, src, id }) => (
  <div key={id} className={`click ${className}`} onClick={onClick}>
    <img className="imagem" src={src} alt="favoritos" />
  </div>
);

export default Favorito;

import React, { Component } from "react";
import Favorito from "../Favorito/favorito";
import FavClick from "../img/fav-click.png";
import FavNoClick from "../img/fav-no-click.png";

export default class Home extends Component {
  state = {
    imagem: "",
    className: "",
    idFavorito: "1"
  };

  componentDidMount() {
    let favorito = localStorage.getItem("@Favorito-" + this.props.idFavorito);
    if (favorito && favorito.imagem === FavClick) {
      this.setState({
        imagem: FavNoClick,
        className: "no-favorite",
        idFavorito: this.props.idFavorito
      });
    } else {
      this.setState({ imagem: FavClick, className: "favorite-item" });
    }
  }

  favoritar = (e) => {
    if (this.state.imagem === FavClick) {
      this.setState({ imagem: FavNoClick, className: "no-favorite" });
    } else {
      this.setState({ imagem: FavClick, className: "favorite-item" });
    }
    localStorage.setItem("@Favorito-" + this.state.idFavorito, this.state);
  };

  render() {
    return (
      <div>
        <Favorito
          id={this.state.idFavorito}
          className={this.state.className}
          onClick={this.favoritar}
          src={this.state.imagem}
        />
      </div>
    );
  }
}

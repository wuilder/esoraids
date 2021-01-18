import React, { Component } from 'react'
import axios from 'axios'

export default class Paginas extends Component {

  componentDidMount(){
    this.getHeroes();
  }

  async getHeroes(){
    const heroes = await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=fa3802f93d5b1e2c84c6dc634ed88118&hash=3ef6985aee87f52e7d945fb7cefb4c64`)
    console.log(heroes)
  }

  // SETEAR EL NOMBRE DE LA TRIAL EN EL COMPONENTE PARA QUE NO SE RENDERIZE EL RESTO
  render(){
    return(
      <div></div>
    )
  }
}
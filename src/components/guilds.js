import React, { Component } from 'react'
import axios from 'axios'


export default class Raid extends Component {

  // Constructor + seteado state
  constructor(props){
    super(props);

    this.state = {
      guilds: [],
    };
  }

  async componentDidMount(){
    const res = await axios.get('https://tcraid.herokuapp.com/raids/guilds');
    this.setState({guilds: res.data});


    /*console.log(this.state)
    console.log(this.state.guilds)*/
  }


  render(){
    const {guilds} = this.state;

    return(
        <div className="guilds border border-dark">

            <ul className="list-group list-group-horizontal">
            {
            guilds.map(guild => (
                <li className="list-group-item" key={guild._id}><button className="btn">{guild.name}</button></li>
            ))
            }
            </ul>
        </div>
    )
  }
}

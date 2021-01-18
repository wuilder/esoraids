import React, { Component } from 'react'
import axios from 'axios'
/*import Guilds from './guilds'*/

export default class Raid extends Component {

  // Constructor + seteado state
  constructor(props) {
    super(props);

    this.state = {
      raids: [],
      guilds: [],
      trials: [],
    };
  }

  async componentDidMount() {
    /*const r = await axios.get('https://tcraid.herokuapp.com/raids');
    const g = await axios.get('https://tcraid.herokuapp.com/guilds');*/

    const r = await axios.get('http://localhost:4000/raids');
    const g = await axios.get('http://localhost:4000/guilds');
    const t = await axios.get('http://localhost:4000/trials');
    this.setState({ raids: r.data, guilds: g.data, trials: t.data, totalPages: r.data.totalPages });

    console.log(this.state.raids)
    //console.log(this.state.trials)

  }


  renderRosters(roster) {
    const newRoster = roster;
    delete newRoster.idChannel;
    delete newRoster.idRoster;
    delete newRoster.guild;

    const roles = Object.keys(newRoster).map(rol => {
      return (
        <ul className="list-group border-0" key={rol}>
          {
            Object.keys(newRoster[rol]).map((position, index) => {
              return <li className="list-group-item bg-transparent border-0" key={index}>
                <b className="text">{rol.toLocaleUpperCase()}:</b>{newRoster[rol][position].idname}
              </li>
            })
          }
        </ul>
      )
    })

    return roles;
  }

  async allRostesr() {
    const raids = await axios.get('http://localhost:4000/raids/');
    this.setState((state) => {
      return { raids: raids.data }
    });
  }

  async trialByName(trial) {
    const byName = await axios.get('http://localhost:4000/raids/trials/' + trial);
    console.log(byName)
    this.setState((state) => {
      return { raids: byName.data }
    });
  }

  async trialByGuild(guild) {
    const byGuild = await axios.get('http://localhost:4000/raids/guilds/' + guild);
    this.setState((state) => {
      return { raids: byGuild.data }
    });
  }

  render() {
    const { raids, guilds, trials } = this.state;
    const rosters = this.state.raids.docs;
    const pages = this.totalPages;
    console.log(rosters)
    //const raids = this.state.raids;
    //const guilds = this.state.guilds;
    //const trials = this.state.trials;

    return (
      <div className="row">
        <div className="guilds">
          <div className="guild border border-dark">
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item bg-transparent border-0">
                <button className="btn text-light" onClick={() => this.allRostesr()}>Todos</button>
              </li>
              {
                guilds.map(guild => (
                  <li className="list-group-item bg-transparent border-0" key={guild._id}>
                    <button className="btn text-light" onClick={() => this.trialByGuild(guild.name)}>{guild.name}</button>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="trials border border-dark">
            <ul className="list-group list-group-horizontal">
              {
                trials.map(trial => (
                  <li className="list-group-item bg-transparent border-0" key={trial._id}>
                    <button className="btn text-light" onClick={() => this.trialByName(trial.alias)}>{trial.alias.toLocaleUpperCase()}</button>
                  </li>
                ))
              }
            </ul>
          </div>
          <div className="row">
            {rosters ?
              rosters.map(raid => (
                <div className="col-md-4 col-xs-6 p-2" key={raid._id}>
                  <div className="card rounded bg-transparent border-dark">
                    <img className="card-img-top" src={require('./images/trial/' + raid.trial + '.jpg')} alt="Trial" />
                    <div className="card-header border-bottom border-dark">
                      <p className="card-text"><b>Trial:</b> {raid.trial}</p>
                      <p className="card-text"><b>Date:</b> {raid.date}</p>
                      <p className="card-text"><b>Raid Leader:</b> {raid.raidleader}</p>
                      <p className="card-text"><b>Discord:</b> {raid.guild}</p>
                    </div>
                    {this.renderRosters(raid.roster)}
                  </div>
                </div>
              )) : "Loading..."
            }
          </div>
          <div className="row">
            {pages ?
              <ul>
                <li>
                <button className="btn text-light" onClick={() => this.renderRosters(pages)}>das</button>
                </li>
              </ul>
              : "Loading..."
            }
          </div>
        </div>
      </div>
    )
  }
}
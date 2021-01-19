import React, { Component } from 'react'
import Pagination from 'react-js-pagination'
import axios from 'axios'
import Loading from './presentational/loading'

export default class Paginas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      raids: [],
      guilds: [],
      trials: [],
      trialname: "",
      guildname: "",
      loading: false,
    };
  }

  async componentDidMount(){
    await this.getRaidsData();
    await this.getTrialsData();
  }

  async getRaidsData(pageNumber = 1, trialname = '', guildname = ''){
    this.setState( { loading: true }, () => {
    axios.get(`https://eso-raids.herokuapp.com/raids?trial=${trialname}&guild=${guildname}&page=${pageNumber}`)
      .then(response => {
        this.setState({ 
          loading: false,
          raids: response.data
        });
      })
      .catch(error => {
        console.error(error);
      })
    });
  }

  async getTrialsData(){
    const query = await axios.get(`https://eso-raids.herokuapp.com/trials`);
    this.setState({ trials: query.data });
  }

  renderPaginaRosters(roster){
    const raids = roster.docs;
    const { page, limit, totalDocs } = roster;
  
      return(
        <React.Fragment>
          <div className="row">
            {raids ?
              raids.map(raid => (
                <div className="col-md-4 col-xs-6 p-2" key={raid._id}>
                  <div className="card rounded bg-transparent border-secondary">
                    <img className="card-img-top" src={require('./images/trial/' + raid.abbreviation + '.jpg')} alt="Trial" />
                    <div className="card-header border-bottom border-dark">
                      <p className="card-text"><b>Trial:</b> {raid.abbreviation.toLocaleUpperCase()}</p>
                      <p className="card-text"><b>Date:</b> {raid.date}</p>
                      <p className="card-text"><b>Raid Leader:</b> {raid.leader}</p>
                      <p className="card-text"><b>Discord:</b> {raid.guild}</p>
                      <p className="card-text"><b>Channel:</b> {raid.roster.nameChannel}</p>
                    </div>
                    {this.renderRosters(raid.roster)}
                  </div>
                </div>
              )) : 
              <Loading />
            }
            </div>
          <div className="container-pagination">
            <Pagination className="justify-content-center"
                itemClass="page-item"
                linkClass="page-link"
                hideNavigation
                pageRangeDisplayed={5}
                activePage={page}
                totalItemsCount={totalDocs}
                itemsCountPerPage={limit}
                onChange={(pageNumber) => this.getRaidsData(pageNumber, this.state.trialname, this.state.guildname)}
              />
          </div>
        </React.Fragment>
      )
  }

  renderRosters(roster) {
    const newRoster = roster;
    delete newRoster.idChannel;
    delete newRoster.idRoster;
    delete newRoster.guild;
    delete newRoster.bu;

    const roles = Object.keys(newRoster).map(rol => {
      return (
        <ul className="list-group border-0" key={rol}>
          {
            Object.keys(newRoster[rol]).map((position, index) => {
              if(newRoster[rol] !== newRoster.nameChannel){
                return <li className="list-group-item bg-transparent border-0" key={index}>
                  <b className="text">{rol.toLocaleUpperCase()}:</b> {newRoster[rol][position].idname}
                </li>
              }
            })
          }
        </ul>
      )
    })
    return roles;
  }

  render(){
    const { raids, trials, guilds, loading } = this.state;
    let result;

    if(loading){
      result = <Loading />
    }else{
      result = 
        <div className="raids">
          <div className="container">
            <div className="row bg-primary">
              <ul className="list-group list-group-horizontal mx-auto justify-content-center">
                <li className="list-group-item bg-transparent border-0">
                  <button className="btn font-weight-bold text-light" onClick={() => {this.getRaidsData(); this.setState({ trialname: "" }); this.setState({ guildname:"" }) }}>Todos</button>
                </li>
                {
                  trials.map(trial => (
                    <li className="list-group-item bg-transparent border-0" key={trial._id}>
                      <button className="btn font-weight-bold text-light" onClick={(pageNumber) => {this.getRaidsData(pageNumber, trial.alias, this.setState({ guildname: "" })); this.setState({ trialname: trial.alias }) }}>{trial.alias.toLocaleUpperCase()}</button>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="container">
          {this.renderPaginaRosters(raids)}
          </div>
        </div>
    }

    return (
      result
    );
  }
}
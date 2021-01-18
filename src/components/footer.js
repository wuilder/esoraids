import React, { Component } from 'react'
/*import discord from './images/discordf.png';
import facebook from './images/facebookf.png';
import steam from './images/steamf.png';*/

export default class Footer extends Component {

  year(){
    let year = new Date().getFullYear();
    return year;
  }

  render() {
 
    return (

     <footer className="container-fliud">
      <div className="navbar-footer bg-dark lead">
        <ul className="navbar-nav-footer">
          <li className="nav-item">
            <a href="https://www.facebook.com/TeamCordobez" target="_blank" title="Facebook">
              <span className="m-3"><i className="fab fa-facebook fa-lg" aria-hidden="true"></i></span>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://discord.gg/MfZF92C" title="Discord">
              <span className="m-3"><i className="fab fa-discord fa-lg" aria-hidden="true"></i></span>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://www.twitch.tv/maruchim" target="_blank" title="Twitch">
              <span className="m-3"><i className="fab fa-twitch fa-lg" aria-hidden="true"></i></span>
            </a>
          </li>
          <li className="nav-item">
            <a href="https://steamcommunity.com/groups/TCTeamCordobez" target="_blank" title="Twitch">
              <span className="m-3"><i className="fab fa-steam fa-lg" aria-hidden="true"></i></span>
            </a>
          </li>
        </ul>
        <div>
          <span>
            Team Cordobez Copyright © 2008 - {this.year()}
          </span>
        </div>
      </div>
      </footer>
      /*<footer>
        <div className="container">
          <div className="row">
            <div className="col-4">
            </div>
            <div className="col-4">
              <p className="text-center text-justify">Copyright © 2008 - 2020 Team Cordobez</p>
            </div>
            <div className="col-4">
              <ul className="list-group list-group-horizontal">
                <li className="list-group-item bg-transparent border-0">
                  <a href="https://www.facebook.com/TeamCordobez" title="Facebook">
                    <i className="fab fa-facebook-square fa-lg"></i>
                  </a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="https://discord.gg/MfZF92C" title="Discord">
                    <i className="fab fa-discord fa-lg"></i>
                  </a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="https://www.twitch.tv/maruchim" title="Twitch">
                    <i className="fab fa-twitch fa-lg"></i>
                  </a>
                </li>
                <li className="list-group-item bg-transparent border-0">
                  <a href="https://steamcommunity.com/groups/TCTeamCordobez" title="Steam">
                    <i className="fab fa-steam fa-lg"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>*/
    )
  }
}

import React, { Component } from 'react';
import './App.css';

class Message extends React.Component {
  render() {
    let imgSrc = `./images/${this.props.sender.toLowerCase()}.png`;

    return (
      <div className="message">
        <div className="message__profile">
          <img className="message__profile-picture" src={imgSrc} alt="{this.props.sender}" />
        </div>

        <div className="message__message">
          <div>
            <span className="message__user-name">{this.props.sender}</span>
            <span className="message__timestamp">{this.props.timestamp}</span>
          </div>

          <div className="message__body">
            {this.props.body}
          </div>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    let messages = [
      { body: "hello", sender: "Laurent", timestamp: "9:54" },
      { body: "Bye", sender: "Justyna", timestamp: "9:55" }
    ];

    return (
        <div class="wrapper">
          <div class="workspaces">
            <div class="workspace">
              <img src="./images/8th-light-logo.png" class="workspace__image" />
              <div class="workspace__number">
                  ⌘1
              </div>
            </div>
          </div>
        
          <div class="navbar">
            <div class="navbar__channel-name">
              #randomonium
            </div>

            <div class="navbar__search">
              <div class="navbar-search__item"><i class="fas fa-phone"></i></div>
              <div class="navbar-search__item"><i class="fas fa-info-circle"></i></div>
              <div class="navbar-search__item"><i class="fas fa-cog"></i></div>
              <div class="navbar__search-input">
                  <input class="input" type="text" name="search" id="search" placeholder="Search" />
              </div>
              <div class="navbar-search__item"><i class="fas fa-at"></i></div>
              <div class="navbar-search__item"><i class="fas fa-star"></i></div>
              <div class="navbar-search__item"><i class="fas fa-ellipsis-v"></i></div>
            </div>

            <div class="navbar_links">
              <i class="navbar-search__icon far fa-star"></i> 34
              <span class="vertical-separator">|</span>
              <i class="navbar-search__icon far fa-user"></i> 42
              <span class="vertical-separator">|</span>
              <i class="navbar-search__icon fas fa-thumbtack"></i> 5
              <span class="vertical-separator">|</span>
              100% nonsense. all. the. time. Oh yeah.
            </div>
          </div>

          <div class="sidebar">
            <div class="sidebar__workspace-info">
              <div class="sidebar__workspace-name">
                8th Light
              </div>
              <div class="sidebar__notification-settings">
                <i class="far fa-bell"></i>
              </div>
              <div class="sidebar__username">
                <i class="fas fa-circle sidebar__presence"></i>Laurent
              </div>
            </div>

            <div class="sidebar__channels">
              <header class="sidebar__header">
                Channels
              </header>
              <div class="sidebar__channel">
                # randomonium
              </div>
            </div>
          </div>

          <div class="messages">
            { messages.map((message, i) => <Message body={message.body} sender={message.sender} timestamp={message.timestamp} />) }
          </div>

          <div class="new-message">
              <input class="input new-message__input" type="text" />
          </div>
        </div>
    );
  }
}

export default App;

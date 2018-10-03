import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
            <div class="message">
              <div class="message__profile">
                <img class="message__profile-picture" src="./images/laurent.png" alt="laurent" />
              </div>

              <div class="message__message">
                <div>
                  <span class="message__user-name">Laurent</span>
                  <span class="message__timestamp">9:54</span>
                </div>

                <div class="message__body">
                </div>
              </div>
            </div>
          </div>

          <div class="new-message">
              <input class="input new-message__input" type="text" />
          </div>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import hu from '../../images/flag_hun.svg';
import en from '../../images/flag_english.svg';
import telefon from '../../images/footer_telefon.svg';
import mail from '../../images/footer_mail.svg';
import { ExpandMore } from '@material-ui/icons/';
import './Navigation.scss';

export default class Navigation extends Component {
  render() {
    let sellBtn = null;

    if (this.props.btnVisible) {
      sellBtn = <NavLink className="sell-btn" exact to="/kapcsolat">
        <button type="button">Értékesítés</button>
      </NavLink>;
    }

    const theme = this.props.theme;

    return (
      <div className="header-wrapper">  
        {/* DESKTOP MENU */}  
        <div className={`header-bar`}>
          <div className="header-bar-content">
            <div className="lang-select">
              <a href="#" className="hu"><img src={hu} alt="hu" />Magyar</a>
              <a href="#" className="en"><img src={en} alt="en" />English</a>
            </div>
            <div className="contact-info">
              <span className="phone"><img src={telefon} alt="telefon" />+36 30 1234567</span>
              <span className="email"><img src={mail} alt="mail" />info@h40.hu</span>
            </div>
          </div>
        </div>
        <div className={`nav-bar desktop ${theme}`}>
          <div className="navbar-content">
            <div className="h40-logo"><span>H</span>40</div>
            <div className="nav-links">
              <NavLink exact to="/" activeClassName="selected">Főoldal</NavLink>
              <div className="dropdown">
                <span>Ismertető <ExpandMore /></span>
                <div className="dropdown-menu">
                  <HashLink to='/#epuletek' replace>Épületek <ExpandMore /></HashLink>
                  <HashLink to='/#jellemzok' replace>Jellemzők <ExpandMore /></HashLink>
                  <HashLink to='/#muszaki-tartalom'>Műszaki tartalom <ExpandMore /></HashLink>
                  <HashLink to='/#muszaki-alaprajz'>Műszaki alaprajzok <ExpandMore /></HashLink>
                </div>
              </div>
              <NavLink exact to="/helyszin" activeClassName="selected">Helyszín &amp; környék</NavLink>
              <NavLink exact to="/referenciak" activeClassName="selected">Referencia</NavLink>
              <NavLink exact to="/lakasok" activeClassName="selected">Lakások</NavLink>
              <NavLink exact to="/kapcsolat" activeClassName="selected">Kapcsolat</NavLink>
              {sellBtn}
            </div>
          </div>
        </div>
        {/* MOBILE MENU */}
        <div className="nav-bar mobile">
          mobilmenu
        </div> 
      </div>
    )
  }
}

Navigation.defaultProps = {
  theme: 'dark',
}

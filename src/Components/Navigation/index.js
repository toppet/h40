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
  state = {
    isOpen: false,
    isDropDownOpen: false,
  }
  
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
              <a href="#" className="hu"><img src={hu} alt="hu" /><span className="lang-text">Magyar</span></a>
              <a href="#" className="en"><img src={en} alt="en" /><span className="lang-text">English</span></a>
            </div>
            <div className="contact-info">
              <span className="phone"><img src={telefon} alt="telefon" />+36 30 1234567</span>
              <span className="email"><img src={mail} alt="mail" />info@h40.hu</span>
            </div>
          </div>
        </div>
        <div className={`nav-bar desktop ${theme}`}>
          <div className="navbar-content">
            <div className="h40-logo"><a href="/"><span>H</span>40</a></div>
            <div className="nav-links">
              <NavLink exact to="/" activeClassName="selected">Főoldal</NavLink>
              <div className="dropdown">
                <span>Ismertető <ExpandMore /></span>
                <div className="dropdown-menu">
                  <HashLink to='/#epuletek' replace>Épületek <ExpandMore /></HashLink>
                  <HashLink to='/#jellemzok' replace>Jellemzők <ExpandMore /></HashLink>
                  <HashLink to='/#dokumentumok'>Műszaki adatok / alaprajzok <ExpandMore /></HashLink>
                  <HashLink to="/#helyszin">Helyszín &amp; környék <ExpandMore /></HashLink>
                </div>
              </div>
              <NavLink exact to="/referenciak" activeClassName="selected">Referencia</NavLink>
              <NavLink exact to="/lakasok" activeClassName="selected">Lakások</NavLink>
              <NavLink exact to="/kapcsolat" activeClassName="selected">Kapcsolat</NavLink>
              {sellBtn}
            </div>
          </div>
        </div>
        
        {/* MOBILE MENU */}
       
        <div className={`nav-bar mobile ${theme} ${this.state.isOpen ? 'open' : ''}`}>
          <div className="nav-bar-header">
            <div className="h40-logo"><a href="/"><span>H</span>40</a></div>
            <div className="menu-btn" onClick={() => this.setState({ isOpen: !this.state.isOpen })}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="nav-links">
            <div className="navbar-content">
              <NavLink exact to="/" activeClassName="selected">Főoldal</NavLink>
              <div className={`dropdown ${this.state.isDropDownOpen ? 'open' : ''}`}>
                <span onClick={() => this.setState({ isDropDownOpen: !this.state.isDropDownOpen })}>Ismertető <ExpandMore /></span>
                <div className="dropdown-menu">
                  <HashLink to='/#epuletek' replace onClick={() => this.setState({ isOpen: false })}>Épületek</HashLink>
                  <HashLink to='/#jellemzok' replace onClick={() => this.setState({ isOpen: false })}>Jellemzők</HashLink>
                  <HashLink to='/#dokumentumok' onClick={() => this.setState({ isOpen: false })}>Műszaki adatok / alaprajzok</HashLink>
                  <HashLink to="/#helyszin" onClick={() => this.setState({ isOpen: false })}>Helyszín &amp; környék</HashLink>
                  {/* <HashLink to='/#muszaki-alaprajz' onClick={() => this.setState({ isOpen: false })}>Műszaki alaprajzok <ExpandMore /></HashLink> */}
                </div>
              </div>
              <NavLink exact to="/referenciak" activeClassName="selected">Referencia</NavLink>
              <NavLink exact to="/lakasok" activeClassName="selected">Lakások</NavLink>
              <NavLink exact to="/kapcsolat" activeClassName="selected">Kapcsolat</NavLink>
              {sellBtn}
            </div>
          </div>
        </div> 
      </div>
    )
  }
}

Navigation.defaultProps = {
  theme: 'dark',
}

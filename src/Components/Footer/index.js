import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import mail from '../../images/footer_mail.svg';
import iroda from '../../images/footer_iroda.svg';
import telefon from '../../images/footer_telefon.svg';

import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-row">
          <div className="footer-row-content footer-content-1">
            <h3>Visszahívást kérek!</h3>
            <form action="#">
              <input type="text" placeholder="Ön neve"/>
              <input type="text" placeholder="Telefonszám"/>
              <button type="submit">Küldés</button>
            </form>
          </div>
        </div>

        <div className="footer-row">
          <div className="footer-row-content footer-content-2">
            <div className="col-1">
              <article>
                <h3><img src={iroda} alt="iroda"/>Értékesítési irodánk</h3> 
                <span>XY Kivitelező Kft</span>
                <span>Árnyas utca 1</span>
                <span>Budapest</span>
                <span>1076</span>
              </article>
              <article>
                <h3><img src={telefon} alt="iroda"/>Telefon</h3>
                <span>Értékesítő + 36 30 931 1166</span>
              </article>
              <article>
                <h3><img src={mail} alt="iroda"/>E-mail cím</h3>
                <span>iroda@honfoglalastarsas.hu</span>
                <span>ertekesites@honfoglalastarsas.hu</span>
              </article>
            </div>
            <div className="col-2">
              <article className="looking-for">
                <h3>Keres valamit?</h3>
                <a href="#">Referencia</a>
                <a href="#">Lakások</a>
                <a href="#">Értékesítés</a>
              </article>
              <article className="business-address">
                <h3>H40</h3>
                <span>Honfoglalás utca 40 </span>
                <span>társasház</span>
              </article>
            </div>
          </div>
        </div>

        <div className="footer-row">
          <div className="footer-row-content footer-content-3">
            <span>&#169; Copyright 2018, XY Kivitelező Kft - Minden jog fenntartva</span>
            <div className="footer-links">
              <a href="#">Adatvédelem</a>
              <a href="#">Jognyilatozat</a>
            </div>
          </div>
        </div>

      </div>
    )
  }
}


import React, { Component } from 'react';
import _ from 'lodash';
import { Mail } from '@material-ui/icons/';
import { Comment, ArrowDownward } from '@material-ui/icons/';
import Slider from "react-slick";

import Navigation from '../../Components/Navigation';
import Footer from '../../Components/Footer';

import apartmentData from './apartments.js';

import ap1 from '../../images/ap1.jpg';
import ap2 from '../../images/ap2.jpg';
import ap3 from '../../images/ap3.jpg';
import alapterulet from '../../images/alapterulet.svg';
import szobak from '../../images/szobak.svg';
import furdo from '../../images/furdo.svg';
import terasz from '../../images/terasz.svg';
import emelet from '../../images/emelet.svg';
import legkondi from '../../images/legkondi.svg';
import konyha from '../../images/konyha.svg';

import './Apartments.scss';

export default class Apartments extends Component {
  
  state = {
    selectedTab: 'a100',
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleTabChange(selectedTab) {
    this.setState({ selectedTab });
  }

  getStatusText(status) {
    
    if(status === 'free') {
      return "szabad";
      // statusTextsEN.push(apartmentData[key].status);
    }
    if(status === 'sold') {
      return "eladva";
      // statusTextsEN.push(apartmentData[key].status);
    }
    if(status === 'inprogress') {
      return "TÁRGYALÁS ALATT";
      // statusTextsEN.push(apartmentData[key].status);
    }
  }

  render() {
    const { selectedTab } = this.state;
    const currentApartment = _.get(apartmentData, this.state.selectedTab);
    const settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
    };

    return (
      <div className="ApartmentsPage">
        <Navigation btnVisible theme="light" />
        <div className="page-content">

          <div className="title-wrap">
            <h1 className="title-left">Lakáskínálat</h1>
            {/* <h1 className="title-right">Üzlethelyiségek</h1> */}
          </div>

          <div className="hotspot-image-wrap"></div>

          <div className="apartment-tabs-wrap">
            <div className="apartment-tabs">
              {
                _.map(apartmentData, (ap, key) =>(
                    <span key={key} className={`tab ${ap.status} ${selectedTab === key ? 'active' : ''}`} onClick={() => this.handleTabChange(key)}>
                      <span className="status">{this.getStatusText(ap.status)}</span>
                      <span className="text">{key.toUpperCase()}</span>
                    </span>
                  )                
                )
              }
            </div>
            <div className="apartment-tab-content-wrap">
              <div className="tab-content">
                <div className="col-left">
                  <h3>{selectedTab}</h3>

                  <div className="parameters">
                    <h4 className="tag">Paraméterek</h4>
                    <div className="param-row">
                      <p className="size"><img src={alapterulet} alt="alapterulet"/>{currentApartment.size} <span>{'nm'}</span></p>
                      <p className="rooms"><img src={szobak} alt="szobak"/>{currentApartment.rooms} <span>{'szoba'}</span></p>
                    </div>
                    <div className="param-row">
                      <p className="bathrooms"><img src={furdo} alt="furdo"/>{currentApartment.bathrooms} <span>{'fürdő'}</span></p>
                      <p className="balcony"><img src={terasz} alt="terasz"/>{currentApartment.balcony} <span>{'nm terasz'}</span></p>
                    </div>
                    <div className="param-row">
                      <p className="kitchen"><img src={konyha} alt="konyha"/>{currentApartment.kitchen}</p>
                    </div>
                  </div>

                  <div className="col-100">
                    <div className="floor">
                      <h4 className="tag">Emelet</h4>
                      <p className="floor-text"><img src={emelet} alt="emelet"/>{currentApartment.floor}</p>
                    </div> 
                    <div className="appliances">
                      <h4 className="tag">MŰSZAKI FELSZERELTSÉG</h4>
                      <p className="appliances-text"><img src={legkondi} alt="legkondi"/>{currentApartment.appliances}</p>
                    </div> 
                  </div>
                  
                  <div className="col-100 attachments-wrap">
                    <a href="#" target="_self" rel="noopener noreferrer"type="button" className="card-btn no-bg">
                      <span className="btn-text">LEÍRÁS, ALAPRAJZ</span>
                      <ArrowDownward className="btn-icon" />
                    </a>
                    <a href="#" target="_self" rel="noopener noreferrer"type="button" className="card-btn">
                      <span className="btn-text">AJÁNLATOT KÉREK!</span>
                      <Comment className="btn-icon" />
                    </a>
                  </div>

                </div>
                <div className="col-right">
                <div className="slider-wrapper">
                  <Slider {...settings} className="page-slider">
                    <div className="slide-1">
                      <img src={ap1} alt="apartment-1"/>
                    </div>
                    <div className="slide-2">
                      <img src={ap2} alt="apartment-2"/>
                    </div>
                    <div className="slide-3">
                      <img src={ap3} alt="apartment-3"/>
                    </div>
                  </Slider>
                </div>
                </div>
              </div>
            </div>
          </div>
        
          <div className="comfy-location">
            <div className="col-30">
              <h2>Kényelmes elhelyezkedés a mindennapi teendőkhöz</h2>
            </div>
            <div className="col-30">
              <h3>Iskola, bevásárlóközpont és uszoda<br/> 500 méteres távon belül!</h3>
            </div>
            <div className="col-30">
              <a href="/#jellemzok" target="_self" type="button" className="card-btn">
                <span className="btn-text">HELYSZÍN, KÖRNYÉK</span>
                <Mail className="btn-icon" />
              </a>
            </div>
          </div>

          <div className="render-images-wrap">
            <div className="render-row">
              <div className="col-30"></div>
              <div className="col-30 middle">
                <div className="top">
                  <h3>Látványtervek</h3>
                </div>
                <div className="bottom"></div>
              </div>
              <div className="col-30"></div>
            </div>
            <div className="render-row">
              <div className="col-50"></div>
              <div className="col-50"></div>
            </div>
          </div>

        </ div>
        <Footer />
      </div>
    );
  }
}

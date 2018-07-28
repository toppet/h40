import React from 'react';
import _ from 'lodash';
import Slider from "react-slick";

import { Comment, ArrowDownward } from '@material-ui/icons/';

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

export default class DesktopApartmentTabs extends React.Component {
  
  render() {
    const settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
    };

    const { apartmentData, selectedTab, currentApartment, getStatusText, handleTabChange } = this.props;
    
    return (
      <div className="apartment-tabs-wrap desktop">
      
          <div className="apartment-tabs">
          {
            _.map(apartmentData, (ap, key) =>(
                <span key={key} className={`tab ${ap.status} ${selectedTab === key ? 'active' : ''}`} onClick={() => handleTabChange(key)}>
                  <span className="status">{getStatusText(ap.status)}</span>
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
                    <p className="size"><img className="attr-icon" src={alapterulet} alt="alapterulet"/>{currentApartment.size} <span>{'nm'}</span></p>
                    <p className="rooms"><img className="attr-icon" src={szobak} alt="szobak"/>{currentApartment.rooms} <span>{'szoba'}</span></p>
                  </div>
                  <div className="param-row">
                    <p className="bathrooms"><img className="attr-icon" src={furdo} alt="furdo"/>{currentApartment.bathrooms} <span>{'fürdő'}</span></p>
                    <p className="balcony"><img className="attr-icon" src={terasz} alt="terasz"/>{currentApartment.balcony} <span>{'nm terasz'}</span></p>
                  </div>
                  <div className="param-row">
                    <p className="kitchen"><img className="attr-icon" src={konyha} alt="konyha"/>{currentApartment.kitchen}</p>
                  </div>
                </div>

                <div className="col-100">
                  <div className="floor">
                    <h4 className="tag">Emelet</h4>
                    <p className="floor-text"><img className="attr-icon" src={emelet} alt="emelet"/>{currentApartment.floor}</p>
                  </div> 
                  <div className="appliances">
                    <h4 className="tag">MŰSZAKI FELSZERELTSÉG</h4>
                    <p className="appliances-text"><img className="attr-icon" src={legkondi} alt="legkondi"/>{currentApartment.appliances}</p>
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

          </div> {/* tab content */} 
        </div>
      </div>
    )
  }
}


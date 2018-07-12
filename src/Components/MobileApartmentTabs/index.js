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

export default class MobileApartmentTabs extends React.Component {
  state = {
    activeTab: 'a100',
    prevTab: 'a100',
  }

  toggleTab(e) {
    const tabs = document.querySelectorAll('.apartment-tab-wrap .tab');
    let targetTab;
    let prevTab;

    if(e.target.classList.contains('tab')) {
      targetTab = e.target;
    }

    if(e.target.classList.contains('status') || e.target.classList.contains('text')) {
      targetTab = e.target.parentNode;
    }
    
    // if(this.state.prevTab === targetTab.id) {
    //   console.log('ugyanaz');
    //   targetTab.classList.toggle('active');
    // } else {
    //   _.forEach(tabs, (tab, index) => {
    //     tab.classList.remove('active');
    //   });
    //   this.setState({prevTab: targetTab.id});
    // }
      targetTab.classList.toggle('active');
    
    // targetTab.classList.toggle('active');
    // if(targetTab.classList.contains('active')) {
    //   targetTab.classList.remove('active');
    // } else {
    // }
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      // autoplay: true,
      autoplaySpeed: 4000,
    };

    const { apartmentData, getStatusText, selectedTab } = this.props;

    return (
      <div className="apartment-tabs-wrap mobile">
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

        <div className="apartment-tabs">
        {
          _.map(apartmentData, (ap, key) =>(
              <div className="apartment-tab-wrap" key={key}>
                <div className={`tab ${ap.status} ${selectedTab === key ? 'active' : ''}`} id={key} onClick={(e) => this.toggleTab(e)}>
                  <span className="status">{getStatusText(ap.status)}</span>
                  <span className="text">{key.toUpperCase()}</span>
                </div>

                <div className="tab-content">

                  <div className="parameters">
                    <h4 className="tag">Paraméterek</h4>
                    <div className="param-row">
                      <p className="size"><img className="attr-icon" src={alapterulet} alt="alapterulet"/>{ap.size} <span>{'nm'}</span></p>
                      <p className="rooms"><img className="attr-icon" src={szobak} alt="szobak"/>{ap.rooms} <span>{'szoba'}</span></p>
                    </div>
                    <div className="param-row">
                      <p className="bathrooms"><img className="attr-icon" src={furdo} alt="furdo"/>{ap.bathrooms} <span>{'fürdő'}</span></p>
                      <p className="balcony"><img className="attr-icon" src={terasz} alt="terasz"/>{ap.balcony} <span>{'nm terasz'}</span></p>
                    </div>
                    <div className="param-row">
                      <p className="kitchen"><img className="attr-icon" src={konyha} alt="konyha"/>{ap.kitchen}</p>
                    </div>
                  </div>

                  <div className="addition-attributes">
                    <div className="floor">
                      <h4 className="tag">Emelet</h4>
                      <p className="floor-text"><img className="attr-icon" src={emelet} alt="emelet"/>{ap.floor}</p>
                    </div> 
                    <div className="appliances">
                      <h4 className="tag">MŰSZAKI FELSZERELTSÉG</h4>
                      <p className="appliances-text"><img className="attr-icon" src={legkondi} alt="legkondi"/>{ap.appliances}</p>
                    </div>
                   
                      
                    
                  </div>

                  <div className="attachments-wrap">
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

              </div>
            )                
          )
        }
        </div>
      </div>
    )
  }
}


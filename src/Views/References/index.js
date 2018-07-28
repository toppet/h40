
import React, { Component } from 'react';
import Navigation from '../../Components/Navigation';
import Footer from '../../Components/Footer';
import Slider from "react-slick";
import { Flare, Home, ArrowForward, Search } from '@material-ui/icons/';
import ap1 from '../../images/ap1.jpg';
import ap2 from '../../images/ap2.jpg';
import ap3 from '../../images/ap3.jpg';
import alapterulet from '../../images/alapterulet.svg';
import szobak from '../../images/szobak.svg';
import furdo from '../../images/furdo.svg';
import terasz from '../../images/terasz.svg';

import './References.scss';

export default class References extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const settings = {
      dots: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 4000,
    };

    return (
      <div className="ReferencesPage">
        <Navigation btnVisible theme="light"/>
        <div className="page-content">
          <section className="section-top">
            <div className="col-50">
              <h2>Referencia</h2>
              <h3>Cégünk a környéken több családi házat és egy társasházat épített a kornak megfelelő legmagasabb műszaki színvonalon.</h3>
              <h3>Tekintse meg képeinket a KertVárosi Társasházról vagy látogassan el az oldalra!</h3>
              <a href="http://kertvarositarsashaz.hu/" target="_blank" rel="noopener noreferrer"type="button" className="card-btn">
                <span className="btn-text">KERTVÁROSI TÁRSASHÁZ</span>
                <ArrowForward className="btn-icon" />
              </a>              
            </div>
            
            <div className="col-50 slider-wrapper">
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
            <div className="cards">
              <div className="card">
                <div className="icon-wrap">
                  <Flare/>
                </div>
                <h4>Megbízható</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
              </div>
              <div className="card">
                <div className="icon-wrap">
                  <Flare/>
                  </div>
                <h4>Rugalmas</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
              </div>
              <div className="card">
                <div className="icon-wrap">
                  <Flare/>
                </div>
                <h4>Elhivatott</h4>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </span>
              </div>
            </div>
          </section>
          
        </div>
        <Footer/>
      </div>
    );
  }
}

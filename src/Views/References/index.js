
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
          <section className="section-bottom">
            <div className="col-100">
              <div className="header-text-wrapper">
                <div className="text-left">
                  <h2>Találja meg következő otthonát</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet augue bibendum, sodales <br/> metus quis, placerat lorem. Donec fermentum dui ac purus cursus hendrerit.</p>
                </div>
                <div className="text-right">
                 {/*  <button type="button" className="card-btn">
                    <span className="btn-text">ÖSSZES LAKÁS</span>
                    <Search className="btn-arrow" />
                  </button>  */}
                  <a href="/lakasok" className="card-btn">
                    <span className="btn-text">ÖSSZES LAKÁS</span>
                    <ArrowForward className="btn-icon" />
                  </a>
                </div>
              </div>
              <div className="apartment-cards">
                <div className="col-33">
                  <div className="apartment-card">
                    <div className="img-wrap">
                      <img src={ap1} alt="apartment-1"/>
                      <span className="apartment-num">
                        <Home />
                        <span>101</span>
                      </span>
                    </div>
                    <div className="text-wrap">
                      <p className="size"><img src={alapterulet} alt="alapterulet"/> 67 nm</p>
                      <p className="rooms"><img src={szobak} alt="szobak"/> 3 szoba</p>
                      <p className="bathrooms"><img src={furdo} alt="furdo"/> 2 fürdő</p>
                      <p className="balcony"><img src={terasz} alt="terasz"/>10 nm terasz</p>
                    </div>
                  </div>
                  <div className="button-wrap">
                    <button type="button" className="btn-view">Megnézem</button>
                  </div>
                </div>
              
                <div className="col-33">
                  <div className="apartment-card">
                    <div className="img-wrap">
                      <img src={ap2} alt="apartment-2"/>
                      <span className="apartment-num">
                        <Home />
                        <span>102</span>
                      </span>
                    </div>
                    <div className="text-wrap">
                      <p className="size"><img src={alapterulet} alt="alapterulet"/> 99 nm</p>
                      <p className="rooms"><img src={szobak} alt="szobak"/> 3 szoba</p>
                      <p className="bathrooms"><img src={furdo} alt="furdo"/> 3 fürdő</p>
                      <p className="balcony"><img src={terasz} alt="terasz"/> 14 nm terasz</p>
                    </div>
                  </div>
                  <div className="button-wrap">
                    <button type="button" className="btn-view">Megnézem</button>
                  </div>
                </div>
                
                <div className="col-33">
                  <div className="apartment-card">
                    <div className="img-wrap">
                      <img src={ap3} alt="apartment-3"/>
                      <span className="apartment-num">
                        <Home />
                        <span>201</span>
                      </span>
                    </div>
                    <div className="text-wrap">
                      <p className="size"><img src={alapterulet} alt="alapterulet"/> 88 nm</p>
                      <p className="rooms"><img src={szobak} alt="szobak"/> 4 szoba</p>
                      <p className="bathrooms"><img src={furdo} alt="furdo"/> 2 fürdő</p>
                      <p className="balcony"><img src={terasz} alt="terasz"/> 12 nm terasz</p>
                    </div>
                  </div>
                  <div className="button-wrap">
                    <button type="button" className="btn-view">Megnézem</button>
                  </div>
                </div> 
              </div>
              
            </div>
          </section>
        </div>
        <Footer/>
      </div>
    );
  }
}

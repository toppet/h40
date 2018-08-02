
import React, { Component } from 'react';
import _ from 'lodash';
import { Mail } from '@material-ui/icons/';
import scrollToComponent from 'react-scroll-to-component';

import Navigation from '../../Components/Navigation';
import Footer from '../../Components/Footer';
import DesktopApartmentTabs from '../../Components/DesktopApartmentTabs';
import MobileApartmentTabs from '../../Components/MobileApartmentTabs';

import apartmentData from './apartments.js';

import './Apartments.scss';

export default class Apartments extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      selectedTab: 'a100',
      isDesktop: false,
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.updatePredicate();
    window.addEventListener("resize", () => this.updatePredicate());
  }

  handleScroll() {
    window.scrollTo({
      top: 875,
      behavior: 'smooth',
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", () => this.updatePredicate());
  }

  updatePredicate() {
    this.setState({ isDesktop: document.documentElement.clientWidth > 1280 });
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
    const { selectedTab, isDesktop } = this.state;
    const currentApartment = _.get(apartmentData, this.state.selectedTab);

    let tabsContainter = (
      <MobileApartmentTabs
        currentApartment={currentApartment}
        selectedTab={selectedTab}
        apartmentData={apartmentData}
        getStatusText={(status) => this.getStatusText(status)}
      />
    );

    if (isDesktop) {
      tabsContainter = (
        <DesktopApartmentTabs
          currentApartment={currentApartment}
          selectedTab={selectedTab}
          apartmentData={apartmentData}
          getStatusText={(status) => this.getStatusText(status)}
          handleTabChange={(tab) => this.handleTabChange(tab)}
        />
      );
    }

    const hotspots = Object.keys(apartmentData).map((a) => {
      const ap = apartmentData[a];
      const statusText = this.getStatusText(ap.status);
      return (
        <span 
          key={a}
          className={`hotspot-${a} ${ap.status} ${selectedTab === a ? 'active' : '' }`} 
          onClick={() => this.setState({ selectedTab: a })}
        >
          <div className="hotspot-dialog">
            <div className="title-row">
              <h3>{a.toUpperCase()}</h3>
              <span className={`tag ${ap.status}`}>{statusText}</span>
            </div>
            <div className="info-row">
              <div className="ap-info floor">
                <span className="title">Emelet</span>
                <span className="info-text">{ap.floorNumber}</span>
              </div>
            </div>
            <div className="info-row">
              <div className="ap-info size">
                <span className="title">Lakás nm</span>
                <span className="info-text">{ap.size} nm</span>
              </div>
              <div className="ap-info balcony">
                <span className="title">Terasz nm</span>
                <span className="info-text">{ap.balcony} nm</span>
              </div>
            </div>
            <span className="moreBtn" onClick={() => this.handleScroll()}>Részletes leírás</span>
          </div>
        </span>
      )
    }); 

    // console.log(hotspots);

    return (
      <div className="ApartmentsPage">
        <Navigation btnVisible theme="light" />
        <div className="page-content">

          <div className="title-wrap">
            <h1 className="title-left">Lakáskínálat</h1>
          </div>

          <div className="hotspot-image-wrap">
            <span className="building-initial initial-wrap-a">
              <span className="initial-a">A</span>
            </span>
            <span className="building-initial initial-wrap-b">
              <span className="initial-b">B</span>
            </span>
            
            { hotspots }
          
          </div> 

          <div ref={(section) => { this.reszletek = section; }}>
            {tabsContainter}
          </div>

          <div className="price-table">
            {/* <div className="table-header-row">
              <span className="table-header">Elnevezés</span>
              <span className="table-header">Épület</span>
              <span className="table-header">Emelet</span>
              <span className="table-header">Szobák száma</span>
              <span className="table-header">Alapterület</span>
              <span className="table-header">Terasz</span>
              <span className="table-header">Állapot</span>
              <span className="table-header">Ár</span>
            </div>
            <div className="table-row">
            
            </div> */}

            <table>
              <thead>
                <tr>
                  <th>Elnevezés</th>
                  <th>Épület</th>
                  <th>Emelet</th>
                  <th>Szobák száma</th>
                  <th>Alapterület</th>
                  <th>Terasz</th>
                  <th>Állapot</th>
                  <th>Ár</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A101</td>
                  <td>A</td>
                  <td>Földszint</td>
                  <td>2</td>
                  <td>45 nm</td>
                  <td>12 nm</td>
                  <td><span className="free">szabad</span></td>
                  <td>25.3 millió</td>
                </tr>
                <tr>
                  <td>A101</td>
                  <td>A</td>
                  <td>Földszint</td>
                  <td>2</td>
                  <td>45 nm</td>
                  <td>12 nm</td>
                  <td><span className="free">szabad</span></td>
                  <td>25.3 millió</td>
                </tr>
                <tr>
                  <td>A102</td>
                  <td>A</td>
                  <td>1. emelet</td>
                  <td>2</td>
                  <td>45 nm</td>
                  <td>12 nm</td>
                  <td><span className="free">szabad</span></td>
                  <td>25.3 millió</td>
                </tr>
                <tr>
                  <td>A103</td>
                  <td>A</td>
                  <td>1. emelet</td>
                  <td>2</td>
                  <td>45 nm</td>
                  <td>12 nm</td>
                  <td><span className="free">szabad</span></td>
                  <td>25.3 millió</td>
                </tr>
                <tr>
                  <td>A201</td>
                  <td>A</td>
                  <td>2. emelet</td>
                  <td>2</td>
                  <td>45 nm</td>
                  <td>12 nm</td>
                  <td><span className="free">szabad</span></td>
                  <td>25.3 millió</td>
                </tr>
                <tr>
                  <td>B100</td>
                  <td>B</td>
                  <td>Földszint</td>
                  <td>2</td>
                  <td>45 nm</td>
                  <td>12 nm</td>
                  <td><span className="free">szabad</span></td>
                  <td>25.3 millió</td>
                </tr>
                <tr>
                  <td>B101</td>
                  <td>B</td>
                  <td>1-2. emelet</td>
                  <td>2</td>
                  <td>45 nm</td>
                  <td>12 nm</td>
                  <td><span className="free">szabad</span></td>
                  <td>25.3 millió</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comfy-location">
            <div className="col-30">
              <h2>Kényelmes elhelyezkedés a mindennapi teendőkhöz</h2>
            </div>
            <div className="col-30 m-hidden">
              <h3>Iskola, bevásárlóközpont és uszoda<br/> 500 méteres távon belül!</h3>
            </div>
            <div className="col-30">
              <a href="/#helyszin" target="_self" type="button" className="card-btn">
                <span className="btn-text">HELYSZÍN, KÖRNYÉK</span>
                <Mail className="btn-icon" />
              </a>
            </div>
          </div>

          <div className="render-images-wrap">
            <div className="render-row">
              <div className="col-30 col-top"></div>
              <div className="col-middle">
                <div className="top">
                  <h3>Látványtervek</h3>
                </div>
                <div className="bottom"></div>
              </div>
              <div className="col-30 col-bottom"></div>
            </div>
            <div className="render-row">
              <div className="col-50"></div>
              <div className="col-50"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

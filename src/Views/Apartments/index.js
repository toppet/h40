
import React, { Component } from 'react';
import _ from 'lodash';
import { Mail } from '@material-ui/icons/';

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

    return (
      <div className="ApartmentsPage">
        <Navigation btnVisible theme="light" />
        <div className="page-content">

          <div className="title-wrap">
            <h1 className="title-left">Lakáskínálat</h1>
          </div>

          <div className="hotspot-image-wrap"></div> 

          {tabsContainter}

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

import React, { Component } from 'react';
import Navigation from '../../Components/Navigation';
import Footer from '../../Components/Footer';
import { Email, Call, Directions, Place } from '@material-ui/icons/';
import './About.scss';

export default class About extends Component {
  state = {
    activeTab: 0,
  }
  
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleTabChange(tab) {
    console.log(tab);
    this.setState({ activeTab: tab });
  }
  
  render() {

    let tabContent;

    if(this.state.activeTab === 0) {
      tabContent = (
        <div className="tab-content-wrapper">
          <div className="col-50 col-left">
            <div className="logo">
              <h3>H<span>40</span></h3>
            </div>
            <div className="address">
              <div className="address-wrap">
                <Place className="icon-direction"/>
                <p>Honfoglalás utca 40,</p>
                <p>Budapest, 1029</p>
              </div>
              
              <a target="_blank" rel="noopener noreferrer" href="https://maps.google.com/maps?ll=47.497825,19.054221&amp;z=16&amp;t=m&amp;hl=hu-HU&amp;gl=HU&amp;mapclient=embed&amp;daddr=De%C3%A1k%20Ferenc%20t%C3%A9r%20Budapest@47.497825,19.0542211" className="navigate-link"> <div className="icon navigate-icon"></div>
                <div className="navigate-text btn-text">ÚTVONALTERVEZÉS</div>
                <Directions className="btn-arrow" />
              </a>
              {/* <span className="btn-text">ÚTVONALTERVEZÉS</span>
              <Directions className="btn-arrow" /> */}
            </div>
          </div>
          <div className="col-50 col-right map-container">
            <iframe 
              title="tab-1-directions"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.5936663648663!2d19.05203241576354!3d47.497828603478645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc41d2b5e169%3A0xef31e078a69625ad!2zQnVkYXBlc3QsIERlw6FrIEZlcmVuYyB0w6ly!5e0!3m2!1shu!2shu!4v1530380348170"
              width="650"
              height="500">
            </iframe>
          </div>
        </div>
      );
    }

    if(this.state.activeTab === 1) {
      tabContent = (
        <div className="tab-content-wrapper">
          <div className="col-50 col-left">
            <div className="logo">
              <h3>H<span>40</span></h3>
            </div>
            <div className="address">
              <div className="address-wrap">
                <Place className="icon-direction"/>
                <p>Szent György tér 3,</p>
                <p>Budapest, 1014</p> 
              </div>
              <a target="_blank" rel="noopener noreferrer" href="https://maps.google.com/maps?ll=47.496325,19.039765&amp;z=16&amp;t=m&amp;hl=hu-HU&amp;gl=HU&amp;mapclient=embed&amp;daddr=Budai%20V%C3%A1r%20Budapest%20Szent%20Gy%C3%B6rgy%20t%C3%A9r%203%201014@47.4963247,19.0397653" className="navigate-link"> <div className="icon navigate-icon"></div>
                <div className="navigate-text btn-text">ÚTVONALTERVEZÉS</div>
                <Directions className="btn-arrow" />
              </a>
              {/* <span className="btn-text">ÚTVONALTERVEZÉS</span>
              <Directions className="btn-arrow" /> */}
            </div>
          </div>
          <div className="col-50 col-right map-container">
            <iframe 
              title="tab-2-directions"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.6706891393023!2d19.03757661576347!3d47.49632830358202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc3c8c94ccc9%3A0xeb87d955072a40fe!2sBudai+V%C3%A1r!5e0!3m2!1shu!2shu!4v1530381053032" 
              width="650" 
              height="500">
            </iframe>
          </div>
        </div>
      );
    }

    return (
      <div className="AboutPage">
        <Navigation theme="light"/>
        
        <div className="page-content">
          <div className="content-row top">
            <div className="col-50 fact-list-wrapper">
              <h3>Miért minket</h3>
              <ul className="fact-list">
                <li>Mert hatalmasak az üvegfelületek, világosak a lakások.</li>
                <li>Mert jó az elrendezés.</li>
                <li>Mert saját kertem lesz, ha a földszintet választom.</li>
                <li>Mert tágas teraszon fogom élvezni a napsütést.</li>
                <li>Mert a garázsból liften megyek fel.</li>
                <li>Mert nyáron hűtök, télen fűtök a saját hőszivattyúmmal.</li>
                <li>Mert a penthouse szint csak az enyém, és a panoráma …</li>
                <li>Mert értékálló az otthonom.</li>
                <li>Mert a saját irodámban dolgozom.</li>
                <li>Mert ha akarom, könnyen bérbe adom.</li>
              </ul>
            </div>
            <div className="col-50">
              <div className="content-row manager-info-wrapper">
                <div className="col-50">
                  <h3>Eppel László</h3>
                  <p>tulajdonos - ügyvezető</p>
                </div>
                <div className="col-50 contact-info">

                  <div className="phone">
                    <span className="image-wrap"><Call /></span>
                    <div className="info-col">
                      <span className="phone-num">+ 36 30 931 1166</span>
                      <div className="opening-hours">
                        <div className="hours-col">
                          <span>H - P</span>
                          <span>SZ</span>
                        </div>
                        <div className="hours-col">
                          <span>8 - 18</span>
                          <span>9 - 13</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mail">
                    <span className="image-wrap"><Email /></span>
                    <span>info@h40.hu</span>
                  </div>

                </div>
              </div>
              <div className="content-row contact-form">
                <div className="col-100">
                  <h3>Kérdése lenne? Írjon nekünk!</h3>
                  <form action="">
                    <div className="form-row">
                      <label htmlFor="name">
                        <input type="text" name="name" className="name" placeholder="Ön Neve" />
                      </label>
                      <label htmlFor="email">
                        <input type="text" name="email" className="email" placeholder="E-Mail címe" />
                      </label>
                    </div>
                    <div className="form-row">
                      <textarea name="message" id="message" rows="10" placeholder="Üzenet számunkra"></textarea>
                    </div>
                    <button type="submit">Küldés</button>
                  </form>
                </div>
              </div>
            </div>
        </div>
        <div className="content-row bottom">
          <div className="col-100">
            <div className="tabs-wrapper">
              <div className="tab-headers">
                <span className={`tab ${this.state.activeTab === 0 ? 'active' : '' }`} onClick={() => this.handleTabChange(0)}>LAKÁSOK PONTOS CÍME</span>
                <span className={`tab ${this.state.activeTab === 1 ? 'active' : '' }`} onClick={() => this.handleTabChange(1)}>ÉRTÉKESÍTÉSI IRODA</span>
              </div>
              <div className="tab-content">
                {tabContent}
              </div>
            </div>
          </div>
        </div>
      </div>
        
      <Footer />
    </div>
    )
  }
}

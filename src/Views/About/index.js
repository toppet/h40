import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navigation from '../../Components/Navigation';
import Footer from '../../Components/Footer';
import { Email, Call, Directions, Place } from '@material-ui/icons/';
import scrollToComponent from 'react-scroll-to-component';
import './About.scss';

class About extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleScroll();
  }
  
  componenDidUdpdate() {
    console.log('this.props.location', this.props.location);
    this.handleScroll();
  }

  handleScroll() {
    if (this.props.location.hash) { 
      const { hash } = this.props.location;
      const where = hash.slice(1, hash.length);

      scrollToComponent(this[where], { offset: -200, align: 'top', duration: 500 });
    }
  }
  
  render() {

    return (
      <div className="AboutPage">
        <Navigation theme="light" btnVisible/>
        
        <div className="page-content">
          <div className="page-header">
            <div className="overlay"></div>
            <div className="text-wrap">
              <h3>Kapcsolat</h3>
              <p>Kérjük Önt, hogy hívjon minket munkaidőben vagy írjon nekünk bármikor az alabbi elérhetőségek egyiken.</p>
            </div>
          </div>
          <div className="content-row top">
            
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

            <div className="col-50 map-wrapper">
              <span className="map-title">ÉRTÉKESÍTÉSI IRODA</span>
                <div className="map-content-wrapper">
                  <div className="address-container">
                    <div className="logo">
                      <h3>H<span>40</span></h3>
                    </div>
                    <div className="address">
                      <div className="address-wrap">
                        <Place className="icon-direction"/>
                        <p>Attila utca 26.</p>
                        <p>Budapest, 1028</p> 
                      </div>
                      <a target="_blank" rel="noopener noreferrer" href="https://maps.google.com/maps?ll=47.496325,19.039765&amp;z=16&amp;t=m&amp;hl=hu-HU&amp;gl=HU&amp;mapclient=embed&amp;daddr=Budai%20V%C3%A1r%20Budapest%20Szent%20Gy%C3%B6rgy%20t%C3%A9r%203%201014@47.4963247,19.0397653" className="navigate-link"> <div className="icon navigate-icon"></div>
                        <div className="navigate-text btn-text">ÚTVONALTERVEZÉS</div>
                        <Directions className="btn-arrow" />
                      </a>
                    </div>
                  </div>
                  <div className="map-container">
                    <iframe 
                      title="tab-2-directions"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2692.577156268882!2d18.959965115628744!3d47.556557879181376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741d89648f05435%3A0xc2a9e032b1ba9993!2sBudapest%2C+Attila+u.+26%2C+1028+Magyarorsz%C3%A1g!5e0!3m2!1shu!2snl!4v1532945331507"
                      width="650" 
                      height="500">
                    </iframe>
                  </div>
                </div>
              </div>
        </div>
        
        <div className="content-row bottom" ref={(section) => { this.miertminket = section; }}>

          <div className="col-100 fact-list-wrapper">
            <h3>Miért minket</h3>
            <ul className="fact-list">
              <div className="col-50">
                <li>Mert hatalmasak az üvegfelületek, világosak a lakások.</li>
                <li>Mert jó az elrendezés.</li>
                <li>Mert saját kertem lesz, ha a földszintet választom.</li>
                <li>Mert tágas teraszon fogom élvezni a napsütést.</li>
                <li>Mert a garázsból liften megyek fel.</li>
              </div>
              <div className="col-50">
                <li>Mert nyáron hűtök, télen fűtök a saját hőszivattyúmmal.</li>
                <li>Mert a penthouse szint csak az enyém, és a panoráma …</li>
                <li>Mert értékálló az otthonom.</li>
                <li>Mert a saját irodámban dolgozom.</li>
                <li>Mert ha akarom, könnyen bérbe adom.</li>
              </div>
            </ul>
          </div>

        </div> {/* content-row bottom */}

      </div>
        
      <Footer />
    </div>
    )
  }
}


export default withRouter(About);

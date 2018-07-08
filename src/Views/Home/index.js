import React, { Component } from 'react';
import Navigation from '../../Components/Navigation';
import Footer from '../../Components/Footer';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";
import legkondi from '../../images/legkondi.svg'; 
import hoszivattyu from '../../images/hoszivattyu.svg'; 
import ablakok from '../../images/ablakok.svg'; 
import redonyok from '../../images/redonyok.svg'; 
import tavvezerles from '../../images/tavolivezerles.svg';
import alaprajz from '../../images/muszaki_alaprajzok.svg';
import tartalom from '../../images/muszaki_tartalom.svg';
import dollar from '../../images/dollar.svg';
import render_1 from '../../images/ACCamera_6.jpg';
import render_2 from '../../images/ACCamera_6.jpg';
import render_3 from '../../images/ACCamera_6.jpg';
import investors from '../../images/investors.jpg';
import family from '../../images/family.jpg';
import { ArrowForward, ArrowDownward } from '@material-ui/icons/';
import './Home.scss';

export default class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    // console.log('this.props', this.props);
    const mainSliderSettings = {
      dots: true,
      arrows: true,
      // autoplay: true,
      // autoplaySpeed: 4000,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            arrows: false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ],
    };
    
    const innerSliderSettings = {
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 1,
      arrows: true,
      infinite: true,
    };

    return (
      <div className="HomePage">
        <Navigation btnVisible theme="dark"/>
        <div className="page-content">
          
          {/* === TOP SLIDER === */}

          <Slider {...mainSliderSettings} className="main-slider">
            <div className="slide-1">
              <div className="slide-text-wrap">
                <h3>Nyugalom és kényelem találkozása Budán</h3>
                <p>Modern minimál otthonok és irodák Budaligeten , a kertvárosban. Jó levegő,napfény,csönd és panoráma. … és minden csupa zöld.</p>
              </div>
            </div>
            <div className="slide-2">
              <div className="slide-text-wrap">
                <h3>Nyugalom és kényelem találkozása Budán</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed labore velit eligendi rem est alias fuga saepe corrupti in, magnam quasi voluptatem deleniti placeat. Voluptas molestiae temporibus deserunt et iusto.</p>
              </div>
            </div>
            <div className="slide-3">
              <div className="slide-text-wrap">
                <h3>Nyugalom és kényelem találkozása Budán</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing minima amet explicabo aliquid, deleniti nisi veritatis soluta a consequatur quisquam voluptas dicta eius eveniet iste. Cumque.</p>
              </div>
            </div>
          </Slider>
          
          {/*  === === === === === === */}
          {/*  === BUILDINGS === */}
          {/*  === === === === === === */}
          
         <section className="buildings" id="epuletek">
            <div className="section-header">
              <h3 className="section-title">Épületek</h3>
              <div className="section-header-text">
                <p>Cégünk Budapest II. kerületében , Budaligeten építi a következő társasházát ahol az elvárható legmagasabb műszaki színvonalon két épületben fog felépülni öt lakás és két iroda. </p>
                <p>A nagyobbik épületben  három lakás –két iroda , a kisebb épületben két lakás elosztásban.</p>
              </div>
            </div>
            {/* <Slider {...innerSliderSettings} className="inner-slider">
              <div className="slide-1">
                <img src={render_1} alt="render-1"/>
              </div>
              <div className="slide-2">
                <img src={render_2} alt="render-2"/>
              </div>
              <div className="slide-3">
                <img src={render_3} alt="render-3"/>
              </div>
            </Slider>*/}
          </section>
          
          {/*  === === === === === === */}
          {/*  === ATTRIBUTES === */}
          {/*  === === === === === === */}
          
          
           <section className="attributes" id="jellemzok">

            <h3 className="section-title">Jellemzők</h3>
            <p>Klimatizálás<img src={legkondi} alt="klima" />felsőfokon</p>

            <div className="attribute-cards">
              <div className="attribute-card">
                <span className="inital-letter">H<img src={hoszivattyu} alt="hoszivattyu"/></span>
                <div className="card-text">
                  <h4>Hőszivattyú</h4>
                  <p>Our fully integrated digital team of more than 200 dedicated digital strategists, technologists, producers.</p>
                </div>
                <button type="button" className="card-btn">
                  <span className="btn-text">Lakások</span>
                  <ArrowForward className="btn-arrow" />
                </button>
              </div>
              <div className="attribute-card">
                <span className="inital-letter">A<img src={ablakok} alt="ablakok"/></span>
                <div className="card-text">
                  <h4>Háromrétegű műanyag ablakok</h4>
                  <p>Our fully integrated digital team of more than 200 dedicated digital strategists, technologists, producers.</p>
                </div>
                <button type="button" className="card-btn">
                  <span className="btn-text">Lakások</span>
                  <ArrowForward className="btn-arrow" />
                </button>
              </div>
              <div className="attribute-card">
                <span className="inital-letter">R<img src={redonyok} alt="redonyok"/></span>
                <div className="card-text">
                  <h4>Motoros redőnyök</h4>
                  <p>Our fully integrated digital team of more than 200 dedicated digital strategists, technologists, producers.</p>
                </div>
                <button type="button" className="card-btn">
                  <span className="btn-text">Lakások</span>
                  <ArrowForward className="btn-arrow" />
                </button>
              </div>
              <div className="attribute-card">
                <span className="inital-letter">T<img src={tavvezerles} alt="tavvezerles"/></span>
                <div className="card-text">
                  <h4>Távolról vezérelhető</h4>
                  <p>Our fully integrated digital team of more than 200 dedicated digital strategists, technologists, producers.</p>
                </div>
                <button type="button" className="card-btn">
                  <span className="btn-text">Lakások</span>
                  <ArrowForward className="btn-arrow" />
                </button>
              </div>
            </div>

           <div className="a-b">
              <div className="building-a">
                <span className="building-initial">A</span>
                <p>A garázsszinten 7 db gépkocsibeállóhelyet, nagyméretű tárolókat találunk, a földszinten egy lakást és mellette egy kisebb irodát mindkettőt kizárólagos kert használattal, az első emeleten szintén egy lakást és egy kisebb irodát,míg a legfelső szinten egy, a teljes szintet elfoglaló penthouse lakást hatalmas terasszal. Itt liften mehetünk fel az emeletre.</p>
              </div> 
              <div className="building-a-b-middle">
                <h3>2 épület,<br/>7 lehetőség</h3>
                <button type="button">
                  <span className="btn-text">Lakásajánlat</span>
                  <ArrowForward className="btn-arrow" />
                </button>
              </div>
              <div className="building-b">
                <span className="building-initial">B</span>
                <p>A földszinten egy lakást kizárólagos kert használattal, az első és a második szinten egy kétszintes lakást találunk. Itt felszíni beállók szolgálnak a gépkocsik tárolására, de akár az A épületben is lehet vásárolni garázshelyet. </p>
              </div>
            </div>

            <div className="documents-wrap" id="muszaki-tartalom">
              <p><img src={tartalom} alt="tartalom"/> MŰSZAKI TARTALOM <button type="button" className="btn-download"><ArrowDownward /></button></p>
              <p><img src={alaprajz} alt="alaprajz"/> MŰSZAKI ALAPRAJZOK <button type="button" className="btn-download"><ArrowDownward /></button></p>
            </div>

          </section>

          {/*  === LOCATION AND NEIGHBOURHOOD === */}
          {/*  === INVESTMENT === */}
          <section className="investment" id="befektetoknek">
            <div className="section-header">
              <div className="section-header-col">
                <div className="section-header-icon">
                  <img src={dollar} alt="investment"/>
                </div>
              </div>
              <div className="section-header-col">
                <h3 className="section-title">Értékes fészek, kiváló befektetés</h3>
                <p className="section-header-text">
                  A környék rendkívül népszerű a lakást/házat vásárlók körében, mert egyrészt magas presztízsű és árfekvésű környék, amely egyrészt értékmegőrző otthonként, másrészt kiváló bérbeadhatósággal rendelkező ingatlanként is szolgál a magyar és nemzetközi vásárlók körében egyaránt.
                </p>
              </div>
              <div className="section-header-col">
                <button type="button">
                  <span className="btn-text">ÉRTÉKESÍTÉS</span>
                  <ArrowForward className="btn-arrow" />
                </button>
              </div>
            </div>

            <div className="investor-cards">
              <div className="investor-card">
                <div className="image-wrap">
                  <img src={investors} alt="investors"/>
                </div>
                <h3 className="card-title">Befektetőknek</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet augue bibendum, sodales metus quis, placerat lorem. </p>
              </div>
              <div className="investor-card">
              <div className="image-wrap">
                  <img src={family} alt="family"/>
                </div>
                <h3 className="card-title">Befektetőknek</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet augue bibendum, sodales metus quis, placerat lorem. </p>
              </div>
            </div>
          </section>
        </div>

        {/*  === FOOTER === */}
        <Footer />
      </div>
    )
  }
}

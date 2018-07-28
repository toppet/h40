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

import scrollToComponent from 'react-scroll-to-component';

export default class Home extends Component {
  
  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleScroll();
  }

  componentDidUpdate() {
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
    const mainSliderSettings = {
      dots: true,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 4000,
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
        
        <Navigation 
          btnVisible 
          theme="dark"
        />

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
         
         <section className="buildings" ref={(section) => { this.epuletek = section; }}>
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
          
          
           <section className="attributes" ref={(section) => { this.jellemzok = section; }}>

            <h3 className="section-title">Jellemzők</h3>
            <p>Klimatizálás<img src={legkondi} alt="klima" />felsőfokon</p>

            <div className="attribute-cards">
              <div className="attribute-card">
                <span className="inital-letter">H<img src={hoszivattyu} alt="hoszivattyu"/></span>
                <div className="card-text">
                  <h4>Hőszivattyú</h4>
                  <p>Our fully integrated digital team of more than 200 dedicated digital strategists, technologists, producers.</p>
                </div>

                <a href="/lakasok" target="_self" type="button" className="card-btn">
                  <span className="btn-text">Lakások</span>
                  <ArrowForward className="btn-arrow" />
                </a>
              </div>
              <div className="attribute-card">
                <span className="inital-letter">A<img src={ablakok} alt="ablakok"/></span>
                <div className="card-text">
                  <h4>Háromrétegű műanyag ablakok</h4>
                  <p>Our fully integrated digital team of more than 200 dedicated digital strategists, technologists, producers.</p>
                </div>
                <a href="/lakasok" target="_self" type="button" className="card-btn">
                  <span className="btn-text">Lakások</span>
                  <ArrowForward className="btn-arrow" />
                </a>
              </div>
              <div className="attribute-card">
                <span className="inital-letter">R<img src={redonyok} alt="redonyok"/></span>
                <div className="card-text">
                  <h4>Motoros redőnyök</h4>
                  <p>Our fully integrated digital team of more than 200 dedicated digital strategists, technologists, producers.</p>
                </div>
                <a href="/lakasok" target="_self" type="button" className="card-btn">
                  <span className="btn-text">Lakások</span>
                  <ArrowForward className="btn-arrow" />
                </a>
              </div>
              <div className="attribute-card">
                <span className="inital-letter">T<img src={tavvezerles} alt="tavvezerles"/></span>
                <div className="card-text">
                  <h4>Távolról vezérelhető</h4>
                  <p>Our fully integrated digital team of more than 200 dedicated digital strategists, technologists, producers.</p>
                </div>
                <a href="/lakasok" target="_self" type="button" className="card-btn">
                  <span className="btn-text">Lakások</span>
                  <ArrowForward className="btn-arrow" />
                </a>
              </div>
            </div>

           <div className="a-b">
              <div className="building-a">
                <span className="building-initial">A</span>
                <p>A garázsszinten 7 db gépkocsibeállóhelyet, nagyméretű tárolókat találunk, a földszinten egy lakást és mellette egy kisebb irodát mindkettőt kizárólagos kert használattal, az első emeleten szintén egy lakást és egy kisebb irodát,míg a legfelső szinten egy, a teljes szintet elfoglaló penthouse lakást hatalmas terasszal. Itt liften mehetünk fel az emeletre.</p>
              </div> 
              <div className="building-a-b-middle">
                <h3>2 épület,<br/>7 lehetőség</h3>
                {/* <button type="button">
                  <span className="btn-text">Lakásajánlat</span>
                  <ArrowForward className="btn-arrow" />
                </button> */}

                <a href="/lakasok" target="_self" type="button" className="card-btn">
                  <span className="btn-text">Lakásajánlat</span>
                  <ArrowForward className="btn-arrow" />
                </a>
              </div>
              <div className="building-b">
                <span className="building-initial">B</span>
                <p>A földszinten egy lakást kizárólagos kert használattal, az első és a második szinten egy kétszintes lakást találunk. Itt felszíni beállók szolgálnak a gépkocsik tárolására, de akár az A épületben is lehet vásárolni garázshelyet. </p>
              </div>
            </div>

            <div className="documents-wrap" id="muszaki-tartalom" ref={(section) => { this.dokumentumok = section; }}>
              <p><img src={tartalom} alt="tartalom"/> MŰSZAKI TARTALOM <button type="button" className="btn-download"><ArrowDownward /></button></p>
              <p><img src={alaprajz} alt="alaprajz"/> MŰSZAKI ALAPRAJZOK <button type="button" className="btn-download"><ArrowDownward /></button></p>
            </div>

          </section>

          {/*  === LOCATION AND NEIGHBOURHOOD === */}
          <section className="location" ref={(section) => this.helyszin = section }>
            <div className="section-header">
              <h3 className="section-title">Helyszín és környék</h3>
              <p className="section-header-text">
              Budapest északi, legzöldebb részén a II. kerületben , Budaligeten építünk két házat Budapest talán legtisztább levegőjű helyén, gyakorlatilag a Budapestet friss levegővel ellátó szélcsatorna kezdetén ,a  Honfoglalás út 40. szám alatt. Itt találtunk rá egy olyan telekre ahol a friss levegő, a napfény és a - felső szintekről – a panoráma olyan kombinációját sikerült megtervezni amely remélhetőleg a benne lakók teljes megelégedésére szolgál. 
              </p>
            </div>

            <div className="section-content">

              <div className="main-left">
                <div className="box-1">
                  <h3>Környezet</h3>
                </div>
                <div className="box-2">
                  <p>A piac által magasan értékelt helyen, biztonságos környéken építünk. Házaink környezetében kizárólag családi házak, és társasházi lakások találhatók sok-sok zölddel. Séta távolságban erdő, mókusok, madarak mindenhol.</p>
                </div>
                
                <div className="box-4">
                  <p>A magyar óvodák és iskolák mellett, a Francia Nemzetközi Iskola gyalog 5-10 perc,a Spanyol -és az Amerikai Nemzetközi Iskola autóval 10-15percen belül elérhető.</p>
                </div>
                <div className="box-5">
                  <h3>Oktatás</h3>
                </div>
                <div className="box-6">
                  <h3>Közlekedés</h3>
                </div>
                <div className="box-7">
                  <p>A házak  előtt van a 157-es, és a 157A  buszok megállója amelyekkel a Hűvösvölgyi végállomás 12 perces menetidővel ,innen a Széll Kálmán tér 17 perces villamos úttal elérhető. Autóval  forgalomtól függően ugyanez 15-25 perc. (BKK)</p>
                </div>
              </div>

              <div className="main-right">
                <div className="box-3">
                  <iframe 
                    title="tab-1-directions"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.5936663648663!2d19.05203241576354!3d47.497828603478645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc41d2b5e169%3A0xef31e078a69625ad!2zQnVkYXBlc3QsIERlw6FrIEZlcmVuYyB0w6ly!5e0!3m2!1shu!2shu!4v1530380348170"
                  >
                  </iframe>
                </div>
                <div className="box-8">
                  <p>A HÜVI és a StopShop bevásárlóközpontok 5-10 percen belül elérhetők autóval , egy helyi kis élelmiszerüzlet 10  perces sétával vagy 2 perces autóúttal.</p>
                </div>
                <div className="box-9">
                  <h3>Bevásárlás</h3>
                </div>
              </div>

              <div className="main-bottom">
                <div className="box-10">
                  <p>2019-ben kerül átadásra a környék várva várt uszodája, a Francia Nemzetközi Iskolával átellenben, tőlünk 10-15 perces  sétatávolságra.</p>
                </div>
                <div className="box-11">
                  <h3>Sport &amp; Szabadidő</h3>
                </div>
                <div className="box-12">
                  <p>Itt található a Hidegkúti szabadidőpark is, futball pályával, teniszpályával, rekortánnal borított futókörrel szabadtéri erősítő eszközökkel. A volt vitorlázó repülőtér és a Hűvösvölgyi nagyrét 5-8 perces autóúttal elérhető. Az erdő 300m-en belül kezdődik.</p>
                </div>
              </div>
            
            </div>
          </section>


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

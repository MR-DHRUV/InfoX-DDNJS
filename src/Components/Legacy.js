import React, { useEffect } from 'react'
import "./Assets/css/legacy.css"
import "./Assets/css/contact.css"
import "./Assets/css/Home.css"
import MatrixRain from './MatrixRain'
const Legacy = () => {

  useEffect(() => {
    setInterval(() => {
      let lightup = Math.floor(Math.random() * (12) + 1);
      document.getElementById(`sponsorImg-${lightup}`).style.filter = 'grayscale(0%)';
      console.log('runin');
      console.log(lightup);
      setTimeout(() => {
        document.getElementById(`sponsorImg-${lightup}`).style.filter = 'grayscale(100%)';
      }, 600);
    }, 700);
  }, [])


  return (
    <>
      {/* <h1 className='snlegacy' >Legacy</h1> */}
      <div className="pt_content">
        <div className="w-100 matrixOpacity"><MatrixRain /></div>

        <div className="container">
          <h3
            className="fn_title fn_animated_text theme atmosphere snlegacy"
            data-wait={100}
            data-speed={8}
          >
            legacy
          </h3>
        </div>
      </div>
      <div className="neoh_fn_title">
        <div className="line snline">
          <span />
        </div>
      </div>

      <div id="sn_body" class="pinky">
        <div class="sn_container">
          <input type="radio" name="slider" id="item-1" checked />
          <input type="radio" name="slider" id="item-2" />
          <input type="radio" name="slider" id="item-3" />
          <input type="radio" name="slider" id="item-4" />
          <input type="radio" name="slider" id="item-5" />
          <div class="cards">
            <label class="sn_card" for="item-1" id="song-1">
              <img className="sn_img"
                src={require("./Assets/img/about/Infox-01.jpg")}
                alt="song" />
            </label>
            <label class="sn_card" for="item-2" id="song-2">
              <img className="sn_img"
                src={require("./Assets/img/about/infox-09.jpg")}
                alt="song" />
            </label>
            <label class="sn_card" for="item-3" id="song-3">
              <img className="sn_img"
                src={require("./Assets/img/about/electrotech-03.jpg")}
                alt="song" />
            </label>
            <label class="sn_card" for="item-4" id="song-4">
              <img className="sn_img"
                src={require("./Assets/img/about/electrotech-01.jpg")}
                alt="song" />
            </label>
            <label class="sn_card" for="item-5" id="song-5">
              <img className="sn_img"
                src={require("./Assets/img/about/Infox-07.jpg")}
                alt="song" />
            </label>
          </div>
        </div>
      </div>


      {/* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={require("./Assets/img/about/Infox-01.jpg")} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Assets/img/about/infox-09.jpg")} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Assets/img/about/electrotech-03.jpg")} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Assets/img/about/electrotech-01.jpg")} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={require("./Assets/img/about/Infox-07.jpg")} class="d-block w-100" alt="..." />
          </div>
        </div> */}
      {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      {/* </div> */}
      <section className="legacycards">
        <div className="pt_content">
          <div className="container">
            <h3
              className="fn_title fn_animated_text theme atmosphere snlegacy"
              data-wait={100}
              data-speed={8}
            >
              past Statistics
            </h3>
          </div>
        </div>
        <div className="neoh_fn_title">
          <div className="line">
            <span />
          </div>
        </div>

        <div className="neoh_fn_gualist mx-5 px-5 mt-5 pt-5">
          <ul className='mx-5 px-5'>
            <li>
              <div className="item">
                <span className="line" />
                <img src="svg/search-engine.svg" alt="" className="fn__svg" />
                <h3 className="fn_title">Transparency</h3>
                <p className="fn_desc fn_animated_text">
                  Morbi non dignissim erat, a blandit felis. Suspendisse nec
                  lorem vel orci varius congue ut vitae est.
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <span className="line" />
                <img src="svg/management.svg" alt="" className="fn__svg" />
                <h3 className="fn_title">Experienced Team</h3>
                <p className="fn_desc fn_animated_text">
                  Morbi non dignissim erat, a blandit felis. Suspendisse nec
                  lorem vel orci varius congue ut vitae est.
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <span className="line" />
                <img src="svg/padlock.svg" alt="" className="fn__svg" />
                <h3 className="fn_title">Security Guarantee</h3>
                <p className="fn_desc fn_animated_text">
                  Morbi non dignissim erat, a blandit felis. Suspendisse nec
                  lorem vel orci varius congue ut vitae est.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <div className="pysponsors">
        <div className="pt_content">
          <div className="container">
            <h3
              className="fn_title fn_animated_text theme atmosphere snlegacy"
              data-wait={100}
              data-speed={8}
            >
              Past Year Sponsors
            </h3>
          </div>
        </div>
        <section id="investor">
          {/* Dividers */}
          <img
            src="svg/divider.svg"
            alt=""
            className="fn__svg fn__divider top_divider"
          />
          <img
            src="svg/divider.svg"
            alt=""
            className="fn__svg fn__divider bottom_divider"
          />
          {/* !Dividers */}
          <div className="container">
            {/* Main Title */}
            <div className="neoh_fn_title">
              <div className="line">
                <span />
              </div>
            </div>
            {/* !Main Title */}
            {/* Investor List Shortcode */}
            <div className="neoh_fn_investor">
              <ul className='investerUl'>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/barista.png")} alt="" id='sponsorImg-1' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/cb.png")} alt="" id='sponsorImg-2' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/Paytm.png")} alt="" id='sponsorImg-3' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/Podio.png")} alt="" id='sponsorImg-4' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/redbull.png")} alt="" id='sponsorImg-5' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/Redwolf.png")} alt="" id='sponsorImg-6' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/reliance.png")} alt="" id='sponsorImg-7' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/samsung.png")} alt="" id='sponsorImg-8' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/web.png")} alt="" id='sponsorImg-9' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/Hidden.png")} alt="" id='sponsorImg-10' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/amigos.png")} alt="" id='sponsorImg-11' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
                <li>
                  <div className="item">
                    <img src={require("./Assets/img/investors/reappoint.png")} alt="" id='sponsorImg-12' />
                    <a href="/" className="full_link" />
                  </div>
                </li>
              </ul>
            </div>
            {/* !Investor List Shortcode */}
          </div>
        </section>
      </div>

    </>
  )
}

export default Legacy
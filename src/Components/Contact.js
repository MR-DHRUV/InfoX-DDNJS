import React from 'react'
import "./Assets/css/contact.css"
import NeonRain from './NeonRain'
const Contact = () => {
  return (
    <>
      <div className="neoh_fn_main" data-footer-sticky="">
        {/* Content */}
        <div className="neoh_fn_content">
          {/* Page Title */}
          <div className="neoh_fn_pagetitle myHeadSection">
            <div className="bg_color" />
            <div className="pt_content">
              <div className="container">
                <h3
                  className="fn_title fn_animated_text theme atmosphere HeadH3Res"
                  data-wait={1000}
                  data-speed={8}
                >
                  Contact Us
                </h3>
                <hr />
                <p className="fn_desc">
                  {/* <a href="index.html">Home</a>
            <span className="separator">/</span>
            <span className="current">Contact</span> */}
                </p>
              </div>
            </div>
          </div>
          {/* !Page Title */}
          {/* Contact Page */}
          <div className="neoh_fn_contact_page">
            <div className="container">
              <div className="mw_500">
                <form
                  action="/"
                  method="post"
                  className="contact_form"
                  id="contact_form"
                  autoComplete="off"
                >
                  <div className="input_list">
                    <NeonRain />
                    <ul>
                      <li>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" placeholder="Your Name" />
                      </li>
                      <li>
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="text"
                          placeholder="youremail@mail.com"
                        />
                      </li>
                      <li>
                        <label htmlFor="subject">Subject</label>
                        <input id="subject" type="text" placeholder="How can we help?" />
                      </li>
                      <li>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" defaultValue={""} />
                      </li>
                      <li>
                        <a
                          id="send_message"
                          href="/"
                          className="neoh_fn_button only_text"
                        >
                          <span className="text">Send Message</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="returnmessage"
                    data-success="Your message has been received, We will contact you soon."
                  />
                  <div className="empty_notice">
                    <span>Please Fill Required Fields</span>
                  </div>
                </form>
                <div className="desc_holder">

                </div>
                <div className="info_list">
                  <ul>
                    <li>
                      <p className="label">Address</p>
                      <h3 className="value">GGSIPU, Golf Course Rd, Sector 16 C, Dwarka, Delhi, 110078</h3>
                    </li>
                    <li>
                      <p className="label">Phone</p>
                      <h3 className="value">
                        <a href="tel:+7068980751">011-253021671</a>
                      </h3>
                    </li>
                    <li>
                      <a
                        href="mailto:osnishant22@gmail.com"
                        className="email"
                      >
                        <span
                          className="__cf_email__"
                          data-cfemail="f09588919d809c95b0949f9d91999e"
                        >
                          osnishant22@gmail.com
                        </span>
                        .com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* !Contact Page */}
        </div>
        {/* Content */}
        {/* Footer */}
        {/* <footer id="footer">
    <div className="neoh_fn_footer">
      <div className="footer_top">
        <div className="container">
          <div className="ft_in">
            <div className="desc">
              <div className="img">
                <img src="img/footer-logo.png" alt="" />
              </div>
              <h3 className="fn_title">Join Now For Early Access</h3>
              <p className="fn_desc">
                Morbi non dignissim erat, a blandit felis nec lorem vel orci
                varius congue ut vitae est. Nam quis tempus nisl. Fusce posuere
                nibh a mi molestie, sit amet ornare
              </p>
            </div>
            <div className="subscribe_form">
              <div className="subscribe_in">
                <input type="text" placeholder="Email..." />
                <a href="/" className="neoh_fn_button only_text">
                  <span className="text">Subscribe</span>
                </a>
              </div>
              <div
                className="returnmessage"
                data-success="Your message has been received, We will contact you soon."
                data-message="You have subscribed to our updates. Thank you"
                data-invalid-email="Please enter valid email!"
              />
              <div className="empty_notice">
                <span>Please enter your Email</span>
              </div>
            </div>
            <div className="neoh_fn_social_list">
              <ul>
                <li>
                  <a href="/">
                    <i className="fn-icon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fn-icon-facebook" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fn-icon-instagram" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fn-icon-pinterest" />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fn-icon-behance" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
      <div className="footer_bottom">
        <div className="container">
          <div className="fb_in">
            <div className="fb_left">
              <p>
                Copyright 2022- Designed &amp; Developed by{" "}
                <a
                  href="https://themeforest.net/user/frenify/portfolio"
                  target="_blank"
                >
                  Frenify
                </a>
              </p>
            </div>
            <div className="fb_right">
              <ul>
                <li>
                  <a href="roadmap.html">RoadMap</a>
                </li>
                <li>
                  <a href="/">Cookies</a>
                </li>
                <li>
                  <a href="/">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer> */}
        {/* Totop */}
        <a href="/" className="neoh_fn_totop">
          <span className="arrow">
            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
          </span>
          <span className="circle">
            <img src="svg/circle.svg" alt="" className="fn__svg" />
          </span>
        </a>
        {/* !Totop */}
      </div>

    </>
  )
}

export default Contact
import React from 'react'

const Contact = () => {
  return (
    <>
        <div className="neoh_fn_main" data-footer-sticky="">
  {/* Product Modal */}
  <div className="neoh_fn_modal product_modal">
    <div className="modal_in">
      <div className="modal_closer">
        <a href="/">
          <img src="svg/cancel.svg" alt="" className="fn__svg" />
        </a>
      </div>
      <div className="modal_content">
        <div className="neoh_fn_product_modal">
          <div className="img_item">{/* here comes product's image */}</div>
          <div className="content_item">
            <div className="neoh_fn_title" data-align="left">
              <h3 className="fn_title">{/* here comes product's title */}</h3>
              <div className="line">
                <span />
              </div>
            </div>
            <div className="desc">
              <p>{/* here comes product's description */}</p>
            </div>
            <div className="buttons">
              <a
                href="https://opensea.io/"
                target="_blank"
                className="neoh_fn_button opensea"
              >
                <span className="icon">
                  <img src="svg/opensea.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">View on OpenSea</span>
              </a>
              <a
                href="https://discord.com/"
                target="_blank"
                className="neoh_fn_button discord"
              >
                <span className="icon">
                  <img src="svg/discord.svg" alt="" className="fn__svg" />
                </span>
                <span className="text">View on Discord</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* !Product Modal */}
  {/* Right Navigation */}
  <div className="nav_overlay" />
  <div className="neoh_fn_nav">
    <div className="trigger is-active">
      <div className="trigger_in">
        <span className="text">Close</span>
        <span className="hamb">
          <span className="hamb_a" />
          <span className="hamb_b" />
          <span className="hamb_c" />
        </span>
      </div>
    </div>
    <div className="nav_content">
      <div className="nav_menu">
        <ul>
          <li className="menu-item menu-item-has-children">
            <a href="index.html">Home</a>
            <ul className="sub-menu">
              <li>
                <a href="index.html">Home Static</a>
              </li>
              <li>
                <a href="index-kenburns.html">Full Kenburns</a>
              </li>
              <li>
                <a href="index-half-kenburns.html">Half Kenburns</a>
              </li>
              <li>
                <a href="index-half-slider.html">Half Slider</a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="about.html">About</a>
          </li>
          <li className="menu-item">
            <a href="collection.html">Collection</a>
          </li>
          <li className="menu-item">
            <a href="blog.html">Blog</a>
          </li>
          <li className="menu-item">
            <a href="contact.html">Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav_buttons">
        <a
          href="https://opensea.io/"
          className="neoh_fn_button"
          target="_blank"
        >
          <span className="icon">
            <img src="svg/opensea.svg" alt="" className="fn__svg" />
          </span>
          <span className="text">OpenSea</span>
        </a>
        <a
          href="https://discord.com/"
          className="neoh_fn_button"
          target="_blank"
        >
          <span className="icon">
            <img src="svg/discord.svg" alt="" className="fn__svg" />
          </span>
          <span className="text">Discord</span>
        </a>
      </div>
    </div>
    {/* Nav Footer */}
    <div className="nav_footer">
      <div className="nf_left">
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
      <div className="nf_right">
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
    {/* !Nav Footer */}
  </div>
  {/* !Right Navigation */}
  {/* Header */}
  <header className="neoh_fn_header">
    <div className="container">
      <div className="header_in">
        <div className="logo">
          <a href="index.html">
            <img src="img/logo.png" alt="" />
          </a>
        </div>
        <div className="trigger">
          <div className="trigger_in">
            <span className="text">Menu</span>
            <span className="hamb">
              <span className="hamb_a" />
              <span className="hamb_b" />
              <span className="hamb_c" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* !Header */}
  {/* Content */}
  <div className="neoh_fn_content">
    {/* Page Title */}
    <div className="neoh_fn_pagetitle">
      <div className="bg_overlay">
        <div className="bg_color" />
        <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
      </div>
      <div className="pt_content">
        <div className="container">
          <h3
            className="fn_title fn_animated_text"
            data-wait={1000}
            data-speed={8}
          >
            Contact
          </h3>
          <p className="fn_desc">
            <a href="index.html">Home</a>
            <span className="separator">/</span>
            <span className="current">Contact</span>
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
                  <input id="subject" type="text" />
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
            <p>
              Duis eu lorem ut mauris pulvinar auctor. Maecenas et dapibus orci,
              eleifend euismod justo. Quisque luctus turpis eu tristique
              feugiat.
            </p>
            <p>
              Praesent ac magna feugiat, interdum lacus ac, interdum dui.
              Pellentesque id quam quis enim malesuada rutrum. Orci varius
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus.
            </p>
          </div>
          <div className="info_list">
            <ul>
              <li>
                <p className="label">Address</p>
                <h3 className="value">69 Queen St, Melbourne Australia</h3>
              </li>
              <li>
                <p className="label">Phone</p>
                <h3 className="value">
                  <a href="tel:+7068980751">(+706) 898-0751</a>
                </h3>
              </li>
              <li>
                <a
                  href="/cdn-cgi/l/email-protection/d4b1acb5b9a4b8b194b0bbb9b5bdbafab7bbb9"
                  className="email"
                >
                  <span
                    className="__cf_email__"
                    data-cfemail="f09588919d809c95b0949f9d91999e"
                  >
                    [email&nbsp;protected]
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
  <footer id="footer">
    <div className="neoh_fn_footer">
      {/* Footer Top */}
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
      {/* !Footer Top */}
      {/* Footer Bottom */}
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
      {/* !Footer Bottom */}
    </div>
  </footer>
  {/* !Footer */}
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
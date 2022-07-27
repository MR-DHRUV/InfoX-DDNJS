import React from 'react'

const About = () => {
    return (
        <>

            <div className="neoh_fn_main" data-footer-sticky="">
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
                                    About
                                </h3>
                                <p className="fn_desc">
                                    <a href="index.html">Home</a>
                                    <span className="separator">/</span>
                                    <span className="current">About</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* !Page Title */}
                    {/* About Page */}
                    <div className="neoh_fn_aboutpage">
                        {/* Information Section */}
                        <section id="information">
                            <div className="container">
                                {/* About Item /1 */}
                                <div className="neoh_fn_about_item">
                                    <div className="img_item">
                                        <img src="img/about/1.jpg" alt="" />
                                    </div>
                                    <div className="content_item">
                                        <div className="neoh_fn_title" data-align="left">
                                            <h3 className="fn_title">The Rise of Neoh</h3>
                                            <div className="line">
                                                <span />
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p>
                                                As the first hero of the Neoh Universe, collection has over
                                                9,999 unique skins drawn from the different missions and
                                                challenges he faced throughout his life.
                                            </p>
                                            <p>
                                                The artwork has been hand-drawned by Robert Green in the
                                                traditional anime style and composited by Layla Efiyo.
                                            </p>
                                        </div>
                                        <div className="buttons">
                                            <a
                                                href="https://opensea.io/"
                                                target="_blank"
                                                className="neoh_fn_button"
                                            >
                                                <span className="icon">
                                                    <img src="svg/opensea.svg" alt="" className="fn__svg" />
                                                </span>
                                                <span className="text">OpenSea</span>
                                            </a>
                                            <a
                                                href="https://discord.com/"
                                                target="_blank"
                                                className="neoh_fn_button"
                                            >
                                                <span className="icon">
                                                    <img src="svg/discord.svg" alt="" className="fn__svg" />
                                                </span>
                                                <span className="text">Discord</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* !About Item /1 */}
                                {/* Guarantee List */}
                                <div className="neoh_fn_gualist">
                                    <ul>
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
                                {/* !Guarantee List */}
                                {/* About Item /2 */}
                                <div className="neoh_fn_about_item reverse">
                                    <div className="img_item">
                                        <img src="img/about/2.jpg" alt="" />
                                    </div>
                                    <div className="content_item">
                                        <div className="neoh_fn_title" data-align="left">
                                            <h3 className="fn_title">Thousands of Users</h3>
                                            <div className="line">
                                                <span />
                                            </div>
                                        </div>
                                        <div className="desc">
                                            <p>
                                                Simply holding a Neoh will give you access to seasonal
                                                airdrops, merchandise, physical and digital artworks,
                                                collectibles and more.
                                            </p>
                                            <p>
                                                We understand the importance of the cross-over between these
                                                worlds and we truly believe to bridge these two together. Our
                                                goals will always be for the community - creating, building
                                                and innovating together with the commmunity.
                                            </p>
                                        </div>
                                        <div className="buttons">
                                            <a href="/" className="neoh_fn_button only_text">
                                                <span className="text">Join Community</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* !About Item /2 */}
                            </div>
                        </section>
                        {/* !Information Section */}
                        {/* Video Section */}
                        <section id="video">
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
                            {/* Video Shortcode */}
                            <div className="neoh_fn_video">
                                <div className="bg_overlay">
                                    <div className="bg_image" data-bg-img="img/hero/bg.jpg" />
                                    <div className="bg_color" />
                                </div>
                                <div className="v_content">
                                    <a
                                        className="popup-youtube"
                                        href="https://www.youtube.com/watch?v=7e90gBu4pas"
                                    >
                                        <img src="svg/play.svg" alt="" className="fn__svg" />
                                    </a>
                                </div>
                            </div>
                            {/* !Video Shortcode */}
                        </section>
                        {/* !Video Section */}
                        {/* Team Section */}
                        <section id="team">
                            <div className="container">
                                {/* Main Title */}
                                <div className="neoh_fn_title">
                                    <h3 className="fn_title">Our Team Members</h3>
                                    <div className="line">
                                        <span />
                                    </div>
                                </div>
                                {/* !Main Title */}
                                <div className="mw_650 fn_description">
                                    <p className="fn_desc fn_animated_text">
                                        The idea was born in London and rapidly became a borderless vision
                                        - A team of Neoh with a background in computer graphics, crypto,
                                        technology, and art.
                                    </p>
                                </div>
                                {/* Team List Shortcode */}
                                <div className="neoh_fn_team">
                                    <ul className="team_list">
                                        <li className="team_item">
                                            <div className="t_item">
                                                <div className="person_info">
                                                    <div className="img_holder">
                                                        <img src="img/author/1.jpg" alt="" />
                                                    </div>
                                                    <div className="title_holder">
                                                        <h3 className="fn_title">Tom Mccarthy</h3>
                                                        <p className="fn_desc">2D Artist</p>
                                                    </div>
                                                </div>
                                                <div className="person_social">
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
                                        </li>
                                        <li className="team_item">
                                            <div className="t_item">
                                                <div className="person_info">
                                                    <div className="img_holder">
                                                        <img src="img/author/2.jpg" alt="" />
                                                    </div>
                                                    <div className="title_holder">
                                                        <h3 className="fn_title">Owen Bradley</h3>
                                                        <p className="fn_desc">2D Artist</p>
                                                    </div>
                                                </div>
                                                <div className="person_social">
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
                                        </li>
                                        <li className="team_item">
                                            <div className="t_item">
                                                <div className="person_info">
                                                    <div className="img_holder">
                                                        <img src="img/author/3.jpg" alt="" />
                                                    </div>
                                                    <div className="title_holder">
                                                        <h3 className="fn_title">Daniel Bradley</h3>
                                                        <p className="fn_desc">2D Artist</p>
                                                    </div>
                                                </div>
                                                <div className="person_social">
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
                                        </li>
                                        <li className="team_item">
                                            <div className="t_item">
                                                <div className="person_info">
                                                    <div className="img_holder">
                                                        <img src="img/author/4.jpg" alt="" />
                                                    </div>
                                                    <div className="title_holder">
                                                        <h3 className="fn_title">Skylar Jarvis</h3>
                                                        <p className="fn_desc">2D Artist</p>
                                                    </div>
                                                </div>
                                                <div className="person_social">
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
                                        </li>
                                        <li className="team_item">
                                            <div className="t_item">
                                                <div className="person_info">
                                                    <div className="img_holder">
                                                        <img src="img/author/5.jpg" alt="" />
                                                    </div>
                                                    <div className="title_holder">
                                                        <h3 className="fn_title">Avery Briggs</h3>
                                                        <p className="fn_desc">2D Artist</p>
                                                    </div>
                                                </div>
                                                <div className="person_social">
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
                                        </li>
                                        <li className="team_item">
                                            <div className="t_item">
                                                <div className="person_info">
                                                    <div className="img_holder">
                                                        <img src="img/author/6.jpg" alt="" />
                                                    </div>
                                                    <div className="title_holder">
                                                        <h3 className="fn_title">Bernard Green</h3>
                                                        <p className="fn_desc">2D Artist</p>
                                                    </div>
                                                </div>
                                                <div className="person_social">
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
                                        </li>
                                    </ul>
                                </div>
                                {/* !Team List Shortcode */}
                            </div>
                        </section>
                        {/* !Team Section */}
                    </div>
                    {/* !About Page */}
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

export default About
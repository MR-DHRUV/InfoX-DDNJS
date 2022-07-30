import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>

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
                            <li className="menu-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/about">About Us</Link>
                            </li>
                            {/* <li className="menu-item">
                                <a href="collection.html">Collection</a>
                            </li>
                            <li className="menu-item">
                                <a href="blog.html">Blog</a>
                            </li> */}
                            <li className="menu-item">
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/schedule">Schedule</Link>
                            </li>
                            <li className="menu-item">
                                <Link to="/legacy">Legacy</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="nav_buttons">
                        <a
                            href="http://ipu.ac.in/"
                            className="neoh_fn_button"
                            target="_blank"
                            rel='noreferrer'
                        >
                            <span className="icon myNavIcons">
                            <i class="footerSocial fa-solid fa-globe"></i>

                            </span>
                            <span className="text">Website</span>
                        </a>
                        <a
                            href="https://instagram.com/ggsipuindia"
                            className="neoh_fn_button"
                            target="_blank"
                            rel='noreferrer'
                        >
                            <span className="icon myNavIcons">
                                {/* <img src="svg/discord.svg" alt="" className="fn__svg" /> */}
                                {/* <img src="svg/discord.svg" alt="" className="fn__svg" /> */}
                                <i class="footerSocial fa-brands fa-instagram"></i>
                            </span>
                            <span className="text">Instagram</span>
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
                                        <i className="fa-brands fa-twitter" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fa-brands fa-facebook" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fa-brands fa-instagram" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fa-brands fa-pinterest" />
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i className="fa-brands fa-behance" />
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
                                <img src="./Assets//logo.png" alt="" />
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

        </>
    )
}

export default Nav
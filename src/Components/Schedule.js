import React from 'react'
import TimeLineCard from './TimeLineCard'

const Schedule = () => {
    return (
        <div>
            <div className="neoh_fn_main" data-footer-sticky="">
                <div className="neoh_fn_content">
                    {/* Hero Header */}
                    <div className="neoh_fn_hero half">
                        {/* Overlay (of hero header) */}
                        <div className="bg_overlay">
                            {/* Overlay Slider */}
                            <div className="overlay_slider">
                                <div className="swiper-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="main_image" data-bg-img={require("./Assets/img/drops/1.jpg")} />
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="main_image" data-bg-img={require("./Assets/img/drops/2.jpg")} />
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="main_image" data-bg-img={require("./Assets/img/drops/3.jpg")} />
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="main_image" data-bg-img={require("./Assets/img/drops/4.jpg")} />
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="main_image" data-bg-img={require("./Assets/img/drops/5.jpg")} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* !Overlay Slider */}
                        </div>
                        {/* Overlay (of hero header) */}
                        <div className="hero_content">
                            <div className="container">
                                <div className="content">
                                    <h2 className="fn_title" title="Neoh">
                                        Neoh
                                    </h2>
                                    <p className="fn_desc fn_animated_text">
                                        The collection built by and runby ‘frenify’. Together we are
                                        strong than ever.
                                    </p>
                                </div>
                            </div>
                            <a
                                href="#about"
                                className="neoh_fn_down magic-hover magic-hover__square"
                            >
                                <span className="text">Scroll Down</span>
                                <span className="icon">
                                    <img src="svg/right-arr.svg" alt="" className="fn__svg" />
                                </span>
                            </a>
                        </div>
                    </div>
                    {/* !Hero Header */}
                    {/* Drops Section */}
                    <section id="drop">
                        <div className="container">
                            <div className="neoh_fn_title">
                                <h3 className="fn_title">Neoh’s Roadmap</h3>
                                <div className="line">
                                    <span />
                                </div>
                            </div>
                            {/* !Main Title */}
                            {/* Timeline */}
                            <div className="neoh_fn_timeline">
                                {/* Timeline Content */}
                                <div className="timeline_content">
                                    <ul className="timeline_list">
                                        <TimeLineCard index={1} />
                                        <TimeLineCard index={2} />
                                        <TimeLineCard index={3} />
                                        <TimeLineCard index={4} />
                                        <TimeLineCard index={5} />
                                        <TimeLineCard index={6} />
                                        <TimeLineCard index={7} />
                                        <TimeLineCard index={8} />
                                        <TimeLineCard index={9} />
                                    </ul>
                                </div>
                                {/* !Timeline Content */}
                                {/* Timeline Progress */}
                                <div className="timeline_progress">
                                    {/* Nav */}
                                    <a href="#" className="nav_prev">
                                        <img src="svg/right-arr.svg" alt="" className="fn__svg" />
                                    </a>
                                    <a href="#" className="nav_next">
                                        <img src="svg/right-arr.svg" alt="" className="fn__svg" />
                                    </a>
                                    {/* !Nav */}
                                    <div className="progress_line_wrapper">
                                        <div className="progress_line">
                                            <ul>
                                                <li data-index={1}>
                                                    <a href="#">
                                                        <span className="text">May 05, 2022</span>
                                                        <span className="circle" />
                                                    </a>
                                                </li>
                                                <li data-index={2}>
                                                    <a href="#">
                                                        <span className="text">May 27, 2022</span>
                                                        <span className="circle" />
                                                    </a>
                                                </li>
                                                <li className="active" data-index={3}>
                                                    <a href="#">
                                                        <span className="text">June 01, 2022</span>
                                                        <span className="circle" />
                                                    </a>
                                                </li>
                                                <li data-index={4}>
                                                    <a href="#">
                                                        <span className="text">June 07, 2022</span>
                                                        <span className="circle" />
                                                    </a>
                                                </li>
                                                <li data-index={5}>
                                                    <a href="#">
                                                        <span className="text">June 15, 2022</span>
                                                        <span className="circle" />
                                                    </a>
                                                </li>
                                                <li data-index={6}>
                                                    <a href="#">
                                                        <span className="text">June 23, 2022</span>
                                                        <span className="circle" />
                                                    </a>
                                                </li>
                                                <li data-index={7}>
                                                    <a href="#">
                                                        <span className="text">July 01, 2022</span>
                                                        <span className="circle" />
                                                    </a>
                                                </li>
                                            </ul>
                                            <span className="active_line" />
                                        </div>
                                    </div>
                                </div>
                                {/* !Timeline Progress */}
                            </div>
                            {/* !Timeline */}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Schedule
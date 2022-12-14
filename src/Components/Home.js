import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./Assets/css/Home.css"
import MatrixRain from './MatrixRain';
import TimeLineCard from './TimeLineCard';

const Home = () => {

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

    const homeScroll = ()=>{
        window.scrollTo(0,1100)
    }


    return (
        <>
            <div className="home-static">
                {/* Main */}
                <div className="neoh_fn_main" data-footer-sticky="">
                    {/* Content */}
                    <div className="neoh_fn_content">
                        {/* Hero Header */}
                        <div className="neoh_fn_hero">
                            {/* Overlay (of hero header) */}
                            <div className="bg_overlay">
                                {/* Overlay Color */}
                                <div className="bg_color" />
                                {/* !Overlay Color */}
                                {/* Overlay Image */}
                                <div class="bg_image">
                                    <video className='video' autoPlay='autoPlay' muted loop>
                                        <source src={require('./Assets/video/Produce.mp4')} type="video/mp4" />
                                        Your browser does not support the video tag.
                                        <source src={require('./Assets/video/Produce.mp4')} type="video/ogg" />Your browser does not support the video tag.
                                    </video>

                                </div>
                                {/* !Overlay Image */}
                            </div>
                            {/* Overlay (of hero header) */}
                            <div className="hero_content justify-content-end mainHeroHeadDiv">
                                <div className="container">
                                    <div className="content">
                                        {window.innerWidth > '650' ? <h2 className="fn_title heading landingHead" title="Neoh">
                                            infoXpression
                                        </h2> :
                                            <div className="d-flex justify-content-center flex-column">
                                                <h2 className="fn_title heading landingHead" title="Neoh">info</h2>
                                                <h2 className="fn_title heading landingHead" title="Neoh">Xpression</h2>
                                            </div>

                                        }
                                        <p className="fn_desc fn_animated_text heroSubHead">
                                            SEPTEMBER X - Y 2022 |
                                            TECHFEST USICT | GGSIPU
                                            CELEBRATING THE SENSE OF BELONGING
                                        </p>

                                    </div>
                                </div>
                                <Link 
                                    className="neoh_fn_down magic-hover magic-hover__square"
                                onClick={homeScroll}>
                                    <span className="text">Scroll Down</span>
                                    <span className="icon">
                                        {/* <img src="svg/right-arr.svg" alt="" className="fn__svg" /> */}

                                        {/* <img src={require('./Assets/img/arrow.svg')} alt="" className="fn__svg" /> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-chevron-down fn__svg" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                                        </svg>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* !Hero Header */}
                        {/* About Section */}
                        {/* <section id="about">
                            <div className="container">
                                <div className="neoh_fn_about_item">
                                    <div className="img_item">
                                        
                                        <img src={require("./Assets/img/about/1.jpg")} alt="" />
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
                                <div className="neoh_fn_about_item reverse">
                                    <div className="img_item">
                                        <img src="./Assets//about/2.jpg" alt="" />
                                    </div>
                                    <div className="content_item">
                                        <div className="neoh_fn_title" data-align="left">
                                            <h3 className="fn_title">High Quality NFT Collection</h3>
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
                                            <a href="about.html" className="neoh_fn_button only_text">
                                                <span className="text">More About US</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </section> */}
                        {/* !About Section */}
                        {/* Services Section */}
                        <section id="services">
                            <MatrixRain />
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
                                <div className="neoh_fn_title mbLow">
                                    <h1 className="fn_title theme Heading">Glimpses</h1>
                                    <div className="line">
                                        <span />
                                    </div>
                                </div>
                                {/* !Main Title */}
                                {/* Services */}
                                <div className="neoh_fn_services">
                                    <ul>
                                        <li>
                                            <div className="item">
                                                <div className="item_num">
                                                    <span class="sn_exp" >02</span>
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="fn_title sn_glimp_head">116</h3>
                                                    <p className="fn_desc fn_animated_text">
                                                        affilated colleges.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <div className="item_num">
                                                    <span class="sn_exp" >01</span>
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="fn_title sn_glimp_head">6000+</h3>
                                                    <p className="fn_desc fn_animated_text">
                                                        students in the campus
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <div className="item_num">
                                                    <span class="sn_exp" >03</span>
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="fn_title sn_glimp_head">25+</h3>
                                                    <p className="fn_desc fn_animated_text">
                                                        events!!
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="neoh_fn_services">
                                    <ul>
                                        <li>
                                            <div className="item">
                                                <div className="item_num">
                                                    <span class="sn_exp" >01</span>
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="fn_title">Huge Collection</h3>
                                                    <p className="fn_desc fn_animated_text">
                                                        With a footfall of 7000+ our last year's event was a huge sucess.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <div className="item_num">
                                                    <span class="sn_exp" >02</span>
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="fn_title">High Quality</h3>
                                                    <p className="fn_desc fn_animated_text">
                                                        this year the crowd expectancy has increased to over <b>9000</b>.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <div className="item_num">
                                                    <span class="sn_exp" >03</span>
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="fn_title">Top Resource</h3>
                                                    <p className="fn_desc fn_animated_text">
                                                        A major breakthrough is the <b>30,000</b> students in affiliated colleges of GGSIPU{" "}
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <div className="item_num">
                                                    <span class="sn_exp" >04</span>
                                                </div>
                                                <div className="item_content">
                                                    <h3 className="fn_title">Big Community</h3>
                                                    <p className="fn_desc fn_animated_text">
                                                        We have <b>8000+</b> registrations expected on the website this year for <b>25+ events</b> lined up for all kinds of audience.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                {/* !Services */}
                            </div>
                        </section>
                        {/* !Services Section */}
                        {/* Drops Section */}
                        <section id="drop">
                            <div className="container">
                                {/* <div className="neoh_fn_title">
                                    <h3 className="fn_title">Our Latest Drops</h3>
                                    <div className="line">
                                        <span />
                                    </div>
                                </div> */}

                                {/* <div className="neoh_fn_drops">
                                    <ul>
                                        <li>
                                            <div className="item" data-included="on">
                                                <div className="img_holder">
                                                    <img src="./Assets//drops/1.jpg" alt="" />
                                                    <a href="/" className="full_link" />
                                                </div>
                                                <div className="title_holder">
                                                    <h3 className="fn_title">
                                                        <a href="/">Neoh /4588</a>
                                                    </h3>
                                                </div>
                                           
                                                <div className="hidden_info">
                                                    <div className="img_item">
                                                        <img src="./Assets//drops/1.jpg" />
                                                    </div>
                                                    <div className="content_item">
                                                        <div className="neoh_fn_title" data-align="left">
                                                            <h3 className="fn_title">Neoh /4588</h3>
                                                            <div className="line">
                                                                <span />
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <p>
                                                                Suspendisse eu velit est. Cras nec vestibulum quam.
                                                                Donec tincidunt purus nec enim tincidunt, sit amet
                                                                facilisis massa laoreet. Integer mollis nec...
                                                                <a href="nft-single-1.html">Read More</a>
                                                            </p>
                                                        </div>
                                                        <div className="buttons">
                                                            <a href="/" target="_blank" className="neoh_fn_button">
                                                                <span className="icon">
                                                                    <img
                                                                        src="svg/opensea.svg"
                                                                        alt=""
                                                                        className="fn__svg"
                                                                    />
                                                                </span>
                                                                <span className="text">View on OpenSea</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                  
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item" data-included="on">
                                                <div className="img_holder">
                                                    <img src="./Assets//drops/2.jpg" alt="" />
                                                    <a href="/" className="full_link" />
                                                </div>
                                                <div className="title_holder">
                                                    <h3 className="fn_title">
                                                        <a href="/">Neoh /4587</a>
                                                    </h3>
                                                </div>
                                  
                                                <div className="hidden_info">
                                                    <div className="img_item">
                                                        <img src="./Assets//drops/2.jpg" />
                                                    </div>
                                                    <div className="content_item">
                                                        <div className="neoh_fn_title" data-align="left">
                                                            <h3 className="fn_title">Neoh /4587</h3>
                                                            <div className="line">
                                                                <span />
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <p>
                                                                Suspendisse eu velit est. Cras nec vestibulum quam.
                                                                Donec tincidunt purus nec enim tincidunt, sit amet
                                                                facilisis massa laoreet. Integer mollis nec...
                                                                <a href="nft-single-2.html">Read More</a>
                                                            </p>
                                                        </div>
                                                        <div className="buttons">
                                                            <a href="/" target="_blank" className="neoh_fn_button">
                                                                <span className="icon">
                                                                    <img
                                                                        src="svg/opensea.svg"
                                                                        alt=""
                                                                        className="fn__svg"
                                                                    />
                                                                </span>
                                                                <span className="text">View on OpenSea</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                      
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item" data-included="on">
                                                <div className="img_holder">
                                                    <img src="./Assets//drops/3.jpg" alt="" />
                                                    <a href="/" className="full_link" />
                                                </div>
                                                <div className="title_holder">
                                                    <h3 className="fn_title">
                                                        <a href="/">Neoh /4586</a>
                                                    </h3>
                                                </div>
                    
                                                <div className="hidden_info">
                                                    <div className="img_item">
                                                        <img src="./Assets//drops/3.jpg" />
                                                    </div>
                                                    <div className="content_item">
                                                        <div className="neoh_fn_title" data-align="left">
                                                            <h3 className="fn_title">Neoh /4586</h3>
                                                            <div className="line">
                                                                <span />
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <p>
                                                                Suspendisse eu velit est. Cras nec vestibulum quam.
                                                                Donec tincidunt purus nec enim tincidunt, sit amet
                                                                facilisis massa laoreet. Integer mollis nec...
                                                                <a href="nft-single-1.html">Read More</a>
                                                            </p>
                                                        </div>
                                                        <div className="buttons">
                                                            <a href="/" target="_blank" className="neoh_fn_button">
                                                                <span className="icon">
                                                                    <img
                                                                        src="svg/discord.svg"
                                                                        alt=""
                                                                        className="fn__svg"
                                                                    />
                                                                </span>
                                                                <span className="text">View on Discord</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                       
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item" data-included="on">
                                                <div className="img_holder">
                                                    <img src="./Assets//drops/4.jpg" alt="" />
                                                    <a href="/" className="full_link" />
                                                </div>
                                                <div className="title_holder">
                                                    <h3 className="fn_title">
                                                        <a href="/">Neoh /4585</a>
                                                    </h3>
                                                </div>
                            
                                                <div className="hidden_info">
                                                    <div className="img_item">
                                                        <img src="./Assets//drops/4.jpg" />
                                                    </div>
                                                    <div className="content_item">
                                                        <div className="neoh_fn_title" data-align="left">
                                                            <h3 className="fn_title">Neoh /4585</h3>
                                                            <div className="line">
                                                                <span />
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <p>
                                                                Suspendisse eu velit est. Cras nec vestibulum quam.
                                                                Donec tincidunt purus nec enim tincidunt, sit amet
                                                                facilisis massa laoreet. Integer mollis nec...
                                                                <a href="nft-single-1.html">Read More</a>
                                                            </p>
                                                        </div>
                                                        <div className="buttons">
                                                            <a href="/" target="_blank" className="neoh_fn_button">
                                                                <span className="icon">
                                                                    <img
                                                                        src="svg/discord.svg"
                                                                        alt=""
                                                                        className="fn__svg"
                                                                    />
                                                                </span>
                                                                <span className="text">View on Discord</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                         
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item" data-included="on">
                                                <div className="img_holder">
                                                    <img src="./Assets//drops/5.jpg" alt="" />
                                                    <a href="/" className="full_link" />
                                                </div>
                                                <div className="title_holder">
                                                    <h3 className="fn_title">
                                                        <a href="/">Neoh /4584</a>
                                                    </h3>
                                                </div>
                                       
                                                <div className="hidden_info">
                                                    <div className="img_item">
                                                        <img src="./Assets//drops/5.jpg" />
                                                    </div>
                                                    <div className="content_item">
                                                        <div className="neoh_fn_title" data-align="left">
                                                            <h3 className="fn_title">Neoh /4584</h3>
                                                            <div className="line">
                                                                <span />
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <p>
                                                                Suspendisse eu velit est. Cras nec vestibulum quam.
                                                                Donec tincidunt purus nec enim tincidunt, sit amet
                                                                facilisis massa laoreet. Integer mollis nec...
                                                                <a href="nft-single-1.html">Read More</a>
                                                            </p>
                                                        </div>
                                                        <div className="buttons">
                                                            <a href="/" target="_blank" className="neoh_fn_button">
                                                                <span className="icon">
                                                                    <img
                                                                        src="svg/discord.svg"
                                                                        alt=""
                                                                        className="fn__svg"
                                                                    />
                                                                </span>
                                                                <span className="text">View on Discord</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                     
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item" data-included="on">
                                                <div className="img_holder">
                                                    <img src="./Assets//drops/6.jpg" alt="" />
                                                    <a href="/" className="full_link" />
                                                </div>
                                                <div className="title_holder">
                                                    <h3 className="fn_title">
                                                        <a href="/">Neoh /4583</a>
                                                    </h3>
                                                </div>
                      
                                                <div className="hidden_info">
                                                    <div className="img_item">
                                                        <img src="./Assets//drops/6.jpg" />
                                                        <img src={require("./Assets/img/drops/6.jpg")} alt="dr" />
                                                    </div>
                                                    <div className="content_item">
                                                        <div className="neoh_fn_title" data-align="left">
                                                            <h3 className="fn_title">Neoh /4583</h3>
                                                            <div className="line">
                                                                <span />
                                                            </div>
                                                        </div>
                                                        <div className="desc">
                                                            <p>
                                                                Suspendisse eu velit est. Cras nec vestibulum quam.
                                                                Donec tincidunt purus nec enim tincidunt, sit amet
                                                                facilisis massa laoreet. Integer mollis nec...
                                                                <a href="nft-single-1.html">Read More</a>
                                                            </p>
                                                        </div>
                                                        <div className="buttons">
                                                            <a href="/" target="_blank" className="neoh_fn_button">
                                                                <span className="icon">
                                                                    <img
                                                                        src="svg/opensea.svg"
                                                                        alt=""
                                                                        className="fn__svg"
                                                                    />
                                                                </span>
                                                                <span className="text">View on OpenSea</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                         
                                            </div>
                                        </li>
                                    </ul>
                            
                                    <div className="clearfix" />
                            
                                    <a href="collection.html" className="neoh_fn_button only_text full">
                                        <span className="text">Click here to See all ITEMS</span>
                                    </a>
                                 
                                </div> */}

                                <div className="neoh_fn_title">
                                    <h3 className="fn_title theme Heading ">Schedule</h3>
                                    <div className="line">
                                        <span />
                                    </div>
                                </div>

                                <div className="neoh_fn_timeline ">

                                    <div className="timeline_content ">
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

                                    <div className="timeline_progress">

                                        <a href="/" className="nav_prev">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left timeLineSvgPrev" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                                            </svg>
                                        </a>
                                        <a href="/" className="nav_next">
                                            {/* <img src="svg/right-arr.svg" alt="" className="fn__svg" /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right timeLineSvgNext" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                            </svg>
                                        </a>

                                        <div className="progress_line_wrapper">
                                            <div className="progress_line">
                                                <ul>
                                                    <li data-index={1}>
                                                        <a href="/">
                                                            <span className="text">May 05, 2022</span>
                                                            <span className="circle" />
                                                        </a>
                                                    </li>
                                                    <li data-index={2}>
                                                        <a href="/">
                                                            <span className="text">May 27, 2022</span>
                                                            <span className="circle" />
                                                        </a>
                                                    </li>
                                                    <li className="active" data-index={3}>
                                                        <a href="/">
                                                            <span className="text">June 01, 2022</span>
                                                            <span className="circle" />
                                                        </a>
                                                    </li>
                                                    <li data-index={4}>
                                                        <a href="/">
                                                            <span className="text">June 07, 2022</span>
                                                            <span className="circle" />
                                                        </a>
                                                    </li>
                                                    <li data-index={5}>
                                                        <a href="/">
                                                            <span className="text">June 15, 2022</span>
                                                            <span className="circle" />
                                                        </a>
                                                    </li>
                                                    <li data-index={6}>
                                                        <a href="/">
                                                            <span className="text">June 23, 2022</span>
                                                            <span className="circle" />
                                                        </a>
                                                    </li>
                                                    <li data-index={7}>
                                                        <a href="/">
                                                            <span className="text">July 01, 2022</span>
                                                            <span className="circle" />
                                                        </a>
                                                    </li>
                                                </ul>
                                                <span className="active_line" />
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </section>


                        {/* !Drops Section */}
                        {/* Investor Section */}
                        <h3 className="fn_title theme Heading InvesterHeading mt-5 pt-4">Our Sponsers</h3>
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
                        {/* !Investor Section */}
                        {/* Blog Section */}
                        {/* <section id="blog">
                            <div className="container"> */}
                        {/* Main Title */}
                        {/* <div className="neoh_fn_title">
                                    <h3 className="fn_title">Neoh???s News</h3>
                                    <div className="line">
                                        <span />
                                    </div>
                                </div> */}
                        {/* !Main Title */}
                        {/* Moving Blog List Shortcode */}
                        {/* <div className="neoh_fn_moving_blog">
                                    <ul>
                                        <li>
                                            <div className="item">
                                                <img src="./Assets//blog/1.jpg" alt="" className="moving_img" />
                                                <p className="fn_date">
                                                    <span>June 01, 2022</span>
                                                </p>
                                                <h3 className="fn_title">
                                                    <a href="blog-single.html">
                                                        Neoh???s NFT Goes Public In Nod To Crypto Adoption
                                                    </a>
                                                </h3>
                                                <p className="fn_desc">
                                                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                                                    varius congue ut vitae est.
                                                </p>
                                                <p className="fn_read">
                                                    <a
                                                        href="blog-single.html"
                                                        className="neoh_fn_button only_text"
                                                    >
                                                        <span className="text">Read More</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <img src="./Assets//blog/2.jpg" alt="" className="moving_img" />
                                                <p className="fn_date">
                                                    <span>May 25, 2022</span>
                                                </p>
                                                <h3 className="fn_title">
                                                    <a href="blog-single.html">
                                                        Bankman-Fried Would Like to Talk With Musk About Twitter
                                                    </a>
                                                </h3>
                                                <p className="fn_desc">
                                                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                                                    varius congue ut vitae est.
                                                </p>
                                                <p className="fn_read">
                                                    <a
                                                        href="blog-single.html"
                                                        className="neoh_fn_button only_text"
                                                    >
                                                        <span className="text">Read More</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="item">
                                                <img src="./Assets//blog/3.jpg" alt="" className="moving_img" />
                                                <p className="fn_date">
                                                    <span>May 13, 2022</span>
                                                </p>
                                                <h3 className="fn_title">
                                                    <a href="blog-single.html">
                                                        Crypto-Focused Silvergate Jumps on Blowout Earnings Report
                                                    </a>
                                                </h3>
                                                <p className="fn_desc">
                                                    Morbi non dignissim erat, a blandit felis nec lorem vel orci
                                                    varius congue ut vitae est.
                                                </p>
                                                <p className="fn_read">
                                                    <a
                                                        href="blog-single.html"
                                                        className="neoh_fn_button only_text"
                                                    >
                                                        <span className="text">Read More</span>
                                                    </a>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}
                        {/* !Moving Blog List Shortcode */}
                        {/* </div> */}
                        {/* </section> */}
                        {/* !Blog Section */}
                    </div>
                    {/* Content */}
                    {/* Footer */}
                    {/* <footer id="footer"> */}
                    {/* <div className="neoh_fn_footer"> */}
                    {/* Footer Top */}
                    {/* <div className="footer_top">
                                <div className="container">
                                    <div className="ft_in">
                                        <div className="desc">
                                            <div className="img">
                                                <img src="./Assets//footer-logo.png" alt="" />
                                            </div>
                                            <h3 className="fn_title">Join Now For Early Access</h3>
                                            <p className="fn_desc">
                                                Morbi non dignissim erat, a blandit felis nec lorem vel orci
                                                varius congue ut vitae est. Nam quis tempus nisl. Fusce
                                                posuere nibh a mi molestie, sit amet ornare
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
                            </div> */}
                    {/* !Footer Top */}
                    {/* Footer Bottom */}
                    {/* <div className="footer_bottom">
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
                            </div> */}
                    {/* !Footer Bottom */}
                    {/* </div> */}
                    {/* </footer> */}
                    {/* !Footer */}
                    {/* Totop */}
                    {/* <a href="/" className="neoh_fn_totop">
                        <span className="arrow">
                            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
                        </span>
                        <span className="circle">
                            <img src="svg/circle.svg" alt="" className="fn__svg" />
                        </span>
                    </a> */}
                    {/* !Totop */}
                </div>
                {/* !Main */}
            </div>

        </>
    )
}

export default Home
import React, { useEffect } from 'react'
import "./Assets/css/Home.css"
import MatrixRain from './MatrixRain';

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
                                <div class="bg_image" data-bg-img="./Assets/img/hero/bg.jpg"></div>
                                {/* !Overlay Image */}
                            </div>
                            {/* Overlay (of hero header) */}
                            <div className="hero_content">
                                <div className="container">
                                    <div className="content">
                                        <h2 className="fn_title atmosphere landingHead" title="Neoh">
                                            infoXpression
                                        </h2>
                                        <p className="fn_desc fn_animated_text">
                                            The collection built by and runby ‘frenify’. Together we are
                                            strong than ever.
                                        </p>
                                    </div>
                                </div>
                                <a
                                    href="/about"
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
                                <div className="neoh_fn_title">
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
                        {/* <section id="drop">
                            <div className="container">
                                <div className="neoh_fn_title">
                                    <h3 className="fn_title">Our Latest Drops</h3>
                                    <div className="line">
                                        <span />
                                    </div>
                                </div>
                          
                                <div className="neoh_fn_drops">
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
                                 
                                </div>
                   
                                <div className="neoh_fn_title">
                                    <h3 className="fn_title">Neoh’s Roadmap</h3>
                                    <div className="line">
                                        <span />
                                    </div>
                                </div>
                          
                                <div className="neoh_fn_timeline">
                                
                                    <div className="timeline_content">
                                        <ul className="timeline_list">
                                            <li className="timeline_item" data-index={1}>
                                                <div className="t_item">
                                                    <div className="t_item_img">
                                                        <div className="neoh_fn_gallery_1_2">
                                                            <div className="gallery_in">
                                                                <div className="item row2">
                                                                    <img src="./Assets//timeline/1/1.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/1/2.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/1/3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="t_item_info">
                                                        <p className="fn_date">
                                                            <span>May 05, 2022</span>
                                                        </p>
                                                        <h3 className="fn_title">
                                                            <a href="roadmap-single.html">
                                                                New Character Set /12 is Coming Up
                                                            </a>
                                                        </h3>
                                                        <p className="fn_desc">
                                                            Morbi non dignissim erat, a blandit felis. Suspendisse
                                                            nec lorem vel orci varius congue ut vitae est. Nam quis
                                                            tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                                                            ornare lectus interdum.
                                                        </p>
                                                        <p className="fn_read">
                                                            <a
                                                                href="roadmap-single.html"
                                                                className="neoh_fn_button only_text"
                                                            >
                                                                <span className="text">Read More</span>
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline_item" data-index={2}>
                                                <div className="t_item">
                                                    <div className="t_item_img">
                                                        <div className="neoh_fn_gallery_1_2">
                                                            <div className="gallery_in">
                                                                <div className="item row2">
                                                                    <img src="./Assets//timeline/2/1.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/2/2.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/2/3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="t_item_info">
                                                        <p className="fn_date">
                                                            <span>May 27, 2022</span>
                                                        </p>
                                                        <h3 className="fn_title">
                                                            <a href="roadmap-single.html">
                                                                Female Character Set /20 is Coming Up
                                                            </a>
                                                        </h3>
                                                        <p className="fn_desc">
                                                            Morbi non dignissim erat, a blandit felis. Suspendisse
                                                            nec lorem vel orci varius congue ut vitae est. Nam quis
                                                            tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                                                            ornare lectus interdum.
                                                        </p>
                                                        <p className="fn_read">
                                                            <a
                                                                href="roadmap-single.html"
                                                                className="neoh_fn_button only_text"
                                                            >
                                                                <span className="text">Read More</span>
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline_item active" data-index={3}>
                                                <div className="t_item">
                                                    <div className="t_item_img">
                                                        <div className="neoh_fn_gallery_1_2">
                                                            <div className="gallery_in">
                                                                <div className="item row2">
                                                                    <img src="./Assets//timeline/3/1.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/3/2.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/3/3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="t_item_info">
                                                        <p className="fn_date">
                                                            <span>June 01, 2022</span>
                                                        </p>
                                                        <h3 className="fn_title">
                                                            <a href="roadmap-single.html">
                                                                Mini Game Lounch For Community
                                                            </a>
                                                        </h3>
                                                        <p className="fn_desc">
                                                            Morbi non dignissim erat, a blandit felis. Suspendisse
                                                            nec lorem vel orci varius congue ut vitae est. Nam quis
                                                            tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                                                            ornare lectus interdum.
                                                        </p>
                                                        <p className="fn_read">
                                                            <a
                                                                href="roadmap-single.html"
                                                                className="neoh_fn_button only_text"
                                                            >
                                                                <span className="text">Read More</span>
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline_item" data-index={4}>
                                                <div className="t_item">
                                                    <div className="t_item_img">
                                                        <div className="neoh_fn_gallery_1_2">
                                                            <div className="gallery_in">
                                                                <div className="item row2">
                                                                    <img src="./Assets//timeline/4/1.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/4/2.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/4/3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="t_item_info">
                                                        <p className="fn_date">
                                                            <span>June 07, 2022</span>
                                                        </p>
                                                        <h3 className="fn_title">
                                                            <a href="roadmap-single.html">
                                                                New Character Set /15 is Coming Up
                                                            </a>
                                                        </h3>
                                                        <p className="fn_desc">
                                                            Morbi non dignissim erat, a blandit felis. Suspendisse
                                                            nec lorem vel orci varius congue ut vitae est. Nam quis
                                                            tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                                                            ornare lectus interdum.
                                                        </p>
                                                        <p className="fn_read">
                                                            <a
                                                                href="roadmap-single.html"
                                                                className="neoh_fn_button only_text"
                                                            >
                                                                <span className="text">Read More</span>
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline_item" data-index={5}>
                                                <div className="t_item">
                                                    <div className="t_item_img">
                                                        <div className="neoh_fn_gallery_1_2">
                                                            <div className="gallery_in">
                                                                <div className="item row2">
                                                                    <img src="./Assets//timeline/5/1.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/5/2.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/5/3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="t_item_info">
                                                        <p className="fn_date">
                                                            <span>June 15, 2022</span>
                                                        </p>
                                                        <h3 className="fn_title">
                                                            <a href="roadmap-single.html">
                                                                New Spirit Set /01 is Coming Up
                                                            </a>
                                                        </h3>
                                                        <p className="fn_desc">
                                                            Morbi non dignissim erat, a blandit felis. Suspendisse
                                                            nec lorem vel orci varius congue ut vitae est. Nam quis
                                                            tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                                                            ornare lectus interdum.
                                                        </p>
                                                        <p className="fn_read">
                                                            <a
                                                                href="roadmap-single.html"
                                                                className="neoh_fn_button only_text"
                                                            >
                                                                <span className="text">Read More</span>
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline_item" data-index={6}>
                                                <div className="t_item">
                                                    <div className="t_item_img">
                                                        <div className="neoh_fn_gallery_1_2">
                                                            <div className="gallery_in">
                                                                <div className="item row2">
                                                                    <img src="./Assets//timeline/6/1.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/6/2.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/6/3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="t_item_info">
                                                        <p className="fn_date">
                                                            <span>June 23, 2022</span>
                                                        </p>
                                                        <h3 className="fn_title">
                                                            <a href="roadmap-single.html">
                                                                New Haircut Collection /01 is Coming Up
                                                            </a>
                                                        </h3>
                                                        <p className="fn_desc">
                                                            Morbi non dignissim erat, a blandit felis. Suspendisse
                                                            nec lorem vel orci varius congue ut vitae est. Nam quis
                                                            tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                                                            ornare lectus interdum.
                                                        </p>
                                                        <p className="fn_read">
                                                            <a
                                                                href="roadmap-single.html"
                                                                className="neoh_fn_button only_text"
                                                            >
                                                                <span className="text">Read More</span>
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="timeline_item" data-index={7}>
                                                <div className="t_item">
                                                    <div className="t_item_img">
                                                        <div className="neoh_fn_gallery_1_2">
                                                            <div className="gallery_in">
                                                                <div className="item row2">
                                                                    <img src="./Assets//timeline/7/1.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/7/2.jpg" alt="" />
                                                                </div>
                                                                <div className="item">
                                                                    <img src="./Assets//timeline/7/3.jpg" alt="" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="t_item_info">
                                                        <p className="fn_date">
                                                            <span>July 01, 2022</span>
                                                        </p>
                                                        <h3 className="fn_title">
                                                            <a href="roadmap-single.html">
                                                                New Haircut Collection /02 is Coming Up
                                                            </a>
                                                        </h3>
                                                        <p className="fn_desc">
                                                            Morbi non dignissim erat, a blandit felis. Suspendisse
                                                            nec lorem vel orci varius congue ut vitae est. Nam quis
                                                            tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                                                            ornare lectus interdum.
                                                        </p>
                                                        <p className="fn_read">
                                                            <a
                                                                href="roadmap-single.html"
                                                                className="neoh_fn_button only_text"
                                                            >
                                                                <span className="text">Read More</span>
                                                            </a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
           
                                    <div className="timeline_progress">
                                      
                                        <a href="/" className="nav_prev">
                                            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
                                        </a>
                                        <a href="/" className="nav_next">
                                            <img src="svg/right-arr.svg" alt="" className="fn__svg" />
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
                        </section> */}


                        {/* !Drops Section */}
                        {/* Investor Section */}
                        <h3 className="fn_title theme Heading InvesterHeading">Our Investors</h3>
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
                        <section id="blog">
                            <div className="container">
                                {/* Main Title */}
                                <div className="neoh_fn_title">
                                    <h3 className="fn_title">Neoh’s News</h3>
                                    <div className="line">
                                        <span />
                                    </div>
                                </div>
                                {/* !Main Title */}
                                {/* Moving Blog List Shortcode */}
                                <div className="neoh_fn_moving_blog">
                                    <ul>
                                        <li>
                                            <div className="item">
                                                <img src="./Assets//blog/1.jpg" alt="" className="moving_img" />
                                                <p className="fn_date">
                                                    <span>June 01, 2022</span>
                                                </p>
                                                <h3 className="fn_title">
                                                    <a href="blog-single.html">
                                                        Neoh’s NFT Goes Public In Nod To Crypto Adoption
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
                                </div>
                                {/* !Moving Blog List Shortcode */}
                            </div>
                        </section>
                        {/* !Blog Section */}
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
                {/* !Main */}
            </div>

        </>
    )
}

export default Home
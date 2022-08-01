import React from "react";
import "./Assets/css/eventTemp.css";

export default function EventTemplate() {
  return (
    <>
      <div className="et-background">
        <section className="fluid-container da-margin-top-10  d-flex justify-content-around flex-column-reverse flex-md-row px-5">
          <div className="">
            <h2 className="da-title justify-start">Event Name </h2>
            <p className="text-s   ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla,
              officiis!
            </p>
            <a href="https://google.com" class="register ">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              REGISTER
            </a>
          </div>
          <div className="  ">
            <img
              src={
                "https://www.wikihow.com/images/thumb/d/d1/Convert-Square-Meters-to-Square-Feet-and-Vice-Versa-Step-2-Version-5.jpg/v4-460px-Convert-Square-Meters-to-Square-Feet-and-Vice-Versa-Step-2-Version-5.jpg.webp"
              }
              className="  img-poster justify-self-center align-self-center"
              alt="infox"
            />
          </div>
        </section>
        {/* <section>
      <div class="md:container ">
	<div class="field ">
		<div class="mouse"></div>
		
	</div>
</div>
      </section> */}
        <section className=" about-section da-margin-top-8">
          <div className="fluid-container d-flex flex-column flex-md-row ">
            <div className="p-2  flex-fill  w-100">
              <h4 className="subheading">About</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minimm eveniet illo? Quo odit, nihil
                consectetur beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="p-2 flex-fill w-100">
              {" "}
              <h4 className="subheading">Structure</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate mi eveniet illo? Quo odit, nihil consectetur
                beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="p-2 flex-fill w-100">
              {" "}
              <h4 className="subheading">Timeline</h4>
              <p>
                Lorem, ips eveniet illo? Quo odit, nihil consectetur beatae
                eaque ab voluptatem? Voluptas.
              </p>
            </div>
          </div>
          <div className="fluid-container d-flex flex-column flex-md-row ">
            <div className="p-2 flex-fill  w-100">
              <h4 className="subheading">Rules</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minieveniet illo? Quo odit, nihil
                consectetur beatae eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="p-2 flex-fill  w-100">
              {" "}
              <h4 className="subheading">Prize</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate llo? Quo odit, nihil consectetur beatae
                eaque ab voluptatem? Voluptas.
              </p>
            </div>
            <div className="p-2 flex-fill  w-100">
              {" "}
              <h4 className="subheading">Contact Us</h4>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt cupiditate minit, nihil consectetur beatae eaque ab
                voluptatem? Voluptas.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

import React from 'react'

const TimeLineCard = (props) => {
    return (
        <li className={props.index === 1 ? `timeline_item active` : "timeline_item"} data-index={props.index}>
            <div className="t_item">
                <div className="t_item_img">
                    <div className="schedule_fn_gallery_1_2">
                        <div className="schedule-gallery_in">
                            <div className="item">
                                <img src={require("./Assets/img/timeline/1/1.jpg")} alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="t_item_info">
                    <p className="fn_date atmosphere">
                        <span>Date &amp; Time</span>
                    </p>
                    <h3 className="fn_title atmosphere">
                        <a href="roadmap-single.html">
                            Event Name
                        </a>
                    </h3>
                    <p className="fn_desc ">
                        Morbi non dignissim erat, a blandit felis. Suspendisse
                        nec lorem vel orci varius congue ut vitae est. Nam quis
                        tempus nisl. Fusce posuere nibh a mi molestie, sit amet
                        ornare lectus interdum.
                    </p>
                    <p className="fn_read">
                        <a
                            href="#"
                            className="neoh_fn_button only_text"
                        >
                            <span className="text ">Know More</span>
                        </a>
                    </p>
                </div>
            </div>
        </li>
    )
}

export default TimeLineCard
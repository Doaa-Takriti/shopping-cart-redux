import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            loop: true,
        };
        return (
            <div id="slider-tshirt">
                <Slider {...settings}>
                    <div>
                        <h3>
                            <img src="https://img.freepik.com/free-psd/young-women-representing-inclusion-concept-with-mock-up-t-shirts_23-2148997981.jpg?size=338&ext=jpg" alt="" />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img src="https://img.freepik.com/free-psd/friends-representing-inclusion-concept-with-mock-up-t-shirts_23-2148997994.jpg?size=338&ext=jpg" alt="" />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img src="https://image.freepik.com/free-psd/friends-representing-inclusion-concept-with-mock-up-t-shirts_23-2148997993.jpg" alt="" />
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img src="https://image.freepik.com/free-psd/friends-representing-inclusion-concept-with-mock-up-t-shirts_23-2148997993.jpg" alt="" />
                        </h3>
                    </div>

                </Slider>
            </div>
        );
    }
}
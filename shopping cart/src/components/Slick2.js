import React, { Component } from "react";
import Slider from "react-slick";

export default class Slick2 extends Component {
    render() {
        const settings = {
            className: "center",
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 3,
            swipeToSlide: true,
            autoplay: true,
            loop: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,


                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,

                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,

                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,

                    }
                }

            ],
            afterChange: function (index) {
                console.log(
                    `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
                );
            }
        };
        return (
            <div id="card-latest" >
                <h2>latest products</h2>
                <Slider {...settings} >
                    <div>
                        <h3>
                            <img src="https://th.bing.com/th/id/OIP.IMSebXvEh5EBdJMBbn0PzQHaKm?pid=ImgDet&w=620&h=887&rs=1" alt="" />
                            <a href="#" className="mt-8">
                                fasiton
                            </a>
                        </h3>
                    </div>

                    <div>
                        <h3>
                            <img src="https://th.bing.com/th/id/R.a73017345df5b931b724ac4c58d276dc?rik=PED9r%2fNRjaEhqA&riu=http%3a%2f%2ffile.vintageadbrowser.com%2fl-8bynr19l8osyxe.jpg&ehk=%2fiiTU4K8XXJhvvbJIL4kfg6%2buFop1RIm6Z2zWrDI8%2fg%3d&risl=&pid=ImgRaw&r=0" alt="" />
                            <a href="#" className="mt-8">
                                electronic
                            </a>
                        </h3>
                    </div>
                    <div>
                        <h3>
                            <img src="https://th.bing.com/th/id/OIP.SPaeKx58Ao6kG7TDUIiDWwHaHa?pid=ImgDet&w=800&h=800&rs=1" alt="" />
                            <a href="#" className="mt-8">
                                furniture
                            </a>
                        </h3>
                    </div>


                </Slider>
            </div>
        );
    }
}



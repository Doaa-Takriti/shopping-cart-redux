



import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Card, Button } from 'react-bootstrap';
import Star1 from './Star1';
import Star2 from './Star2';
import { Switch, Case, Default } from 'react-if';



const cardOfPopular = [
    {
        title: "tshirt",
        body: "white cotton tshirt",
        imageUrl: "https://www.wine-n-gear.com/wp-content/uploads/2019/11/Women-t-shirt-51-White-1-5780WhiteModelFront-1200W.png",
        price: "100 $",
        rating: 5

    },
    {
        title: "mobile ",
        body: "mobile phone ",
        imageUrl: "https://th.bing.com/th/id/R.3aa5ba0885c06db800a6f6e7e0c23502?rik=HGq%2bQ%2bqtXJe4Rw&pid=ImgRaw&r=0",
        price: "900 $",
        rating: 5

    },
    {
        title: "laptop",
        body: "laptop black color",
        imageUrl: "https://th.bing.com/th/id/OIP.7Rir_DCMods6hegRyTI52AHaFM?pid=ImgDet&rs=1",
        price: "500 $",
        rating: 4

    },
    {
        title: "foundation ",
        body: "foundation oily skin ",
        imageUrl: "https://th.bing.com/th/id/R.e04ed467d3caddcdb9c55e0ec626d911?rik=jco%2bZOBNXRqqyQ&pid=ImgRaw&r=0",
        price: "900 $",
        rating: 5

    },

    {
        title: "mask",
        body: "mask corona",
        imageUrl: "https://th.bing.com/th/id/OIP.sp7u7dUJ5WaHjXnoJL1izAHaHa?pid=ImgDet&rs=1",
        price: "50 $",
        rating: 4

    },

    {
        title: "shampoo",
        body: "shampoo for dry hair",
        imageUrl: "https://th.bing.com/th/id/OIP.rqGU7usFoGtxm5v9cCN9TgHaHa?pid=ImgDet&rs=1",
        price: "70 $",
        rating: 5

    },
    {
        title: "remover",
        body: "macke up remover",
        imageUrl: "https://i.pinimg.com/originals/6c/0d/a9/6c0da903364da89512baa4bb9467a314.png",
        price: "10 $",
        rating: 5

    },
    {
        title: "remover",
        body: "macke up remover",
        imageUrl: "https://th.bing.com/th/id/R.f9bd3cded516664eafbd96efb2aa34bf?rik=Ex6oGsGJbRm44w&pid=ImgRaw&r=0",
        price: "5 $",
        rating: 4

    },
    {
        title: "tshirt",
        body: "white cotton tshirt",
        imageUrl: "https://www.wine-n-gear.com/wp-content/uploads/2019/11/Women-t-shirt-51-White-1-5780WhiteModelFront-1200W.png",
        price: "100 $",
        rating: 5

    },
    {
        title: "mobile ",
        body: "mobile phone ",
        imageUrl: "https://th.bing.com/th/id/R.3aa5ba0885c06db800a6f6e7e0c23502?rik=HGq%2bQ%2bqtXJe4Rw&pid=ImgRaw&r=0",
        price: "900 $",
        rating: 5

    },
    {
        title: "laptop",
        body: "laptop black color",
        imageUrl: "https://th.bing.com/th/id/OIP.7Rir_DCMods6hegRyTI52AHaFM?pid=ImgDet&rs=1",
        price: "500 $",
        rating: 4

    },
    {
        title: "foundation ",
        body: "foundation oily skin ",
        imageUrl: "https://th.bing.com/th/id/R.e04ed467d3caddcdb9c55e0ec626d911?rik=jco%2bZOBNXRqqyQ&pid=ImgRaw&r=0",
        price: "900 $",
        rating: 5

    },

    {
        title: "mask",
        body: "mask corona",
        imageUrl: "https://th.bing.com/th/id/OIP.sp7u7dUJ5WaHjXnoJL1izAHaHa?pid=ImgDet&rs=1",
        price: "50 $",
        rating: 4

    },

    {
        title: "shampoo",
        body: "shampoo for dry hair",
        imageUrl: "https://th.bing.com/th/id/OIP.rqGU7usFoGtxm5v9cCN9TgHaHa?pid=ImgDet&rs=1",
        price: "70 $",
        rating: 5

    },
    {
        title: "remover",
        body: "macke up remover",
        imageUrl: "https://i.pinimg.com/originals/6c/0d/a9/6c0da903364da89512baa4bb9467a314.png",
        price: "10 $",
        rating: 5

    },
    {
        title: "remover",
        body: "macke up remover",
        imageUrl: "https://th.bing.com/th/id/R.f9bd3cded516664eafbd96efb2aa34bf?rik=Ex6oGsGJbRm44w&pid=ImgRaw&r=0",
        price: "5 $",
        rating: 4

    },



];

export default class Slick1 extends Component {

    render() {
        const settings = {
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "60px",
            slidesToShow: 2,

            speed: 500,
            rows: 2,
            slidesPerRow: 2,
            autoplay: true,
            loop: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        rows: 2,
                        slidesPerRow: 2,

                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        rows: 1,
                        slidesPerRow: 1,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        rows: 1,
                        slidesPerRow: 1,
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1,
                        rows: 1,
                        slidesPerRow: 1,
                    }
                }

            ]
        }
        return (
            <div>
                <div className="row">

                    <div className="col-md-6 d-flex justify-content-flex-start">
                        <h2>popular products</h2>
                    </div>
                    <div id="button1"
                        className="col-md-6 d-flex justify-content-flex-end">
                        <Button variant="success">view all</Button>
                    </div>
                </div>


                <Slider {...settings}>


                    {cardOfPopular.map(({ title, body, imageUrl, price, rating }) => (

                        <div>
                            <h3 style={{ margin: '10px', fontSize: '1rem' }}>
                                <Card key={title} id="card-popular"
                                    style={{ margin: '1px' }}>
                                    <Card.Body>

                                        <div className="img-popular" style={{ height: '150px' }} >
                                            <img src={imageUrl} alt="" />

                                        </div>
                                        <div className="content-popular">
                                            <Card.Subtitle className="my-2 text-muted "> {body}</Card.Subtitle>

                                            <p> price : {price}

                                            </p>



                                            <div>
                                                <Switch>
                                                    <Case condition={rating === 5}><Star1 /></Case>
                                                    <Case condition={rating === 4}><Star2 /></Case>

                                                    <Default>This will be displayed if no Case have matching condition</Default>
                                                </Switch>
                                            </div>
                                            <Card.Link className="mb-2" href="#">add to cart</Card.Link>

                                            <Card.Link href="#" className="text-success">details</Card.Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </h3>
                        </div>

                    ))}

                </Slider>
            </div >
        );
    }
}
"use client"

import React from 'react'
import Slider from "react-slick"
import Slide from "./Slide"

const Hero = () => {
    var settings = {
        dots: true, 
        infinite: true, 
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, 
        pauseOnHover: false,
    };

    const slideData = [{
        id: 0,
        img: "/banner_1.jpg",
        title: "Trending Item",
        mainTitle: "WOMEN'S LATEST SALE",
        price: "$20",
    },
    {
        id: 1,
        img: "/banner_2.webp",
        title: "Trending Accessories",
        mainTitle: "Modern Sunglases",
        price: "$15"
    },
    {
        id:2,
        img:"/banner_3.jpg",
        title: "Sale Offer",
        mainTitle: "NEW FASHION SUPER SALE",
        Price: "$30"
    },
    {
        id:3,
        img:"/banner_4.jpg",
        title: "Special Offer",
        mainTitle: "NEW ARRIVAL SALE",
        Price:"$20"
    },
    {
        id:4,
        img:"/banner_5.jpg",
        title:"Khaternaak Offer",
        mainTitle:"LATEST ARRIVALS",
        price:"$10"
    },
]

  return (
    <div>
       <div className="container pt-6 lg:pt-0">
        <Slider{...settings}>
        {slideData.map((item) =>( 
        <Slide key={item.id}
        img={item.img}
        title={item.title}
        mainTitle={item.mainTitle}
        price={item.price}
        />
    ))}
        </Slider>
       </div>
    </div>
  )
};

export default Hero

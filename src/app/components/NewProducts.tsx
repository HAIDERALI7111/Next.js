import React from 'react'
import ProductCard from './ProductCard'

const productData = [{
    img:"/lawn-1.jpg",
    title:"Suit",
    desc: "WOMEN YARN FLEECE THREE PIECE SUIT",
    rating:3,
    price:"35"
},
{
    img:"/lawn-2.jpg",
    title:"Suit",
    desc: "WOMEN THREE PIECE SUIT",
    rating:4,
    price:"45"
},
{
    img:"/lawn-3.jpg",
    title:"Suit",
    desc: "WOMEN THREE PIECE SUIT",
    rating:4,
    price:"35"
},
{
    img:"/lawn-4.jpg",
    title:"Suit",
    desc: "WOMEN THREE PIECE SUIT",
    rating:3,
    price:"45"
},
{
    img:"/top.webp",
    title:"Black Top",
    desc: "WOMEN TOP",
    rating:4,
    price:"62"
},
{
    img:"/casual.jpg",
    title:"kurtee",
    desc: "WOMEN CASUAL KURTEE",
    rating:4,
    price:"75"
},
{
    img:"/khussa.webp",
    title:"Shoes",
    desc: "WOMEN UNIQUE KHUSSA",
    rating:5 ,
    price:"56"
},
{
    img:"/heels.webp",
    title:"shoes",
    desc: "WOMEN BRIDAL HEELS",
    rating:5 ,
    price:"83"
},
{ 
    img:"/cat.png",
    title:"Sunglases",
    desc: "WOMEN CAT SUNGLASES",
    rating:4,
    price:"27"
},
{
    img:"/chapal.webp",
    title:"Shoes",
    desc: "WOMEN CASUAL CHAPPAL",
    rating:3,
    price:"39"
},
{
    img:"/various.jpg",
    title:"Party Wear",
    desc: "BRIDAL LEHNGA",
    rating:5,
    price:"$65"
},
{
    img:"/black.jpg",
    title:"Casual Chappal",
    desc: "WOMEN KOLA PURI ",
    rating:2,
    price:"78"
},
{
    img:"/watch.png",
    title:"watch",
    desc: "WOMEN WATCH",
    rating:4,
    price:"72"
},
{
    img:"/glasesw.webp",
    title:"Black Glases",
    desc: "WOMEN SUN GLASSES",
    rating:4,
    price:"24"
},
{
    img:"/bridal.png",
    title:"Jewelry",
    desc: "WOMEN BRIDAL JEWELRY",
    rating:3,
    price:"87"
},
{
    img:"/bangles.png",
    title:"Bangles",
    desc: "WOMEN BANGLES",
    rating:4,
    price:"99"
},
{
    img:"/Art.webp",
    title:"Chappal",
    desc: "WOMEN SINDH STYLE KOLA PURI",
    rating:4,
    price:"86"
},
{
    img:"/low.webp",
    title:"Low Heels Bridal",
    desc: "WOMEN BRIDAL LOW HEELS",
    rating:4,
    price:"55"
},
{
    img:"/abaya.jpg",
    title:"Fashion",
    desc: "WOMEN ABAYA NEW DESIGN",
    rating:5,
    price:"55"
},
{
    img:"/abaya1.jpg",
    title:"Fashion",
    desc: "WOMEN ABAYA NEW DESIGN",
    rating:5,
    price:"67"
}]

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
    <h2 className="font-medium text-2xl pb-4">New Products</h2>

    <div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2
    lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">


{productData.map((item,index)=> (
<ProductCard key={index}
img={item.img}
title={item.title}
desc={item.desc}
rating={item.rating}
price={item.price}
 />
))}

    </div>
      </div>
    </div>
  )
}

export default NewProducts

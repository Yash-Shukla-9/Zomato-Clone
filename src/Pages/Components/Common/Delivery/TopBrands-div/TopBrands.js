import React from "react";
import "./Topbrands.css";
import Slider from "react-slick";
import NextArrow from "../../Carousel/NextArrow";
import PreArrow from "../../Carousel/PreArrow";

const BrandList = [
  {
    id: 1,
    time: "21min",
    title: "Inidan Coffee House",

    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/ff8a5d17376a48d7287573f8b0d0edeb_1561377958.png?output-format=webp",
  },

  {
    id: 2,
    time: "24min",
    title: "The Oven Classics",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7f1533d43b9e312c3117d281dfa3ca8c_1611318935.png?output-format=webp",
  },

  {
    id: 3,
    time: "36min",
    title: "Pizza Hut",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9742d760cf95e9dbf9b869ca9c753f8f_1613211963.png?output-format=webp",
  },

  {
    id: 4,

    time: "39min",
    title: "Jharoka Restaurant The Arihant Plaace",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/9a42667649bc0478b638d0f38f9e0489_1611318965.png?output-format=webp",
  },

  {
    id: 5,
    time: "24min",

    title: "The Cake Company",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/d7ed4b5bccbfbc8d702d66dd745e9b88_1605103990.png?output-format=webp",
  },

  {
    id: 6,
    time: "37min",
    title: "Dal Chini",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/6376a39484344c83525486a34348da44_1577687324.png?output-format=webp",
  },

  {
    id: 7,
    time: "30min",
    title: "Rh Chicken Point",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/44c142f0828afa468be7802cac20f057_1611319176.png?output-format=webp",
  },

  {
    id: 8,
    time: "44min",
    title: "Crystal",
    cover:
      "https://b.zmtcdn.com/data/brand_creatives/logos/2882e52b86306a8b34f27f744d581221_1577680177.png?output-format=webp",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PreArrow />,
};

function TopBrands() {
  return (
    <div className="bg-color">
      <div className="Top-Div max-width">
        <div className="name-title coll-title">Top brands for you</div>

        <Slider {...settings}>
          {BrandList.map((brand) => {
            return (
              <div className="top-brands-cover">
                <div className="lex">
                  <img
                    src={brand.cover}
                    alt={brand.title}
                    className="Brands-img"
                  />
                </div>

                <div className="brand-title">
                  <div className="title-b">{brand.title}</div>
                  <div className="time-b">{brand.time}</div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default TopBrands;

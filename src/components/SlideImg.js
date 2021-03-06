import React, { useState } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useParams } from "react-router-dom";
import { faHourglassEmpty } from "@fortawesome/free-solid-svg-icons";

const SlideImg = (props) => {
  const [mouseOver, setMouseOver] = useState(false);
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onMouseLeave={mouseLeave}
        onMouseOver={mouseHover}
        className={className}
        style={{ ...style, display: "block", marginRight: "25px", opacity: 1 }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        onMouseOver={mouseHover}
        className={className}
        style={{
          ...style,
          display: "block",
          marginLeft: "25px",
          zIndex: 1,
          opacity: 1,
        }}
        onClick={onClick}
      />
    );
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: mouseOver,
    appendDots: (dots) => (
      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: "5px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom",
  };

  const arrows = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { listImg, width, height } = props;

  const mouseHover = () => {
    setMouseOver(true);
  };
  const mouseLeave = () => {
    setMouseOver(false);
  };
  return (
    <ImgBox width={width} height={height}>
      {mouseOver ? (
        <SliderImg {...settings} {...arrows}>
          {listImg.map((item, idx) => {
            return (
              <div onMouseLeave={mouseLeave} onMouseOver={mouseHover} key={idx}>
                <img src={item} alt="?????????"/>
              </div>
            );
          })}
        </SliderImg>
      ) : (
        <SliderImg {...settings}>
          {listImg.map((item, idx) => {
            return (
              <img
              key = {idx}
                onMouseLeave={mouseLeave}
                onMouseOver={mouseHover}
                src={item}
                alt="?????????"
              />
            );
          })}
        </SliderImg>
      )}
    </ImgBox>
  );
};

export default SlideImg;

const ImgBox = styled.div`
  width: ${(props)=>props.width};
  /* border: 1px solid; */
  img {
    border-radius: 12px;
    width: 100%;
    height:${(props)=>props.height};
    /* width: 260px;
    height: 260px; */
  }
`;

const SliderImg = styled(Slider)`
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    margin: auto 0;
    padding: 0;
  }

  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 6px;
    padding: 0;
  }

  .dots_custom li button {
    border: none;
    background: gray;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 6px;
    width: 6px;
    border-radius: 100%;
    padding: 0;
    display: hidden;
  }

  .dots_custom li.slick-active button {
    background-color: #fff;
  }
`;

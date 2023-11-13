import { useCallback, useRef } from "react";

import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { NextArrowButton, PrevArrowButton } from "@/components/atoms/button";
import { ArticleDataProps } from "@/types";

import { ArticleItem } from "../articleItem";

export const ArticleCarousel = ({ data }: ArticleDataProps) => {
  const maxSlidesToShow = Math.min(data.length, 4);

  const SliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: maxSlidesToShow,
    slidesToScroll: 1,
    arrows: false,

    //반응형
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slickRef = useRef<Slider | null>(null);

  const prev = useCallback(() => slickRef.current?.slickPrev(), []);
  const next = useCallback(() => slickRef.current?.slickNext(), []);

  return (
    <CategorySlideWrapper>
      {" "}
      <StyledSlider
        {...SliderSetting}
        ref={slickRef}
      >
        {data.map((item, idx) => (
          <SlideItemWrapper key={idx}>
            <ArticleItem
              title={item.title}
              type={item.type}
              date={item.date}
              likeCount={item.likeCount}
              quotCount={item.quotCount}
            />
          </SlideItemWrapper>
        ))}
      </StyledSlider>
      <ArrowContainer>
        <PrevArrowButton onClick={prev} />
        <NextArrowButton onClick={next} />
      </ArrowContainer>
    </CategorySlideWrapper>
  );
};

const StyledSlider = styled(Slider)`
  width: 1080px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 24px;

  @media (max-width: 1080px) {
    width: 75%;
  }
`;

const SlideItemWrapper = styled.div`
  display: flex;
`;

const ArrowContainer = styled.div`
  display: flex;
  width: 72%;
  /* width: 1200px; */
  justify-content: space-between;
  position: absolute;
  top: 40%;
  /* left: 12.43%; */
  left: 14%;

  margin: 0 auto;
  @media (max-width: 1440px) {
    width: 80%;
    left: 10%;
  }
`;

const CategorySlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  position: relative;
  justify-content: center;
`;

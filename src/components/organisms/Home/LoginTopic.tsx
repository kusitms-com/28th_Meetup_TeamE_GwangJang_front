import Slider from "react-slick";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { CategoryFilter } from "@/components/molecules/categoryFilter";
import { SlideItem } from "@/components/molecules/slideItem";
import { filteredDataSelector } from "@/recoil/atoms";

export const LoginTopic = () => {
  const filteredData = useRecoilValue(filteredDataSelector);

  const maxSlidesToShow = Math.min(filteredData.length, 4);

  const SliderSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: maxSlidesToShow,
  };

  return (
    <>
      <CategorySlideWrapper>
        <CategoryFilter />
        <StyledSlider {...SliderSetting}>
          {filteredData.map((data, idx) => (
            <SlideItemWrapper key={idx}>
              <SlideItem
                title={data.title}
                type={data.type}
                date={data.date}
              />
            </SlideItemWrapper>
          ))}
        </StyledSlider>
      </CategorySlideWrapper>
    </>
  );
};

const StyledSlider = styled(Slider)`
  width: 1080px;
  display: flex;
  margin: 0 auto;
  gap: 24px;
  background-color: pink;
`;

const SlideItemWrapper = styled.div`
  display: flex;
`;

const CategorySlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

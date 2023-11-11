import { SlideWrapper } from "./style";

export const SlideItem = () => {
  return (
    <SlideWrapper>
      <div className="slide-container">
        <div className="slide-image">
          <img
            // src={}
            alt="썸네일"
          />
        </div>
        <div className="slide-text">
          <div className="text-type">type</div>
          <div className="text-title">title</div>
          <div className="text-date">date</div>
        </div>
      </div>
    </SlideWrapper>
  );
};

import temp from "@/assets/main_logo.svg";
import { SlideItemProps } from "@/types";

import { SlideWrapper } from "./style";

export const SlideItem = ({ title, type, date }: SlideItemProps) => {
  return (
    <SlideWrapper>
      <div className="slide-container">
        <div className="slide-image">
          <img
            src={temp}
            alt="썸네일"
          />
        </div>
        <div className="slide-text">
          <div className="text-type">{type}</div>
          <div className="text-title">{title}</div>
          <div className="text-date">{date}</div>
        </div>
      </div>
    </SlideWrapper>
  );
};

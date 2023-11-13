import temp from "@/assets/main_logo.svg";
import { LikeBorderButton, QuotBorderButton } from "@/components/atoms/button";
import { ArticleItemProps } from "@/types";

import { SlideWrapper } from "./style";

export const ArticleItem = ({ title, type, date, likeCount, quotCount }: ArticleItemProps) => {
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
          <div className="last-text">
            <div className="text-date">{date}</div>
            <div className="button-wrapper">
              <LikeBorderButton likeCount={likeCount} />
              <QuotBorderButton likeCount={quotCount} />
            </div>
          </div>
        </div>
      </div>
    </SlideWrapper>
  );
};

import { useState } from "react";

import { TopicTag } from "@/components/atoms/tag";
import { SubjectProps } from "@/types";

import { TopicContainer } from "./style";

export const TopicBox = ({ title, imgUrl, subscribeCount, category }: SubjectProps) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${imgUrl})`,
    backgroundSize: "cover",
  };

  const [isHover, setIsHover] = useState(false);

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <TopicContainer
      style={containerStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {isHover ? (
        <img
          className="img-hover"
          src={imgUrl}
          alt=""
        />
      ) : (
        <div className="topic-wrapper">
          {" "}
          <div>
            {/* 아래 색깔 추후 데이터 카테고리에 맞게 지정 */}
            <TopicTag
              color="red"
              category={category}
            />
            <div className="topic-title">{title}</div>
          </div>
          <div className="subscribe">
            <p>{subscribeCount}명</p>이 구독하고 있어요
          </div>
        </div>
      )}
    </TopicContainer>
  );
};

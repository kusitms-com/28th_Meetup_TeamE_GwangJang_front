import { useState } from "react";

import { TopicTag } from "@/components/atoms/tag";

import { TopicContainer } from "./style";

export const TopicBox = () => {
  const imageUrl = "https://gwanghwamun.seoul.go.kr/resources/client2022/images/bg_info_mo.jpg";

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${imageUrl})`,
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
          src={imageUrl}
          alt=""
        />
      ) : (
        <div className="topic-wrapper">
          {" "}
          <div>
            <TopicTag />
            <div className="topic-title">주 69시간 근로시간 제도 개편</div>
          </div>
          <div className="subscribe">
            <p>80명</p>이 구독하고 있어요
          </div>
        </div>
      )}
    </TopicContainer>
  );
};

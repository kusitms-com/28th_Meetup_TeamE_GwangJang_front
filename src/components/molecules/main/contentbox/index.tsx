import { useState } from "react";

import nextIcon from "@/assets/nextIcon.svg";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { ContentDataProps } from "@/types";

import { ContentContainer, HoverContent } from "./style";

export const ContentBox = ({ data }: { data: ContentDataProps }) => {
  const imageUrl = "https://gwanghwamun.seoul.go.kr/resources/client2022/images/bg_info_mo.jpg";

  const containerStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(34, 34, 34, 0.2) 0%, #222 79.69%),url(${imageUrl})`,
    backgroundSize: "cover", // 이미지를 컨테이너에 맞게 조절합니다.
    boxShadow: "0px 15px 34px 0px rgba(207, 207, 207, 0.1)",
  };

  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      style={{ position: "relative" }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <HoverContent $hover={hover}>
        <div className="article-text">기사내용기사내용기사내용</div>
        <div className="article-img">
          <img
            src={nextIcon}
            alt=""
          />
        </div>
      </HoverContent>

      <ContentContainer
        style={containerStyle}
        $hover={hover}
      >
        <div className="tag-box">
          <div>
            <TopicTag color="red" />
          </div>
          <div>
            <KeywordTag color="red" />
          </div>
        </div>
        <div className="text-box">
          <p>{data.type}</p>
          <div className="content-title">{data.title}</div>
        </div>
      </ContentContainer>
    </div>
  );
};

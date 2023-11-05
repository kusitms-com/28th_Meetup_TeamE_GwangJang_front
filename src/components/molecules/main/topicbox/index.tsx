import { TopicTag } from "@/components/atoms/tag";

import { TopicContainer } from "./style";

export const TopicBox = () => {
  const imageUrl = "https://gwanghwamun.seoul.go.kr/resources/client2022/images/bg_info_mo.jpg";

  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(52, 52, 52, 0.8), rgba(52, 52, 52, 0.8)),url(${imageUrl})`,
    backgroundSize: "cover", // 이미지를 컨테이너에 맞게 조절합니다.
  };

  return (
    <TopicContainer style={containerStyle}>
      <div>
        <TopicTag />
        <div className="topic-title">주 69시간 근로시간 제도 개편</div>
      </div>
      <div className="subscribe">
        <p>80명</p>이 구독하고 있어요
      </div>
    </TopicContainer>
  );
};

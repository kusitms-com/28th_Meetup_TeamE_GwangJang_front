import { KeywordTag, TopicTag } from "@/components/atoms/tag";

import { ContentContainer } from "./style";

export const ContentBox = () => {
  const imageUrl = "https://gwanghwamun.seoul.go.kr/resources/client2022/images/bg_info_mo.jpg";

  const containerStyle = {
    backgroundImage: `linear-gradient(180deg, rgba(34, 34, 34, 0.2) 0%, #222 79.69%),url(${imageUrl})`,
    backgroundSize: "cover", // 이미지를 컨테이너에 맞게 조절합니다.
    boxShadow: "0px 15px 34px 0px rgba(207, 207, 207, 0.1)",
  };

  return (
    <ContentContainer style={containerStyle}>
      <div className="tag-box">
        <div>
          <TopicTag color="red" />
        </div>
        <div>
          <KeywordTag color="red" />
        </div>
      </div>
      <div className="text-box">
        <p>기사</p>
        <div className="content-title">
          직접고용 위해 설립됐는데 노조탈퇴 강요…檢 SPC계열사 압수수색
        </div>
      </div>
    </ContentContainer>
  );
};

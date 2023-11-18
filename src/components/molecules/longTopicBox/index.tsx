import bg from "@/assets/discussedTopic/topic1_bg.svg";
import { TopicTag } from "@/components/atoms/tag";
import { ToptopicProps } from "@/types";

import { Container, Top, Bottom, Middle } from "./style";

export const SimilarTopicBox = () => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${bg})`,
    backgroundSize: "cover",
  };
  return (
    <Container
      style={containerStyle}
      $string="similar"
    >
      <Top>
        <div className="title">일회용품 어쩌고</div>
        <TopicTag category="환경" />
      </Top>
      <Bottom>
        <p>80명</p>이 구독하고 있어요
      </Bottom>
    </Container>
  );
};

export const TopTopicBox = ({ data }: { data: ToptopicProps }) => {
  const containerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(${bg})`,
    backgroundSize: "cover",
  };
  return (
    <Container
      style={containerStyle}
      $string="top"
    >
      <Middle>
        <div className="title">{data.subject}</div>
        <TopicTag category={data.area} />
      </Middle>
    </Container>
  );
};

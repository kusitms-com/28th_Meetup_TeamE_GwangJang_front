import bg from "@/assets/discussedTopic/topic1_bg.svg";
import { TopicTag } from "@/components/atoms/tag";
import { SimilarTopicProps } from "@/types";

import { Container, Top, Bottom, Middle } from "./style";

export const SimilarTopicBox = ({ data }: { data: SimilarTopicProps }) => {
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
        <div className="title">{data.topic}</div>
        <TopicTag category={data.area} />
      </Top>
      <Bottom>
        <p>{data.subscibeCount}명</p>이 구독하고 있어요
      </Bottom>
    </Container>
  );
};

export const TopTopicBox = () => {
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
        <div className="title">교권침해 이태원참사</div>
        <TopicTag category="환경" />
      </Middle>
    </Container>
  );
};

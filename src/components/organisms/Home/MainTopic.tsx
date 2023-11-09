import styled from "styled-components";

import { SeeMore } from "@/components/atoms/more";
import { Title } from "@/components/atoms/title";
import { TopicBox } from "@/components/molecules/main/topicbox";
import { Inner } from "@/style/global";

export const MainTopic = () => {
  const title = "가장 인기있는\n주제";

  return (
    <Inner>
      <MainTopicContainer>
        <Title title={title} />
        <TopicWrapper>
          <TopicBox />
          <TopicBox />
          <TopicBox />
          <TopicBox />
        </TopicWrapper>
        <SeeMore text="관심 콘텐츠 더보기" />
      </MainTopicContainer>
    </Inner>
  );
};

const MainTopicContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TopicWrapper = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 1200px) {
    flex-wrap: wrap;

    & > div {
      flex: 0 0 calc(40% - 12px);
      margin-bottom: 12px;
    }
  }

  @media (max-width: 600px) {
    flex-wrap: wrap;

    & > div {
      /* flex: 0 0 calc(100% - 12px); */
      flex: 0 0 100%;
      margin-bottom: 12px;
    }
  }
`;

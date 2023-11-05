import styled from "styled-components";

import { SeeMore } from "@/components/atoms/more";
import { Title } from "@/components/atoms/title";
import { TopicBox } from "@/components/molecules/main/topicbox";
import { Inner } from "@/style/global";

export const MainTopic = () => {
  return (
    <Inner>
      <MainTopicContainer>
        <Title title="가장 인기있는 주제" />
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
`;

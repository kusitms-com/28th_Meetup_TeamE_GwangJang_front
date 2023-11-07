import styled from "styled-components";

import Topic from "@/components/molecules/discussedTopic";
import { topicData } from "@/dummy/topicData";
// import { Inner } from "@/style/global";

const DiscussedTopics = () => {
  return (
    <DiscussedTopicContainer>
      {topicData.map((data, idx) => (
        <Topic
          title={data.title}
          subTitles={data.subTitles}
          idx={idx}
          key={idx}
        />
      ))}
    </DiscussedTopicContainer>
  );
};

export default DiscussedTopics;

const DiscussedTopicContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 1200px) {
    flex-flow: wrap;
    display: flex;
    width: 800px;
    zoom: 1.2;
    justify-content: space-evenly;
    gap: 20px;
  }
  @media (max-width: 880px) {
    width: 600px;
  }
  @media (max-width: 720px) {
    width: 400px;
  }
  @media (max-width: 410px) {
    width: 300px;
  }
`;

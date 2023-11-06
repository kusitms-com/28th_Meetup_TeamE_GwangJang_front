import { useState } from "react";

import donut from "@/assets/discussedTopic/donut_topic.svg";
import background1 from "@/assets/discussedTopic/topic1_bg.svg";
import plus from "@/assets/discussedTopic/topic_plus.svg";

import { Container, Hover, Main, Title } from "./style";
const Topic = () => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <Container
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      {hover && (
        <Hover>
          <div className="text">일자리 노동</div>
        </Hover>
      )}
      <Main>
        {" "}
        {/*//hover props로 넘겨주고, 그게 true면 블러 처리 */}
        <Title>
          <div className="text">일자리 노동</div>
          <img
            className="donut"
            src={donut}
            alt="_"
          />
          <img
            className="plus"
            src={plus}
            alt="+"
          />
        </Title>
        <img
          className="topicBackground"
          src={background1}
          alt="배경1"
        />
      </Main>
    </Container>
  );
};

export default Topic;

import { useState } from "react";

import { SubscribeButton } from "@/components/atoms/button";
import OneLine from "@/components/atoms/oneLine";
import { TopicTag } from "@/components/atoms/tag";
import { DetailTitleProps } from "@/types";

import { Container, Top, Title } from "./style";
const DetailTitle = ({ data }: { data: DetailTitleProps }) => {
  const [onOff, setOnOff] = useState<boolean>(false);
  const subscribeOn = () => {
    setOnOff(!onOff);
    // 구독 Api 발송!
  };
  return (
    <Container>
      <Top>
        <div className="topic">
          <TopicTag category={data.category} />
          <Title>{data.title}</Title>
        </div>
        <div className="subscribe">
          <div className="subscribeText">
            <p>{data.count}</p>명이 구독하고 있어요
          </div>
          <SubscribeButton
            onOff={onOff}
            onClick={subscribeOn}
          />
        </div>
      </Top>
      <OneLine text={data.oneline} />
    </Container>
  );
};

export default DetailTitle;

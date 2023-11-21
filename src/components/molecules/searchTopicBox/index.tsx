import { TopicTag } from "@/components/atoms/tag";
import { SearchTopicProps } from "@/types";

import { Container } from "./style";

const SearchTopicBox = ({ data }: { data: SearchTopicProps }) => {
  return (
    <Container>
      <div className="textBox">
        <TopicTag category={data.category} />
        <div className="topic">{data.title}</div>
        <div className="oneLine">{data.oneline}</div>
      </div>
      <img
        height={154}
        src={data.img}
        alt="이미지"
      />
    </Container>
  );
};

export default SearchTopicBox;

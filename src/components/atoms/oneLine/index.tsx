import { Container } from "./style";

const OneLine = ({ text }: { text: string }) => {
  return (
    <Container>
      <div className="title">한줄소개</div>
      <p className="text">{text}</p>
    </Container>
  );
};

export default OneLine;

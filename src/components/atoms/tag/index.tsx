import { Keyword, Tag } from "./style";

export const TopicTag = ({ color, category }: { color: string; category: string }) => {
  if (category == "일자리·노동") {
    color = "#0084FF";
  } else if (category == "환경") {
    color = "#1AE276";
  } else if (category == "교육") {
    color = "#F90";
  } else {
    color = "#75F";
  }

  return <Tag background={color}>{category}</Tag>;
};

export const KeywordTag = ({ color, category }: { color: string; category: string }) => {
  if (category == "일자리·노동") {
    color = "#0084FF";
  } else if (category == "환경") {
    color = "#1AE276";
  } else if (category == "교육") {
    color = "#F90";
  } else if (category == "주거") {
    color = "#75F";
  }
  return <Keyword color={color}>{category}</Keyword>;
};

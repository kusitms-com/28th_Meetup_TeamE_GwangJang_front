import { Keyword, Tag } from "./style";

export const TopicTag = ({ color }: { color: string }) => {
  return <Tag background={color}>일자리 · 노동</Tag>;
};

export const KeywordTag = ({ color }: { color: string }) => {
  return <Keyword color={color}>일자리 · 노동</Keyword>;
};

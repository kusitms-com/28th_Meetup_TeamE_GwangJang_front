import { Keyword, Tag } from "./style";

export const TopicTag = ({ category }: { category: string }) => {
  return <Tag $category={category}>{category}</Tag>;
};

export const KeywordTag = ({ category }: { category: string }) => {
  return <Keyword $category={category}>{category}</Keyword>;
};

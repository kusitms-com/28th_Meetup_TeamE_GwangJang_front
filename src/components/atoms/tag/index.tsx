import { Keyword, Tag } from "./style";

export const TopicTag = ({ category }: { category: string | undefined }) => {
  return <Tag $category={category}>{category}</Tag>;
};

export const KeywordTag = ({ category, children }: { category: string; children: string }) => {
  return <Keyword $category={category}>{children}</Keyword>;
};

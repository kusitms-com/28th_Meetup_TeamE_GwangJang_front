import styled from "styled-components";

import { MySlideItem } from "@/components/molecules/mySlideItem";
import { articleData } from "@/dummy/articleData";

export const MyContent = () => {
  return (
    <MyContentWrapper>
      {articleData.map((item, idx) => (
        <MySlideItem
          key={idx}
          data={item}
        />
      ))}
    </MyContentWrapper>
  );
};

export const MyContentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  gap: 24px;
  width: 712px;
`;

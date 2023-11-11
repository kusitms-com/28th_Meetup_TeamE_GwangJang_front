import { useRecoilValue } from "recoil";

import styled from "styled-components";

import { CategoryFilter } from "@/components/molecules/categoryFilter";
import { SlideItem } from "@/components/molecules/slideItem";
import { filteredDataSelector } from "@/recoil/atoms";

export const LoginTopic = () => {
  const filteredData = useRecoilValue(filteredDataSelector);

  return (
    <>
      <div>
        <CategoryFilter />
      </div>
      <SlideContainer>
        {filteredData.map((data, idx) => (
          <SlideItemWrapper key={idx}>
            <SlideItem
              title={data.title}
              type={data.type}
              date={data.date}
            />
          </SlideItemWrapper>
        ))}
      </SlideContainer>
    </>
  );
};

const SlideContainer = styled.div`
  display: flex;
  gap: 24px;
  background-color: pink;
`;

const SlideItemWrapper = styled.div`
  display: flex;
`;

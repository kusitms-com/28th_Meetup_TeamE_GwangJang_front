import styled from "styled-components";

import { CategoryFilter } from "@/components/molecules/categoryFilter";
import { SlideItem } from "@/components/molecules/slideItem";
import { mySubjectData } from "@/dummy/mySubjectData";

export const LoginTopic = ({ selectedKeyword }: { selectedKeyword: string }) => {
  console.log(selectedKeyword);

  //선택된 카테고리(키워드)에 따라 데이터 뽑기
  // const filteredData = mySubjectData.find((item) => item.keyword === selectedKeyword);
  console.log(mySubjectData);

  //   if (!filteredData) {
  //     console.error(`No data found for the keyword: ${selectedKeyword}`);
  //     return null;
  //   }

  return (
    <>
      <div>
        <CategoryFilter />
      </div>
      {mySubjectData.data.map((item, idx) => (
        <SlideContainer key={idx}>
          {/* {item.category == selectedKeyword && {
            }} */}
          {item.semiData.map((data, idx) => (
            <SlideItemWrapper key={idx}>
              <SlideItem
                title={data.title}
                type={data.type}
                date={data.date}
              />
            </SlideItemWrapper>
          ))}
        </SlideContainer>
      ))}
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

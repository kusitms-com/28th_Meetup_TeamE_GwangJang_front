import styled from "styled-components";

import { SeeMore } from "@/components/atoms/more";
import { Title } from "@/components/atoms/title";
import { ContentBox } from "@/components/molecules/main/contentbox";
import { Inner } from "@/style/global";

export const MainContent = () => {
  return (
    <Inner>
      <MainContentContainer>
        <Title title="지금 사람들이 가장 많이 본 콘텐츠" />
        <ContentWrapper>
          <ContentBox />
          <div className="content-grid">
            <ContentBox />
            <ContentBox />
            <ContentBox />
            <ContentBox />
          </div>
        </ContentWrapper>
        <SeeMore text="더보기" />
      </MainContentContainer>
    </Inner>
  );
};

const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ContentWrapper = styled.div`
  display: flex;
  gap: 24px;

  .content-grid {
    display: grid;
    height: 504px;
    grid-template-columns: repeat(2, 2fr);
    gap: 24px;
  }
`;

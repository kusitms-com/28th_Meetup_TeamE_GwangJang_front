import styled from "styled-components";

import { SeeMore } from "@/components/atoms/more";
import { Title } from "@/components/atoms/title";
import { ContentBox } from "@/components/molecules/main/contentbox";
import { contentData } from "@/dummy/ContentData";
import { Inner } from "@/style/global";

export const MainContent = () => {
  const firstData = contentData[0];
  const title = "지금 사람들이\n가장 많이 본 콘텐츠";

  return (
    <Inner>
      <MainContentContainer>
        <Title title={title} />
        <ContentWrapper>
          <ContentBox
            key={0}
            data={firstData}
          />
          <div className="content-grid">
            {contentData.slice(1).map((data, idx) => (
              <ContentBox
                key={idx}
                data={data}
              />
            ))}
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
  font-size: var(--text_h5);

  @media (max-width: 880px) {
    flex-wrap: wrap;
  }

  .content-grid {
    display: grid;
    height: 504px;
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    /* font-size: var(--text_b1); */

    @media (max-width: 1080px) {
      display: flex;
    }

    @media (max-width: 880px) {
      display: flex;
    }
    @media (max-width: 564px) {
      display: flex;
    }
  }
`;

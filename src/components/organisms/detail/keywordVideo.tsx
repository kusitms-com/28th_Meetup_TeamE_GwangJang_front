import styled from "styled-components";

import { SubTitle } from "@/components/atoms/title";
import { ArticleCarousel } from "@/components/molecules/carousel/ArticleCarousel";
import { videoData } from "@/dummy/VideoData";

export const KeywordVideo = () => {
  return (
    <Background>
      <div className="inner">
        <SubTitle title="관련 영상으로 더 알아보기" />
      </div>
      <div>
        <ArticleCarousel data={videoData} />
      </div>
    </Background>
  );
};

const Background = styled.div`
  background: var(--Gray2_100);
  display: flex;
  flex-direction: column;
  padding: 50px 0px;
  gap: 20px;

  .inner {
    width: 1080px;
    margin: 0 auto;
    display: flex;
    gap: 16px;
    flex-direction: column;

    .keyword-text {
      display: flex;
      color: var(--Gray10_900, #212121);
      font-size: var(--text_h4);
      font-weight: 700;
      line-height: 42px;
      letter-spacing: -0.48px;

      p {
        color: inherit;
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        letter-spacing: inherit;
        box-shadow: inset 0 -12px 0 #1ae276;
      }
    }

    @media (max-width: 1080px) {
      display: flex;
      width: 770px;
      align-items: center;
    }
    @media (max-width: 880px) {
      width: 600px;
      align-items: center;
    }
    @media (max-width: 564px) {
      width: 350px;
      align-items: center;
    }
  }
`;

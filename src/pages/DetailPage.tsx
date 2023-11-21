import { useRecoilValue } from "recoil";
import styled from "styled-components";

import { BubbleGraph } from "@/components/organisms/Details/BubbleGraph";
import { CommunityPreview } from "@/components/organisms/Details/CommunityPreview";
import { DetailArticleTitle } from "@/components/organisms/Details/DetailArticleTitle";
import { KeywordArticle } from "@/components/organisms/Details/KeywordArticle";
import { LineGraph } from "@/components/organisms/Details/LineGraph";
import SimilarTopic from "@/components/organisms/Details/SimilarTopic";
import { KeywordVideo } from "@/components/organisms/Details/keywordVideo";
import { QuotModal } from "@/components/organisms/Modal/QuotModal";
import { similartopicData } from "@/dummy/similartopicData";
import { ShowModalState } from "@/recoil/atoms";

const DetailPage = () => {
  //모달 show 여부
  const Show = useRecoilValue(ShowModalState);

  return (
    <>
      <DetailArticleTitle />
      <BubbleGraph />
      <LineGraph />
      <KeywordArticle />
      <KeywordVideo />
      <Bottom>
        {window.innerWidth > 800 ? (
          <>
            <CommunityPreview />
            <SimilarTopic data={similartopicData} />
          </>
        ) : (
          <>
            <SimilarTopic data={similartopicData} />
            <CommunityPreview />
          </>
        )}
      </Bottom>
      {Show ? <QuotModal /> : ""}
    </>
  );
};

export default DetailPage;

const Bottom = styled.div`
  background-color: var(--Gray2_100);
  padding-top: 45px;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 24px;
  padding-bottom: 66px;

  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
  }
`;

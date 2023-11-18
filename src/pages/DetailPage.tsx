import styled from "styled-components";

import { BubbleGraph } from "@/components/organisms/Details/BubbleGraph";
import { DetailArticleTitle } from "@/components/organisms/Details/DetailArticleTitle";
import { KeywordArticle } from "@/components/organisms/Details/KeywordArticle";
import { LineGraph } from "@/components/organisms/Details/LineGraph";
import SimilarTopic from "@/components/organisms/Details/SimilarTopic";
import { KeywordVideo } from "@/components/organisms/Details/keywordVideo";
import { CommunityPreview } from "@/components/organisms/SubjectDetail/CommunityPreview";
import { similartopicData } from "@/dummy/similartopicData";

const DetailPage = () => {
  return (
    <>
      <DetailArticleTitle />
      <BubbleGraph />
      <LineGraph />
      <KeywordArticle />
      <KeywordVideo />
      <Bottom>
        <CommunityPreview />
        <SimilarTopic data={similartopicData} />
      </Bottom>
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
`;

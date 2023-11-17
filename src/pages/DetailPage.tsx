import { BubbleGraph } from "@/components/organisms/Detail/BubbleGraph";
import { DetailArticleTitle } from "@/components/organisms/Detail/DetailArticleTitle";
import { KeywordArticle } from "@/components/organisms/Detail/KeywordArticle";
import { LineGraph } from "@/components/organisms/Detail/LineGraph";
import { KeywordVideo } from "@/components/organisms/Detail/keywordVideo";
import { CommunityPreview } from "@/components/organisms/SubjectDetail/CommunityPreview";

const DetailPage = () => {
  return (
    <>
      <DetailArticleTitle />
      <BubbleGraph />
      <LineGraph />
      <KeywordArticle />
      <KeywordVideo />
      <CommunityPreview />
    </>
  );
};

export default DetailPage;

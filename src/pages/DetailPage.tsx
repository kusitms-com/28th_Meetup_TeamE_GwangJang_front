import BubbleGraph from "@/components/organisms/detail/BubbleGraph";
import DetailArticleTitle from "@/components/organisms/detail/DetailArticleTitle";
import { KeywordArticle } from "@/components/organisms/detail/KeywordArticle";
import { KeywordVideo } from "@/components/organisms/detail/keywordVideo";
import LineGraph from "@/components/organisms/detail/LineGraph";
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

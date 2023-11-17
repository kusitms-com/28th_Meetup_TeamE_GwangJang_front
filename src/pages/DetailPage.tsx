import { BubbleGraph } from "@/components/organisms/Details/BubbleGraph";
import { DetailArticleTitle } from "@/components/organisms/Details/DetailArticleTitle";
import { KeywordArticle } from "@/components/organisms/Details/KeywordArticle";
import { LineGraph } from "@/components/organisms/Details/LineGraph";
import { KeywordVideo } from "@/components/organisms/Details/keywordVideo";
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

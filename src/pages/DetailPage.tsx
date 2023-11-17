import BubbleGraph from "@/components/organisms/Detail/BubbleGraph";
import DetailArticleTitle from "@/components/organisms/Detail/DetailArticleTitle";
import LineGraph from "@/components/organisms/Detail/LineGraph";

const DetailPage = () => {
  return (
    <>
      <DetailArticleTitle />
      <BubbleGraph />
      <LineGraph />
    </>
  );
};

export default DetailPage;

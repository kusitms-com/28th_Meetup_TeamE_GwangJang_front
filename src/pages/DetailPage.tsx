import BubbleGraph from "@/components/organisms/Detail/BubbleGraph";
import DetailArticleTtile from "@/components/organisms/Detail/DetailArticleTtile";
import LineGraph from "@/components/organisms/Detail/LineGraph";

const DetailPage = () => {
  return (
    <>
      <DetailArticleTtile />
      <BubbleGraph />
      <LineGraph />
    </>
  );
};

export default DetailPage;

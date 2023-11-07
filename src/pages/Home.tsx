import BubbleChart from "@/components/organisms/Home/BubbleChart";
import { MainCommunity } from "@/components/organisms/Home/MainCommunity";
import { MainTopic } from "@/components/organisms/Home/MainTopic";

const Home = () => {
  return (
    <>
      <BubbleChart />
      {/* 여러가지 메인에 들어갈 organism들 */}
      <MainTopic />
      <MainCommunity />
    </>
  );
};

export default Home;

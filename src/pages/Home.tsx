import BubbleChart from "@/components/organisms/Home/BubbleChart";
import { MainTopic } from "@/components/organisms/Home/MainTopic";

const Home = () => {
  return (
    <>
      <BubbleChart />
      {/* 여러가지 메인에 들어갈 organism들 */}
      <MainTopic />
    </>
  );
};

export default Home;

import BubbleChart from "@/components/organisms/Home/BubbleChart";
import DiscussedTopics from "@/components/organisms/Home/DiscussedTopics";

const Home = () => {
  return (
    <>
      <BubbleChart />
      {/* 여러가지 메인에 들어갈 organism들 */}
      <DiscussedTopics />
    </>
  );
};

export default Home;

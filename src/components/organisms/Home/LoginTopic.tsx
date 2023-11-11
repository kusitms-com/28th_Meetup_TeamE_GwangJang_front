import { mySubjectData } from "@/dummy/mySubjectData";

export const LoginTopic = ({ selectedKeyword }: { selectedKeyword: string }) => {
  console.log(selectedKeyword);

  //선택된 카테고리(키워드)에 따라 데이터 뽑기
  // const filteredData = mySubjectData.find((item) => item.keyword === selectedKeyword);
  console.log(mySubjectData);

  //   if (!filteredData) {
  //     console.error(`No data found for the keyword: ${selectedKeyword}`);
  //     return null;
  //   }
  return (
    <>
      {mySubjectData.data.map((item, idx) => (
        <div>
          {/* {item.category == selectedKeyword && {
            }} */}
          {item.semiData.map((data, idx) => (
            <>{data.type}</>
          ))}
        </div>
      ))}
    </>
  );
};

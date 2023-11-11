import { SlideWrapper } from "./style";

export const SlideItem = ({ semiData, keyword }: MySubjectProps) => {
  // console.log("keyword:", keyword);
  console.log("keyword:", keyword);
  console.log(semiData);

  return (
    <SlideWrapper>
      {/* {semiData.map((item, idx) => (
        <div
          className="slide-container"
          key={idx}
        >
          <div className="slide-image">
            <img
              src={item.imgUrl}
              alt="썸네일"
            />
          </div>
          <div className="slide-text">
            <div className="text-type">{item.type}</div>
            <div className="text-title">{item.title}</div>
            <div className="text-date">{item.date}</div>
          </div>
        </div>
      ))} */}
    </SlideWrapper>
  );
};

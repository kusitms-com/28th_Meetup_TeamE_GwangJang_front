import { atom, selector } from "recoil";

import { mySubjectData } from "@/dummy/mySubjectData";

//선택된 카테고리를 저장할 atom
export const selectedCategoryState = atom({
  key: "selectedCategoryState",
  default: mySubjectData.category[0],
});

//카테고리 기반 데이터 필터링하는 selector
export const filteredDataSelector = selector({
  key: "filteredDataSelector",
  get: ({ get }) => {
    const selectedCategory = get(selectedCategoryState);
    return (
      mySubjectData.data.find((categoryData) => categoryData.category === selectedCategory)
        ?.semiData || []
    );
  },
});

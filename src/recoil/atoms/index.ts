import { atom, selector } from "recoil";

import { mySubjectData } from "@/dummy/mySubjectData";

export const accessTokenState = atom({
  // accessToken 임시 저장 카카오로그인 후, 추가 정보 기입할 때 가져가는 accesstoken 로컬스토리지에 저장하면 안됨.
  key: "src/atoms/auth.tsx-accessTokenState",
  default: "",
});

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

//마이페이지 탭
export const selectedTabState = atom({
  key: "selectedTabState",
  default: 0,
});

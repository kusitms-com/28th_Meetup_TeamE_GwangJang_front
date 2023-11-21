import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "searchText",
  storage: sessionStorage,
});

export default persistAtom;

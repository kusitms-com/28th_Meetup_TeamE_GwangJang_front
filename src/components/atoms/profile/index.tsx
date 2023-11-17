import temp from "@/assets/react.svg";
import { ProfileProps } from "@/types";

import { LongUserInfo, UserInfo } from "./style";

export const Profile = ({ nickname, profileImg, date }: ProfileProps) => {
  profileImg = temp;

  return (
    <UserInfo>
      <img
        src={profileImg}
        alt="O"
      />
      <div>
        <p className="user-nickname">{nickname}</p>
        <p className="content-date">{date}</p>
      </div>{" "}
    </UserInfo>
  );
};

export const LongProfile = ({ nickname, profileImg, date }: ProfileProps) => {
  profileImg = temp;

  return (
    <LongUserInfo>
      <img
        src={profileImg}
        alt="O"
      />
      <p className="user-nickname">{nickname}</p>
      <p className="content-date">{date}</p>
    </LongUserInfo>
  );
};

import { ChangeEvent, useState } from "react";

import { useRecoilValue } from "recoil";

import { BigProfile } from "@/components/atoms/profile";
import { KeywordTag, TopicTag } from "@/components/atoms/tag";
import { modalState } from "@/recoil/atoms";
import { ArticleItemProps } from "@/types";

import { PostingModalContainer } from "./style";

export const PostingModal = () => {
  const [writeText, setWriteText] = useState("");
  const [textLen, setTextLen] = useState(0);

  const [uploadBtn, setUploadBtn] = useState(true);

  //데이터 받아오기
  const modalData = useRecoilValue<ArticleItemProps | null>(modalState);
  console.log(modalData);

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setWriteText(e.currentTarget.value);
    setTextLen(e.currentTarget.value.length);

    if (e.currentTarget.value == "") {
      setUploadBtn(true);
    } else {
      setUploadBtn(false);
    }
  };

  const onClickButton = () => {
    console.log("글 올리기 ");
  };

  return (
    <PostingModalContainer onClick={(e) => e.stopPropagation()}>
      <div className="first-box">
        <BigProfile
          nickname="chaemin"
          date="2001.04.05"
          profileImg=""
        />
        <button
          onClick={onClickButton}
          disabled={uploadBtn}
          className={uploadBtn ? "" : "abled"}
        >
          글 올리기
        </button>
      </div>
      <div className="second-box">
        <TopicTag category="환경" />
        <KeywordTag category="ㅇㄹㅇㄹ" />
        <KeywordTag category="ㅇㄹㅇㄹ" />
      </div>
      <div className="input-box">
        <textarea
          placeholder="인용 글 내용을 입력해주세요."
          maxLength={500}
          value={writeText}
          onChange={onChange}
        />
        <p>({textLen}/500)</p>
      </div>
      <div className="content-quot">
        <div className="quot-text">
          <p>인용한 콘텐츠</p>
          <div>{modalData?.title}</div>
        </div>
        <img
          src={modalData?.image}
          alt=""
        />
      </div>
    </PostingModalContainer>
  );
};

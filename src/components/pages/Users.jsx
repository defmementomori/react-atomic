import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { useLocation } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
// import { UserContext } from "../../providers/UserProvider";
import React, { useContext } from "react";
import { useRecoilState } from "recoil";
import { userState } from "../../store/userState";
const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/E3kYELmYxek",
    name: `tomi-${val}`,
    email: "defmementomori@gmail.com",
    phone: "090",
    company: {
      name: "テスト"
    },
    website: "https://google.com"
  };
});

export const Users = () => {
  const { state } = useLocation();
  console.log(state);
  // const { userInfo = "", setUserInfo } = useContext(UserContext);
  const [userInfo, setUserInfo] = useRecoilState(userState);
  const onClickSwitch = () => setUserInfo({ isAdmin: !userInfo.isAdmin });
  return (
    <SContainer>
      <h2>ユーザ一覧</h2>
      <SearchInput />
      <SecondaryButton onClick={onClickSwitch}> 切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={users.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;
const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;

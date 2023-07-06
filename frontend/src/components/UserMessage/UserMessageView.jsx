import React from "react";
import { styled } from "styled-components";

const UserMessageView = ({ time, message, image, name, goToChatScreen }) => {
  return (
    <Column onClick={goToChatScreen}>
      <MessageProfile src={image} alt="message-profile"></MessageProfile>
      <MessageWrap>
        <MessageDescWrap>
          <div>
            <span>{name}</span>
            <MessageConversation>{message}</MessageConversation>
          </div>
        </MessageDescWrap>

        <MessageNotifyWrap>
          <MessageNotifyTime>{time}</MessageNotifyTime>
          <MessageNotification>new</MessageNotification>
          <box-icon
            type="solid"
            name="message-rounded"
            color="rgb(128, 113, 252)"
            size="1.5rem"
          >
            new
          </box-icon>
        </MessageNotifyWrap>
      </MessageWrap>
    </Column>
  );
};

const MessageProfile = styled.img`
  padding: 0;
  margin: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  margin-right: 1.5rem;
  object-fit: cover;
`;

const MessageWrap = styled.div`
  min-width: 70%;
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgb(196, 196, 196);
`;

const MessageDescWrap = styled.div`
  height: 100%;
  display: flex;
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-decoration: none;
  }
`;

const MessageConversation = styled.div`
  margin-top: 6px;
  width: 100%;
  font-size: 0.8rem;
  white-space: normal;
  overflow: hidden;
  color: rgb(167 165 165);
`;

const MessageNotifyWrap = styled.div`
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  padding: 0.5rem 0;
`;

const MessageNotifyTime = styled.span`
  width: 100%;
  font-size: 0.7rem;
  color: rgb(167 165 165);
  margin-bottom: 0.5rem;
`;

const MessageNotification = styled.div`
  width: 1.7rem;
  height: 1.5rem;
  line-height: 1.3rem;
  background-color: rgb(116, 78, 219);
  color: white;
  justify-content: center;
  border-radius: 8px;
  display: flex;
  align-items: center;
  text-align: center;
  font-size: 0.7rem;
`;

const Column = styled.button`
  display: flex;
  width: 100%;
  height: 10%;
  justify-content: center;
  margin: 0.5rem 0;
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;
export default UserMessageView;

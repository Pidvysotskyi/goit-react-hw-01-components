import styled from '@emotion/styled';

export const FriendCard = styled.div`
  display: flex;
  align-items: center;
`;
export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    if (isOnline) {
      return 'green';
    } else {
      return 'red';
    }
  }};
  margin-right: 5px;
`;

export const FriendAvatar = styled.img`
  display: inline-block;
  margin-right: 5px;
`;

export const FriendName = styled.p`
  font-size: 20px;
`;

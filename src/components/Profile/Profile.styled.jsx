import styled from '@emotion/styled';

export const ProfileConteiner = styled.div`
  display: flex;
  margin-right: auto;
  margin-left: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 16px;
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
`;

export const ProfileStats = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 0;
  padding: 0;
  width: 100%;
  margin: 0;
  background-color: #e5e5e5;
`;

export const StatsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
`;

export const StatLabel = styled.span`
  font-size: 14px;
  margin-bottom: 5px;
`;
export const StatQuantity = styled.span`
  font-weight: 700;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-top: 0;
  margin-bottom: 30px;
`;
export const Name = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 700;
`;
export const Tag = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
`;
export const Location = styled.p`
  margin-top: 0;
  margin-bottom: 10px;
`;

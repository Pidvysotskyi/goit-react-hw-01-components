import styled from '@emotion/styled';
import { getRandomHexColor } from 'utils/getRandomColor';
export const StatConteiner = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const StatTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  padding: 60px;
  font-size: 40px;
  text-transform: uppercase;
  color: #9d9d9d;
`;

export const StatList = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 0;
  padding: 0;
  width: 100%;
  margin: 0;
  background-color: #e5e5e5;
`;

export const StatListItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: ${({ id }) => {
    if (id === 'id-1') {
      return getRandomHexColor();
    } else {
      return getRandomHexColor();
    }
  }};
`;

export const ItemLabel = styled.span`
  font-size: 10px;
  margin-bottom: 10px;
`;

export const ItemQuantity = styled.span`
  font-size: 20px;
`;

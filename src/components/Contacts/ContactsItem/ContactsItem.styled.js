import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  font-weight: 500;
  align-items: flex-end;
`;

export const ItemName = styled.p`
  margin-right: 10px;
  display: flex;
  align-items: flex-end;
`;

export const ItemNumber = styled.p`
  margin-right: 30px;
`;

export const DeleteButton = styled.button`
  width: 60px;
  border: 1px solid #000;
  border-radius: 5px;
  :hover,
  :focus,
  :active {
    background-color: red;
    color: aliceblue;
    cursor: pointer;
    border: 1px solid red;
  }
`;

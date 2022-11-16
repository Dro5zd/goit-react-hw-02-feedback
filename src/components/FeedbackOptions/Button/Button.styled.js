import styled from 'styled-components';

export const OptionBtn = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;

  &:hover {
    background-color: #f3f3f3;
    border: 1px solid wheat;
  }
`
import React from 'react';
import * as PropTypes from 'prop-types';
import {CgSmileNeutral, CgSmile, CgSmileSad} from 'react-icons/cg';
import styled from 'styled-components';

const OptionBtn = styled.button`
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

export const Button = ({option, onLeaveFeedback}) => {
  let btnImg
  switch (option) {
    case 'good':
      btnImg = <CgSmile style={{color: "green", height: 40, width: 40}}/>
      break;
    case 'bad':
      btnImg = <CgSmileSad style={{color: "red", height: 40, width: 40}}/>
      break;
    default: btnImg = <CgSmileNeutral style={{color: "grey", height: 40, width: 40}}/>
  }
  return <OptionBtn id={option} onClick={onLeaveFeedback}>{btnImg}</OptionBtn>
};

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func
};
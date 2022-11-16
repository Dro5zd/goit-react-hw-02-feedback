import React from 'react';
import {Button} from './Button/Button';
import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const FeedbackOptionsWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    padding: 20px;
   
`;

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return <FeedbackOptionsWrapper>
      {options.map(title => <Button key={title} option={title} onLeaveFeedback={onLeaveFeedback}/>)}
    </FeedbackOptionsWrapper>
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func
};

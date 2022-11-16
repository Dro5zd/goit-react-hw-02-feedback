import React from 'react';
import {Button} from './Button/Button';
import * as PropTypes from 'prop-types';
import {FeedbackOptionsWrapper} from './FeedbackOptions.styled';

export class FeedbackOptions extends React.Component {
  render() {
    let {options, onLeaveFeedback} = this.props;
    return (
      <FeedbackOptionsWrapper>
        {options.map(title => <Button key={title} option={title} onLeaveFeedback={onLeaveFeedback}/>)}
      </FeedbackOptionsWrapper>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

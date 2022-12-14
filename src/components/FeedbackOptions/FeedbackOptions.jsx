import React from 'react';
import * as PropTypes from 'prop-types';
import {FeedbackOptionsWrapper, OptionBtn, OptionsWrapper} from './FeedbackOptions.styled';
import {CgSmile, CgSmileNeutral, CgSmileSad} from 'react-icons/cg';


export class FeedbackOptions extends React.Component {
  state = {
    [this.props.options[0]]: <CgSmile/>,
    [this.props.options[1]]: <CgSmileNeutral/>,
    [this.props.options[2]]: <CgSmileSad/>
  }
  render() {
    let {options, onLeaveFeedback} = this.props;
    return (
      <FeedbackOptionsWrapper>
        {options.map(title => {
          return <OptionsWrapper>
            <OptionBtn id={title}
                       onClick={onLeaveFeedback}>
              {this.state[title]}</OptionBtn>
            <span>{title.toUpperCase()}</span>
          </OptionsWrapper>
        })
        }

      </FeedbackOptionsWrapper>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};

import React from 'react';
import * as PropTypes from 'prop-types';
import {CgSmile, CgSmileNeutral, CgSmileSad} from 'react-icons/cg';
import {OptionBtn} from './Button.styled';

export class Button extends React.Component {
  render() {
    let {option, onLeaveFeedback} = this.props;
    let btnImg;
    switch (option) {
      case 'good':
        btnImg = <CgSmile style={{color: 'green', height: 40, width: 40}}/>;
        break;
      case 'bad':
        btnImg = <CgSmileSad style={{color: 'red', height: 40, width: 40}}/>;
        break;
      default:
        btnImg = <CgSmileNeutral style={{color: 'grey', height: 40, width: 40}}/>;
    }
    return <OptionBtn id={option} onClick={onLeaveFeedback}>{btnImg}</OptionBtn>;
  }
}

Button.propTypes = {
  option: PropTypes.string.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
import * as PropTypes from 'prop-types';
import {Component} from 'react';
import {NotificationTitle, StatisticsWrapper} from './Notification.styled';

export class Notification extends Component {
  render() {
    let {message} = this.props;
    return <StatisticsWrapper>
      <NotificationTitle>Statistics</NotificationTitle>
      <p>{message}</p>
    </StatisticsWrapper>;
  }
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
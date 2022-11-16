import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const StatisticsWrapper = styled.div`
  min-height: 174px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const NotificationTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 80px;
`

export function Notification({message}) {
  return <StatisticsWrapper>
    <NotificationTitle>Statistics</NotificationTitle>
    <p>{message}</p>
  </StatisticsWrapper>;
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
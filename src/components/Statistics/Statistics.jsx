import * as PropTypes from 'prop-types';
import styled from 'styled-components';

const StatisticsWrapper = styled.div`
  min-height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatisticsTitle = styled.h1`
  font-size: 25px;
  margin-bottom: 30px;
`;

const StatisticsUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 230px;
`;

const StatisticsItem = styled.li`
  font-size: 20px;
`;

export function Statistics({total, bad, good, neutral, positivePercentage}) {
  return (
    <StatisticsWrapper>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsUl>
        <StatisticsItem>Good: <b>{good}</b></StatisticsItem>
        <StatisticsItem>Neutral: <b>{neutral}</b></StatisticsItem>
        <StatisticsItem>Bad: <b>{bad}</b></StatisticsItem>
        <StatisticsItem>Total: <b>{total}</b></StatisticsItem>
        <StatisticsItem>Positive percentage: <b>{positivePercentage}%</b></StatisticsItem>
      </StatisticsUl>
    </StatisticsWrapper>);
}

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
};
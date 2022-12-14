import * as PropTypes from 'prop-types';
import {StatisticsItem, StatisticsTitle, StatisticsUl, StatisticsWrapper} from './Statistics.styled';

export function Statistics(props) {
  let {total, bad, good, neutral, positivePercentage} = props;
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
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BaseList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <BaseList>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedback: {positivePercentage}%</li>
      </BaseList>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

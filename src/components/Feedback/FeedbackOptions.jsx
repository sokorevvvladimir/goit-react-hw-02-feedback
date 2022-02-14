import PropTypes from 'prop-types';
import styled from 'styled-components';
import { nanoid } from 'nanoid';

const BaseList = styled.ul`
  list-style: none;
  padding-inline-start: 0;
`;

const FlexList = styled(BaseList)`
  display: flex;
`;

const Button = styled.button`
  border-color: #dcdcdc;
  border-radius: 3px;
  background-color: #ffffff;
  cursor: pointer;
  font-weight: 700;

  &:active {
    background-color: skyblue;
  }
`;

const CommonLi = styled.li`
  margin-right: 5px;
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FlexList>
      {options.map(option => (
        <CommonLi key={nanoid()}>
          <Button type="button" onClick={() => onLeaveFeedback(option)}>
            {option}
          </Button>
        </CommonLi>
      ))}
    </FlexList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

import styled from 'styled-components';

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

const FeedbackOptions = ({ positiveReview, neutralReview, negativeReview }) => {
  return (
    <>
      <FlexList>
        <CommonLi>
          <Button type="button" onClick={positiveReview}>
            Good
          </Button>
        </CommonLi>
        <CommonLi>
          <Button type="button" onClick={neutralReview}>
            Neutral
          </Button>
        </CommonLi>
        <li>
          <Button type="button" onClick={negativeReview}>
            Bad
          </Button>
        </li>
      </FlexList>
    </>
  );
};

export default FeedbackOptions;

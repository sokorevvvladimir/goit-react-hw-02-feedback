import React, { Component } from 'react';
import styled from 'styled-components';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

const CenteredDiv = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClick = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    return values.reduce((acc, value) => {
      return acc + value;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const good = this.state.good;
    const res = (good / total) * 100;
    return Number.isNaN(res) ? 0 : Math.round(res);
  };

  optionsGatherer = () => Object.keys(this.state);

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    const options = this.optionsGatherer();

    return (
      <CenteredDiv>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.onClick} />
        </Section>
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </CenteredDiv>
    );
  }
}

export default Feedback;

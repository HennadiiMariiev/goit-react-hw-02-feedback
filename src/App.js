import React from 'react';
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import styled from 'styled-components';
import Notification from './components/NotificationComponent/Notification';
import { StyledApp } from './components/AppComponent/StyledApp';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  onFeedbackClick = (event) => {
    const propertyField = event.target.value;

    this.setState((state) => ({
      [propertyField]: (state[propertyField] += 1),
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((ac, item) => (ac += item));
  };

  countPositiveFeedbackPercentage = (total) => {
    const res = Math.floor((this.state.good / total) * 100);
    return !Number.isNaN(res) ? res : 0;
  };

  formatValue = (value) => {
    return `${Number(value).toFixed(0)}`;
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage(total);

    return (
      <StyledApp>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={this.onFeedbackClick} />
          {total !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positive}
              formatValue={this.formatValue}
            ></Statistics>
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </StyledApp>
    );
  }
}

export default App;

import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updaterFeedbackStats = key => {
    this.setState(prevState => ({ [key]: prevState[key] + 1 }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((prevValue, number) => {
      return prevValue + number;
    }, 0);
  };

  positivePercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <SectionWrapper title={'Please leave feedback'}>
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.updaterFeedbackStats}
          />
        </SectionWrapper>

        <SectionWrapper title={'Statistics'}>
          {this.countTotalFeedback() === 0 ? (
            <Notification messageme={'There is no feedback'} />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          )}
        </SectionWrapper>
      </div>
    );
  }
}

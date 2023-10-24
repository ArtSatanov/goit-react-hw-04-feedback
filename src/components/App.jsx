import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { SectionWrapper } from './SectionWrapper/SectionWrapper';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedbacks, setFeedbacks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updaterFeedbackStats = key => {
    setFeedbacks(prevState => ({
      ...prevState,
      [key]: prevState[key] + 1,
    }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedbacks).reduce((prevValue, number) => {
      return prevValue + number;
    }, 0);
  };

  const positivePercentage = () => {
    return Math.round((feedbacks.good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <SectionWrapper title={'Please leave feedback'}>
        <FeedbackOptions
          options={feedbacks}
          onLeaveFeedback={updaterFeedbackStats}
        />
      </SectionWrapper>

      <SectionWrapper title={'Statistics'}>
        {countTotalFeedback() === 0 ? (
          <Notification messageme={'There is no feedback'} />
        ) : (
          <Statistics
            feedbacks={feedbacks}
            total={countTotalFeedback()}
            positivePercentage={positivePercentage()}
          />
        )}
      </SectionWrapper>
    </div>
  );
};

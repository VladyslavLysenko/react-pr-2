import { Component } from 'react';
import { Stats } from './Stats/Stats';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions ';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = e => {
    const target = e.target.name;
    this.setState(prevState => ({ [target]: prevState[target] + 1 }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / (this.countTotalFeedback() || 1)) * 100);

  render() {
    let totalTarget = this.countTotalFeedback();

    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
    const totalFeedback = this.countTotalFeedback();

    return (
      <>
        <Section title="Leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.handleIncrement}
            options={Object.keys(this.state)}
          />
        </Section>
        <Section title="Statistics">
          {totalTarget > 0 ? (
            <Stats
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <p>Here is 0 feedbacks, try click</p>
          )}
        </Section>
      </>
    );
  }
}

import { Component } from 'react';
import { Stats } from './Stats/Stats';
import { Buttons } from './Butttons.jsx/Buttons';

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

    return (
      <>
        <Buttons
          handleIncrement={this.handleIncrement}
          options={Object.keys(this.state)}
        />

        {totalTarget > 0 ? (
          <Stats
            feedback={this.state}
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        ) : (
          <p>Here is 0 feedbacks, try click</p>
        )}
      </>
    );
  }
}

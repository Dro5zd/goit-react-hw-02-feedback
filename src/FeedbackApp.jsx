import {Component} from 'react';
import {Notification} from './components/Notification/Notification';
import {Section} from './components/Section/Section';
import {Statistics} from './components/Statistics/Statistics';
import {FeedbackOptions} from './components/FeedbackOptions/FeedbackOptions';

export class FeedbackApp extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  constructor() {
    super();
    this.onLeaveFeedback = this.onLeaveFeedback.bind(this);
  }

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, num) => acc + num, 0);
  }

  countPositiveFeedbackPercentage() {
    return Math.round(100 / this.countTotalFeedback() * this.state.good);
  }

  buttonsTitle() {
    return Object.keys(this.state);
  }

  onLeaveFeedback(e) {
    let btnName = e.currentTarget.id;
    return this.setState(state => {
      return {[btnName]: state[btnName] + 1};
    });
  }

  render() {
    return (
      <section>
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.buttonsTitle()} onLeaveFeedback={this.onLeaveFeedback}/>
          {this.countTotalFeedback() !== 0
            ? <Statistics good={this.state.good}
                          neutral={this.state.neutral}
                          bad={this.state.bad}
                          total={this.countTotalFeedback()}
                          positivePercentage={this.countPositiveFeedbackPercentage() || 0}/>
            : <Notification message="There is no feedback"/>}
        </Section>
      </section>

    );

  }
}

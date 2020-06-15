import React, { Component } from "react";
import moment from "moment";

export default class DayTimer extends Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    let { startCount } = this.props;
    this.setState({
      count: startCount,
    });
    this.intervalChange();
  }
  intervalChange = () => {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count - 1,
      }));
      if (this.state.count <= 0) {
        clearInterval(this.interval);

        document.title = "🎉 TOFFEE TIME! 🥳";
      }
    }, 1000);
  };
  render() {
    let { count } = this.state;
    return (
      <div>
        <h2>current count: {moment.utc(count * 1000).format("HH:mm")}</h2>
      </div>
    );
  }
}
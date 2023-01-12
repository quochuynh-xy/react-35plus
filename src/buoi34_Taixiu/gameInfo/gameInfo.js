import React, { Component } from "react";
import { connect } from "react-redux";
class GameInfo extends Component {
  palaced = "";
  render() {
    if (this.props.nowPlace === "TAI") this.palaced = "Tài (11-)"
    if (this.props.nowPlace === "XIU") this.palaced = "Xỉu (12+)"
      return (
        <div className="text-center">
          <h1>
            Bạn đang đặt cửa:
            <span className="text-danger ms-3">
              {this.palaced}
            </span>
          </h1>
          <h2>
            Tổng số lần thắng:
            <span className="text-success ms-3">
              {this.props.playerHistory.win}
            </span>
          </h2>
          <h2>
            Tổng số lần chơi:
            <span className="text-primary ms-3">
              {this.props.playerHistory.bet}
            </span>
          </h2>
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    playerHistory: state.player.history,
    nowPlace: state.player.nowPlace,
  };
};
export default connect(mapStateToProps, null)(GameInfo);

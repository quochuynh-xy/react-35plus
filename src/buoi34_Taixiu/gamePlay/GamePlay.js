import React, { Component } from "react";
import { connect } from "react-redux";
import css from "./style.module.css";
import XucXac from "../xucxac/XucXac";
import GameInfo from "../gameInfo/gameInfo";
class GamePlay extends Component {
  recordHistory = () => {
    if (this.props.playerBet === this.props.rollResult) {
      this.props.win();
    } else {
      this.props.loss();
    }
  };
  render() {
    return (
      <section className={`${css.game} py-5`}>
        <div className="container">
          <h1 className="text-center my-5 fs-1"> GAME ĐỔ XÚC XẮC</h1>
          <div className="row">
            <div className="col-3 text-center">
              <button
                className={`${css.palace_bet} fs-1 text-center p-4 fw-bolder wibu`}
                onClick={() => {
                  this.props.palaced_Tai();
                }}
              >
                TÀI
              </button>
            </div>
            <div className="col-6 ">
              <XucXac />
            </div>
            <div className="col-3 text-center">
              <button
                className={`${css.palace_bet} fs-1 text-center p-4 fw-bolder`}
                onClick={() => {
                  this.props.palaced_Xiu();
                }}
              >
                XỈU
              </button>
            </div>
          </div>
          <GameInfo />
          <div className="text-center">
            <button
              className="btn btn-warning text-secondary px-4 mt-3"
              onClick={() => {
                this.props.runBet();
              }}
            >
              XÓC
            </button>
            <button
              className="btn btn-primary text-white px-4 mt-3 ms-2"
              onClick={this.recordHistory}
            >
              KHUI
            </button>
          </div>
        </div>
      </section>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    palaced_Tai: () => {
      dispatch({ type: "PALACED_TAI" });
    },
    palaced_Xiu: () => {
      dispatch({ type: "PALACED_XIU" });
    },
    runBet: () => {
      dispatch({ type: "RÚT_CÁI_TAY_RA" });
    },
    win: () => {
      dispatch({ type: "WIN" });
    },
    loss: () => {
      dispatch({ type: "LOSS" });
    },
  };
};
const mapStateToProps = (state) => {
  return {
    playerBet: state.player.nowPlace,
    rollResult: state.xucxac.status,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(GamePlay);

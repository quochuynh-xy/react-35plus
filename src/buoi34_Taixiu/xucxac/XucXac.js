import { Component } from "react";
import css from "./style.module.css";
import { connect } from "react-redux";
class XucXac extends Component {
  render() {
    console.log("ĐIỂM", this.props.dices[0].point +this.props.dices[1].point +this.props.dices[2].point);
    let[dice_1, dice_2, dice_3] = this.props.dices;
    return (
      <div className="row justify-content-center">
        <div className="col-2">
          <img
            src={dice_1.image}
            className={`img-fluid ${css.dice}`}
            alt="althihi"
          />
        </div>
        <div className="col-2">
          <img
            src={dice_2.image}
            className={`img-fluid ${css.dice}`}
            alt="althihi"
          />
        </div>
        <div className="col-2">
          <img
            src={dice_3.image}
            className={`img-fluid ${css.dice}`}
            alt="althihi"
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    dices: state.xucxac.dices
  }
}
export default connect(mapStateToProps, null)(XucXac);

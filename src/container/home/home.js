import React, { Component } from "react";
import { connect } from "react-redux";
import HomeComponent from "./../../components/home";
import * as action from "./../../action/home";
class home extends Component {
  onInput = (data) => {
    this.props.onInput(data);
  };
  deleteData = () => {
    this.props.deleteData();
  };
  deleteDataArr = () => {
    this.props.deleteDataArr();
  };
  render() {
    const { HomeMyReducer } = this.props;
    var arrNew = HomeMyReducer.arr;
    var input = arrNew.join("\n");
    return (
      <HomeComponent
        onInput={this.onInput}
        HomeMyReducer={HomeMyReducer}
        deleteData={this.deleteData}
        deleteDataArr={this.deleteDataArr}
        input={input}
      />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    HomeMyReducer: state.HOME,
  };
};
const dispatchToProps = (dispatch, props) => {
  return {
    onInput: (data) => {
      dispatch(action.InputHome(data));
    },
    deleteData: () => {
      dispatch(action.HandleDeleteData());
    },
    deleteDataArr: () => {
      dispatch(action.HandleDeleteDataArr());
    },
  };
};
export default connect(mapStateToProps, dispatchToProps)(home);

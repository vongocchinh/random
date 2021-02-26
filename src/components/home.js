import React, { Component } from "react";
import "./styles.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Winwheel from "winwheel";
import { Button } from "@material-ui/core";
import audioFile from "./tick.mp3";
let audio = new Audio(audioFile); // Create audio object and load desired file.
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      open: false,
      handleClose: false,
      arr: [],
      array: [],
      onClick: false,
    };
  }
  UNSAFE_componentWillMount() {
    this.setState({
      input: this.props.input,
    });
    if (this.props.input) {
      this.setState({
        input: this.props.input,
        arr: this.props.input.split("\n"),
      });
    } else {
      this.setState({
        input: "",
        arr: [],
      });
    }
  }
  UNSAFE_componentWillReceiveProps(props) {
    if (props && props.input) {
      this.setState({
        input: props.input,
        arr: props.input.split("\n"),
      });
    } else {
      this.setState({
        input: "",
        arr: [],
      });
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    this.setState({
      arr: e.target.value.trim().split("\n"),
    });
  };
  onClick = () => {
    if (this.state.input) {
      audio.play();
      this.renderItem();
      this.props.onInput(this.state.input);
    } else {
      alert("nhap so can random");
    }
  };
  handleClose = () => {
    this.stopAudio();
    this.setState({
      open: false,
    });
    this.props.deleteData();
    this.setState({
      onClick: false,
    });
  };
  handleClear = () => {
    this.stopAudio();
    this.setState({
      open: false,
    });
    this.props.deleteDataArr();
    this.setState({
      onClick: false,
    });
  };
  componentDidMount() {
    var { HomeMyReducer } = this.props;
    if (HomeMyReducer.data !== "") {
      this.setState({
        open: true,
      });
    }

    this.renderItem();
  }
  renderItem = () => {
    var { arr } = this.state;
    var array = [];
    for (let i = 0; i < arr.length; i++) {
      var color;
      if (i % 2 === 0) {
        color = "#eae56f";
      } else {
        color = "#167DF0";
      }
      var ob = {
        fillStyle: color,
        text: arr[i],
      };
      array.push(ob);
    }
    let winwheel = new Winwheel({
      canvasId: "myCanvas",
      outerRadius: 150,
      textFontSize: 20,
      texColor: "white",
      'numSegments': array.length,
      segments: array,
      'animation': {
        type: "spinToStop",
        duration: 5,
        spins: 8,
        callbackFinished: this.alertPrize(this),
        soundTrigger: "pin",
      },
      pins: {
        number: 32,
        outerRadius: 5,
        margin: 10,
        fillStyle: "#167DF0",
        strokeStyle: "#ffffff",
      },
    });
    if (this.state.onClick) {
      audio.play();
      winwheel.startAnimation();
    }
  };

  alertPrize = () => {
    
  };
  onClickRoate = () => {
    this.setState({
      onClick: true,
    });
  };
  onClick2 = () => {
    this.onClick();
    this.onClickRoate();
  };
  stopAudio = () => {
    audio.pause();
  };
  renderAlert = (HomeMyReducer) => {
    if (HomeMyReducer.rules) {
      return (
        <Dialog
          open={true}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Bạn đã chiến thắng với số may mắn là :
              <span className="number"> {HomeMyReducer.data}</span>
              <br/>
              <span>Đợi Vòng Quay Kết Thúc Để Remove</span>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Tiếp tục lại
            </Button>
            <Button onClick={this.handleClear} color="primary" autoFocus>
              Xóa khỏi danh sách may mắn
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
  };
  render() {
    var { HomeMyReducer } = this.props;
    this.renderItem();
    if (HomeMyReducer.rules) {
    }
    return (
      <div>
        {this.renderAlert(HomeMyReducer)}
        <>
          <h3 className="title">
            <u>RANDOM NAME BY NGỌC CHÍNH</u>
          </h3>
          <div className="container">
            <div className="container-layout">
              <p>
                <strong>Thứ tự các số ,chuỗi cần random may mắn !</strong>
              </p>
              <textarea
                name="input"
                value={this.state.input}
                onChange={this.onChange}
                className="text-input"
              />
            </div>
            <div className="wrapper typo" id="wrapper">
              <section id="luckywheel" className="hc-luckywheel">
                <div className="hc-luckywheel-container">
                  <canvas id="myCanvas" width="300" height="300"></canvas>
                </div>
                <a
                  onClick={this.onClick2}
                  href="###"
                  className="hc-luckywheel-btn"
                >
                  Xoay
                </a>
              </section>
            </div>
          </div>
        </>
      </div>
    );
  }
}
export default home;

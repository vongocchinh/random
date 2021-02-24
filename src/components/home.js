import React, { Component } from "react";
import "./styles.scss";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
// import DialogTitle from '@material-ui/core/DialogTitle';
import { Button } from "@material-ui/core";
class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      open: false,
      handleClose: false,
    };
  }
  UNSAFE_componentWillMount() {
    this.setState({
      input: this.props.input,
    });
    if (this.props.input) {
      this.setState({
        input: this.props.input,
      });
    } else {
      this.setState({
        input: "",
      });
    }
  }
  UNSAFE_componentWillReceiveProps(props) {
    if (props && props.input) {
      this.setState({
        input: props.input,
      });
    } else {
      this.setState({
        input: "",
      });
    }
  }
  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onClick = () => {
    if(this.state.input){
        this.props.onInput(this.state.input);
    }else{
        alert("nhap so can random")
    }
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
    this.props.deleteData();
  };
  handleClear = () => {
    this.setState({
      open: false,
    });
    this.props.deleteDataArr();
  };
  componentDidMount() {
    var { HomeMyReducer } = this.props;
    if (HomeMyReducer.data !== "") {
      this.setState({
        open: true,
      });
    }
  }
  render() {
    var { HomeMyReducer } = this.props;
    return (
      <div>
      {
        HomeMyReducer.rules?(
            <Dialog
            open={HomeMyReducer.rules}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
               Bạn đã chiến thắng với số may mắn là :<span className="number"> {HomeMyReducer.data}</span>
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
        ):''
      }
       
        <>
          <h3 className="title">
            <u>RANDOM NUMBER</u>
          </h3>
          <div className="container">
            <div className="container-layout">
            <p ><strong>Thứ tự các số may mắn !</strong></p>
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
                  <canvas
                    className="hc-luckywheel-canvas"
                    width="500px"
                    height="500px"
                  ></canvas>
                </div>
                <a
                  onClick={this.onClick}
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

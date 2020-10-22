import React from 'react';
import {
  Button,
  Modal,
  Icon,
} from 'rsuite';

class Confirm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      msg: '',
      callback: () => {},
    };
    this.close = this.close.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setShow = this.setShow.bind(this);
    this.init = this.init.bind(this);
  }

  setShow(show) {
    this.setState({ show });
  }

  init(msg, callback) {
    this.setState({ show: true, msg, callback });
  }

  exec(call) {
    const { callback } = this.state;
    callback(call);
    this.setState({
      show: false,
      callback: () => {},
    });
  }

  close() {
    this.exec(false);
  }

  handleSubmit() {
    this.exec(true);
  }

  render() {
    const { show, msg } = this.state;
    return (
      <Modal backdrop="static" show={show} onHide={this.close} size="xs">
        <Modal.Body>
          <Icon
            icon="remind"
            style={{
              color: '#ffb300',
              fontSize: 24,
            }}
          />
          {'  '}
          {msg}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.handleSubmit} appearance="primary">
            Ok
          </Button>
          <Button onClick={this.close} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default Confirm;

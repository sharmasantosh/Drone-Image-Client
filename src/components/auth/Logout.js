/* import React components here */
import React, { Component } from 'react';
/* import bulma components */
import {
  Button,
  Notification,
  Modal,
  ModalContent,
  ModalClose,
  ModalBackground
} from 'bloomer';
/* import api here */
import * as API from '../../api';

/* insert styles here */
const style = {
  successButton: {
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    width: '20%',
    backgroundColor: '#57bc90',
    color: 'white'
  },
  errorButton: {
    marginTop: '10px',
    marginLeft: '10px',
    marginRight: '10px',
    width: '20%',
    backgroundColor: '#ef6f6c',
    color: 'white'
  }
};

export default class Logout extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleLogout = e => {
    e.preventDefault();
    API.logout().then(() => {
      this.props.changeLog();
      this.props.removeUser();
      this.props.close();
    });
  };

  render() {
    return (
      <div>
        <Modal isActive={this.props.active}>
          <ModalBackground onClick={this.props.close} />
          <ModalContent>
            <Notification>
              <center>
                <p>Are you sure you want to log out?</p>
                <Button style={style.successButton} onClick={this.handleLogout}>
                  Yes
                </Button>
                <Button style={style.errorButton} onClick={this.props.close}>
                  No
                </Button>
              </center>
            </Notification>
          </ModalContent>
          <ModalClose onClick={this.props.close} />
        </Modal>
      </div>
    );
  }
}

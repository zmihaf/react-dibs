import React, { Component } from "react";
import openSocket from 'socket.io-client';

class DibsClientComponent extends Component {
  state = {
    pageVisitorList: [],
  }

  socket = openSocket(this.props.dibsServerAddress);

  componentDidMount() {
    this.socket.emit('PAGE_VISIT', window.location.href, this.props.username, Date.now());
    this.socket.on('PAGEVISITORINFO_UPDATE', pageVisitorInfo => {
      const pageVisitorList = [];
      for (const username in pageVisitorInfo) {
        pageVisitorList.push({
          username,
          visitTimestamp: pageVisitorInfo[username],
        });
      }
      this.setState({
        pageVisitorList: pageVisitorList.sort((a,b) => a.visitTimestamp - b.visitTimestamp),
      });
    });
  }

  render() {
    const {
      pageVisitorList,
    } = this.state;
    return this.props.children(this.state);
  }
}

export default DibsClientComponent;

import React, { Component } from "react";
import io from 'socket.io-client';

class DibsClientComponent extends Component {
  state = {
    pageVisitorList: [],
  }

  socket = io(this.props.server, { secure: true, reconnect: true, rejectUnauthorized : false });

  componentDidMount() {
    this.socket.emit('PAGE_VISIT', window.location.href, this.props.username, Date.now());
    this.socket.on('PAGEVISITORINFO_UPDATE', pageVisitorInfo => {
      const pageVisitorList = [];
      for (const username in pageVisitorInfo[window.location.href]) {
        pageVisitorList.push({
          username,
          visitTimestamp: pageVisitorInfo[window.location.href][username],
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

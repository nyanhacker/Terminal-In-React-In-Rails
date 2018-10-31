import React from "react";
import PropTypes from "prop-types";
import Terminal from "terminal-in-react";

class Constructing extends React.Component {
  showMsg = () => 'Hello Worlds!'
  render () {
    return (
      <React.Fragment>
        <div style = {{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }} >
          <Terminal color='green' backgroundColor='black' barColor='black' style={{ fontWeight: "bold", fontSize: "1em" }}
            commands = {{
              'open-google': () => window.open('https://www.google.com/', '_blank'),
              showmsg: this.showMsg,
              popup: () => alert('Terminal in React')
            }}
            descriptions = {{
              'open-google': 'opens google.com',
              showmsg: 'shows a message',
              alert: 'alert', popup: 'alert'
            }}
            msg = 'You can write anything here. Example - Hello! My name is Foo and I like Bar.'
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Constructing

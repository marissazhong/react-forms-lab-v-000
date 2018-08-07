import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: this.props.maxChars
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" />
        <input type="text" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
      </div>
    );
  }
}

export default TwitterMessage;

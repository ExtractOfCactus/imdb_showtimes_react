import React from "react";

class ShowtimeItem extends React.Component {

  render() {
    return (
      <div>
        <a>{this.props.children}</a>
      </div>
    )
  }
}

export default ShowtimeItem;
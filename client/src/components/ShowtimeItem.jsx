import React from "react";

class ShowtimeItem extends React.Component {

  render() {
    return (
      <div>
        <h4 className="title"> {this.props.title} </h4>
        <a className="showtime" href="{this.props.showtimes}">showtimes</a>
      </div>
    )
  }
}

export default ShowtimeItem;
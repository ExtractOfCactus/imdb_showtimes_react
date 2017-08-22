import React from "react";

class ShowtimeItem extends React.Component {

  render() {
    return (
      <table>
      <tbody>
      <tr>
        <td className="title"> {this.props.title} </td>
        <td className="showtime"><a href="{this.props.showtimes}">showtimes</a></td>
      </tr>
      </tbody>
      </table>
    )
  }
}

export default ShowtimeItem;
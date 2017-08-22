import React from "react";

import ShowtimeList from "../components/ShowtimeList.jsx"

const showtimeData = [
{id: 1, title: "Batman", showtimes: "showtime link here"},
{id: 2, title: "Batman Returns", showtimes: "showtime link here"},
{id: 3, title: "Batman Forever", showtimes: "showtime link here"},
{id: 4, title: "Batman and Robin", showtimes: "showtime link here"},
{id: 5, title: "Batman: Alfred's revenge", showtimes: "showtime link here"}
]

class ShowtimeContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: showtimeData
    }
  }

  render() {
    return (
      <div>
        <h3>UK Opening This Week</h3>
        <ShowtimeList showtimeData={this.state.data} />
        <p><a>See more opening this week >> </a></p>
        <button id="showtimesButton"> Get Showtimes >> </button>
      </div>
    )
  }

}

export default ShowtimeContainer;
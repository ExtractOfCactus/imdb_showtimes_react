import React from 'react';

import ShowtimeItem from "./ShowtimeItem.jsx"

class ShowtimeList extends React.Component {

  render() {

    const showtimeComponents = this.props.showtimeData.map(function(item) {
      return (
        <ShowtimeItem key= {item.id} title={item.title}> {item.title} {item.showtimes}</ShowtimeItem>
      )
    })


    return (
      <div id="list-div">
        {showtimeComponents}
      </div>
      )
  }
}

export default ShowtimeList;
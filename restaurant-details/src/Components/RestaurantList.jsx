import React from 'react'

function RestaurantList(data) {
    console.log(data.data);
  return (<div>
      <div>
          name:{data.data[0].name}
      </div>
      <div>
          total_votes:{data.data[0].total_votes}
      </div>
  </div>)
}

export default RestaurantList
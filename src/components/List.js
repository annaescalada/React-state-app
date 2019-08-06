import React from 'react'

function List(props) {
  return (
    <ul>
      {props.cities.map((city, i) => {
        return (
        <li key={i}>
          <p>{city.name}</p>
          <p>{city.population}</p>
        </li>
        )
      })}
    </ul>
  )
}

export default List;

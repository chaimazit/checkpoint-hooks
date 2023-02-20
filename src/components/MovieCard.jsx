import React from 'react'

const MovieCard = ({movie}) => {
 const{title,description,posterURL,Rating}=movie
  return (
    <div class="card" >
    <img src={posterURL} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">{title}</h5>
      <p class="card-text">{description}</p>
      <a href="#" class="btn btn-primary">Read More</a>
    </div>
  </div>
  )
}

export default MovieCard
      
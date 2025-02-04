import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';


export default class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie : null
    };
  }
  componentDidMount() {
    const {id} = this.props.match.params;
    this.fetchMovie(id);
  }

  fetchMovie = id => {
    axios
    .get(`http://http://localhost:3000/api/movies/${id}`)
    .then(response => {
      this.setState(() => ({ movie: response.data}));
    })
    .catch(error => {
      console.error(error);
    });
  };
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.state.movie);
  }
  render() {
  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const {movie} = this.state;
  return (
    <div className="save-wrapper">
      <MovieCard movie={movie}/>
      <div className="save-button" onClick={()=> this.saveMovie()}>
        Save
        </div>
        </div>
  );
  }
}

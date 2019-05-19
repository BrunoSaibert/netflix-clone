import './App.css';

import React, { Component } from 'react';
import Movie from './Movie';

const apiKey = 'e5693481ef000bfdd855a0f21ad39631';
const sourceImage = 'http://image.tmdb.org/t/p/w500/';

class App extends Component {
  state = {
    movieListUpcoming: [],
    movieListPopular: []
  }
  
  getUpcomingMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          movieListUpcoming: data.results
        })
      })
  }
  
  getPopularMovies = () => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          movieListPopular: data.results
        })
      })
  }
  
  componentDidMount() {
    this.getUpcomingMovies();
    this.getPopularMovies();
  }

  render() {

    const { movieListUpcoming, movieListPopular } = this.state;

    return (
      <div>
        <h3 className='list-title'>Up Coming</h3>
        <div className='movies'>
          <ul>
            { movieListUpcoming.map(movie => (
              <Movie id={movie.id} titulo={movie.title} overview={movie.overview} img={movie.backdrop_path} />
            )) }
          </ul>
        </div>

        
        <h3 className='list-title'>Up Coming</h3>
        <div className='movies'>
          <ul>
            { movieListPopular.map(movie => (
              <Movie id={movie.id} titulo={movie.title} overview={movie.overview} img={movie.backdrop_path} />
            )) }
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

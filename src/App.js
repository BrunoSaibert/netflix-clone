import './App.css';

import React, { Component } from 'react';
import logo from './img/netflix.png';
import slider from './img/slider.jpg';
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

  marginLeft = (event) => {
    const el = event.currentTarget;
    const list = el.parentElement.childNodes[1];
    let marginLeft = parseInt(list.style.marginLeft.replace("px", ""));
    if (isNaN(marginLeft)) { marginLeft = 0; }
    console.log(window.innerWidth, list.offsetWidth, Math.abs(parseInt(marginLeft)));
    if((list.offsetWidth - Math.abs(parseInt(marginLeft))) <= (window.innerWidth + 10)) {
      list.style.marginLeft = (marginLeft - 290) + "px";
    }
  }

  marginRight = (event) => {
    const el = event.currentTarget;
    const list = el.parentElement.childNodes[1];

    let marginLeft = parseInt(list.style.marginLeft.replace("px", ""));
    if (isNaN(marginLeft)) { marginLeft = 0; }

    if (marginLeft < 0){
      list.style.marginLeft = (marginLeft + 290) + "px";
    }
  }
  
  componentDidMount() {
    this.getUpcomingMovies();
    this.getPopularMovies();
  }

  render() {

    const { movieListUpcoming, movieListPopular } = this.state;

    return (
      <div>
        <header className='header'>
          <a href='/' className='logo'><img src={logo}/></a>
          <nav className='header-menu'>
            <ul>
              <li><a href='/' >About</a></li>
            </ul>
          </nav>
        </header>

        <section className='slider'>
          <div className='slider-item'>
            <img src={slider} className='slider-img'/>
            <div className='slider-content'>
              <h3 className='title'>Stranger Things</h3>
              <p className='sub-title'>
                <b>97% Match 2016 TV-14 season 1</b>
                <br />
                <br />
                Phasellus a nulla vitae augue convallis efficitur.
                <br />
                Nam gravida viverra velit venenatis elementum.
                <br />
                Phasellus egestas volutpa
              </p>
              <p className='sub-title'>
                Cast:
              </p>
              <p>
                Phasellus egestas, volutpat tortor, eget eleifend, massa
              </p>
              <p className='sub-title'>
                Genres:
              </p>
              <p>
              Phasellus, volutpat
              </p>
            </div>
          </div>
        </section>

        <section className='catalog'>
          <h3 className='list-title'>Up Coming</h3>
          <div className='movies'>
            <button type='button' className='movies-control prev' onClick={this.marginRight}> ↼ </button>
            <ul>
              { movieListUpcoming.map(movie => (
                <Movie id={movie.id} titulo={movie.title} overview={movie.overview} img={movie.backdrop_path} />
              )) }
            </ul>
            <button type='button' className='movies-control next' onClick={this.marginLeft}> ⇀ </button>
          </div>
          
          <h3 className='list-title'>Popular</h3>
          <div className='movies'>
            <button type='button' className='movies-control prev' onClick={this.marginRight}> ↼ </button>
            <ul>
              { movieListPopular.map(movie => (
                <Movie id={movie.id} titulo={movie.title} overview={movie.overview} img={movie.backdrop_path} />
              )) }
            </ul>
            <button type='button' className='movies-control next' onClick={this.marginLeft}> ⇀ </button>
          </div>
        </section>

        <footer className='footer'>
          <ul>
            <li className='logo'><a href='#'>Netflix</a></li>
            <li className='copy'>©2019. All Rights Reserved by Bruno Saibert.</li>
            <li className='github'><a href='https://github.com/BrunoSaibert/netflix-clone'>github</a></li>
          </ul>
        </footer>
      </div>
    );
  }
}

export default App;

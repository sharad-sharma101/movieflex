import React from 'react'
import { useState } from 'react';
import './Navbar.css'

const Navbar = () => {

      

  //   const getData = (arr) => {
  //   fetch(`https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`).
  //   then(res => res.json())
  //   .then(data => {
  //     return data.results.map((ele) => {
  //            arr.push(ele.original_title);      
  //        return ele.original_title;
  //     })
  //   })
  // }
 


  // const [serval, setserval] = useState("")
  //   const handle = (e) =>{
  //     setserval(e.target.value)
  //     if(serval.length === 0){
  //       const moviesLi = []; 
  //       getData(moviesLi);
  //       console.log(moviesLi);
  //     }
  //     if(serval.length > 2){
  //       getData();
  //     }
  //   }
    

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand mx-3" href="/"><img className="header__icon" style={{height: 40}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/movies/popular">Popular</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/movies/top_rated">Top_Rated</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/movies/upcoming">Upcoming</a>
        </li>
        
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categeries
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Rom-Com</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Science Friction</a></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search"  aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

export default Navbar
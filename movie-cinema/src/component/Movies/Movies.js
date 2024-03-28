import React, { useState } from "react";
import Movie from "../Movie/Movie.js";
import "./Movies.css";
import Counter from "../Counter/Counter.js";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
const Movies = () => {


  const [nama, setNama] = useState("Ucup");

  console.log(nama);


  const [datas, setDatas] = useState([
    {
      title: "Judul Film 1",
      year: 2021,
      poster: "https://picsum.photos/200",
      genre: "Horror",
    },
    {
      title: "Judul Film 2",
      year: 2020,
      poster: "https://picsum.photos/200",
      genre: "Action",
    },
    {
      title: "Judul Film 3",
      year: 2014,
      poster: "https://picsum.photos/200",
      genre: "Romance",
    },
    {
      title: "Judul Film 4",
      year: 2023,
      poster: "https://picsum.photos/200",
      genre: "Comedy",
    },
    {
      title: "Judul Film 5",
      year: 2022,
      poster: "https://picsum.photos/200",
      genre: "Thriller",
    },
    {
      title: "Judul Film 6",
      year: 2014,
      poster: "https://picsum.photos/200",
      genre: "Action",
    },
    {
      title: "Judul Film 7",
      year: 2017,
      poster: "https://picsum.photos/200",
      genre: "Horror",
    },
    {
      title: "Judul Film 8",
      year: 2018,
      poster: "https://picsum.photos/200",
      genre: "Romance",
    },
  ]);

  const handleClick = () => {
    const movie = {
      title: "Amazing Spiderman",
      year: 2012,
      poster: "https://picsum.photos/200",
      genre: "Avanger",
    };
    setDatas([...datas, movie]);
    // setNama("Budi");
  };

  const addMovie = (movie) => {
    setDatas([...datas,movie])
  }

  console.log(datas);

  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movies-container">
        {datas.map((data) => {
          return (
            <Movie
              title={data.title}
              year={data.year}
              poster={data.poster}
              genre={data.genre}
            />
          );
        })}
        {/* <button onClick={handleClick}>Add Movie</button> */}
        {/* <Counter/> */}
      </div>
      <AddMovieForm onAddMovie={addMovie}/>
    </div>
  );
};

export default Movies;

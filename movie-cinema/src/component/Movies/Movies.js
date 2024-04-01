import React, { useEffect, useState } from "react";
import Movie from "../Movie/Movie.js";
import "./Movies.css";
import Counter from "../Counter/Counter.js";
import AddMovieForm from "../AddMovieForm/AddMovieForm.js";
import { getMovieList } from "../../Api.js";

const Movies = () => {


  const [nama, setNama] = useState("Ucup");

  console.log(nama);


  const [datas, setDatas] = useState([]);

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
  };

  useEffect(() => {
    // untuk menangkap result dari api
    getMovieList().then((result) => {
      setDatas(result);
    });
  },[]);

  console.log(datas);

  return (
    <div>
      <h1>Latest Movies</h1>
      <div className="movies-container">
        {datas.map((data) => {
          return (
            <Movie
            id={data.id}
              title={data.title}
              year={data.release_date}
              poster={data.poster_path}
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

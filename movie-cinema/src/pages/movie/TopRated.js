import React, { useEffect, useState } from "react";
import { getTopRatedMovie } from "../../Api.js";
import { NavLink } from "react-router-dom";
import Movie from "../../component/Movie/Movie.js";
import "../../component/Movie/Movie.css";

const TopRated = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getTopRatedMovie().then((result) => {
      setDatas(result);
    });
  }, []);

  console.log(datas);

  return (
    <div>
      <h1>Top Rated</h1>
      <div className="movies-container">
        {datas.map((data) => {
          return (
            <div className="movie">
              <Movie poster={data.poster_path} />
              <h3 className="title">
                <NavLink to={`/detail/${data.id}`}>{data.title}</NavLink>
              </h3>
              <p className="year">{data.release_date}</p>
              <p className="genre">{data.vote_average}</p>
              <p className="genre">{data.vote_count}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopRated;

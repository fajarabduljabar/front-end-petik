import React from "react";
import Movie from "../../component/Movie/Movie";
import "../../component/Movie/Movie.css";
import { getMovieList } from "../../Api.js";
import { useEffect, useState } from "react";


const Popular = () => {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        // untuk menangkap result dari api
        getMovieList().then((result) => {
          setDatas(result);
        });
      },[]);
    
      console.log(datas);
    return (
        <div>
          <h1>Popular</h1>
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
        </div>
      );
};

export default Popular;
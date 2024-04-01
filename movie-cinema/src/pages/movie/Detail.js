import React from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../Api.js";
import { useEffect, useState } from "react";
import "../../component/Hero/Hero.css";

const Detail = () => {
  // Menggunakan userParams untuk menangkap parameter id dari URL
  let { id } = useParams();

  const [datas, setDatas] = useState([]);

  useEffect(() => {
    // untuk menangkap result dari api
    getDetailMovie(id).then((result) => {
      setDatas(result);
    });
  }, []);

  return (
    <div className="container">
    <section className="hero">
      <div className="hero-left">
        <img
          src={`https://image.tmdb.org/t/p/w300/${datas.poster_path}`}
          alt="hero-img"
          className="hero-image"
        />
        <button>Watch</button>
      </div>
      <div className="hero-right">
        <h2 className="hero-title">{datas.title}</h2>
        <p className="hero-description">{datas.overview}</p>
      </div>
    </section>
  </div>
  );
};

export default Detail;

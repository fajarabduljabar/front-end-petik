import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailCourse = () => {

  // CARA PERTAMA

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState();
  const {id} = useParams();

  useEffect(() => {
    getCourseById();
  },[id]);

  const getCourseById = async () => {
    try {
    const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
    setName(response.data.name);
    setDesc(response.data.desc);
    setImage(response.data.url);
  }catch (error) {
    console.error('Error fetching course:', error);
  }
  };

  // CARA KEDUA

  // const { id } = useParams();

  // const [course, setCourse] = useState({
  //   name: '',
  //   desc: '',
  //   url: '',
  // });

  // useEffect(() => {
  //   const fetchCourse = async () => {
  //     try {
  //       const response = await axios.get(`https://api.sukmax.my.id/course/${id}`);
  //       setCourse(response.data);
  //     } catch (error) {
  //       console.error('Error fetching course:', error);
  //     }
  //   };

  //   fetchCourse();
  // }, [id]);

  return (
    <div>
      <section className="section mt-5">
        <div className="container">
          <div className="columns">
            <div className="column is-half">
              <figure className="image is-4by3">
                <img src={image} alt="product" />
              </figure>
            </div>
            <div className="column">
              <div className="content">
                <div className="title">{name}</div>
                <p>{desc}</p>
                <div className="field p-5">
                  <button className="button is-primary is-fullwidth has-text-white mb-3">
                    Add to cart
                  </button>
                  <button className="button is-primary is-outlined is-fullwidth">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailCourse;
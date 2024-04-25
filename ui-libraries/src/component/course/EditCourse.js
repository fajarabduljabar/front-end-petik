import React, { useState, useEffect } from "react";
import Layout from "../Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditCourse = () => {
  const [name, setName] = useState("");
  const [trainerId, setTrainerId] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState();
  const [image, setImage] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setFile(URL.createObjectURL(image));
  };

  const getCourseById = async () => {
    try {
      const response = await axios.get(`http://api.sukmax.my.id/course/${id}`);
      setName(response.data.name);
      setDesc(response.data.desc);
      setFile(response.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCourseById();
  }, []);

  const updateCourse = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://api.sukmax.my.id/course/${id}`,
        {
          name: name,
          trainer_id: id,
          desc: desc,
          url: file,
          image: image,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      navigate("/table-course");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <h2 className="title">Course</h2>
      <h3 className="subtitle">Update Course</h3>
      <form onSubmit={updateCourse}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={name}
              placeholder="Masukkan nama course"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Trainer Id</label>
          <div className="control">
            <input
              className="input"
              type="text"
              value={id}
              onChange={(e) => setTrainerId(e.target.value)}
              placeholder="Masukkan trainer id"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Description</label>
          <div className="control">
            <textarea
              className="textarea"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="file">
          <label className="file-label">
            <input
              className="file-input"
              type="file"
              name="resume"
              onChange={loadImage}
            />
            <span className="file-cta">
              <span className="file-icon">
                <i className="fas fa-upload"></i>
              </span>
              <span className="file-label"> Choose a file… </span>
            </span>
          </label>
        </div>
        {file? (
          <figure className="image is-128x128 mb-5">
            <img src={file} alt="preview-img" />
          </figure>
        ) : (
          ""
        )}
        <div className="field is-grouped mt-5">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
          <div className="control">
            <button className="button is-link is-light">Cancel</button>
          </div>
        </div>
      </form>
    </Layout>
  );
};

export default EditCourse;
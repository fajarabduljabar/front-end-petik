import React from "react";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';


function TableCourse() {

    const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://api.sukmax.my.id/course');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div>
      <Layout>
        <h2 className="title">Courses</h2>
        <h3 className="subtitle">List of Course</h3>
        <Link to={"/course/add"} className="button is-primary mb-2" >Add New</Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Desc</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => {
                return (
            
            <tr>
              <td>{course.id}</td>
              <td>{course.name}</td>
              <td>{course.desc}</td>
              <td>{course.image}</td>
            </tr>
           ) })}
          </tbody>
        </Table>
      </Layout>
    </div>
  );
}

export default TableCourse;

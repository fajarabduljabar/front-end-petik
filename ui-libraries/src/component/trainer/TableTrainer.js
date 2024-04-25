import React from "react";
import Table from "react-bootstrap/Table";
import Layout from "../Layout";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";


function TableTrainer() {

    const [trainers, setTrainer] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [trainersPerPage] = useState(5);

  useEffect(() => {
    const fetchTrainer = async () => {
      try {
        const response = await axios.get('https://api.sukmax.my.id/trainer');
        setTrainer(response.data);
      } catch (error) {
        console.error('Error fetching trainers:', error);
      }
    };

    fetchTrainer();
  }, []);

  const LastTrainer = currentPage * trainersPerPage;
  const FirstPage = LastTrainer - trainersPerPage;
  const currentTrainer = trainers.slice(FirstPage, LastTrainer);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const deleteTrainer = async (id) => {
    try {
      await axios.delete(`https://api.sukmax.my.id/trainer/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Layout>
        <h2 className="title">Trainers</h2>
        <h3 className="subtitle">List of Trainer</h3>
        <Link to={"/trainer/add"} className="button is-primary mb-2" >Add New</Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Address</th>
              <th>Skill</th>
              <th>Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {currentTrainer.map((trainer) => {
              return (
            <tr>
              <td>{trainer.id}</td>
              <td>{trainer.name}</td>
              <td>{trainer.address}</td>
              <td>{trainer.skill}</td>
              <td>
                <img src={trainer.url} className="image is-128x128 mb-5" alt="img"/>
              </td>
              <td>
              <Link
                      to={`/trainer/edit/${trainer.id}`}
                      className="button is-info is-small"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        if (
                          window.confirm("Apakah anda yakin ingin menghapus?")
                        ) {
                          deleteTrainer(trainer.id);
                        }
                      }}
                      className="button is-small is-danger ml-2"
                    >
                      Delete
                    </button>
              </td>
            </tr>
               );
              })}
          </tbody>
        </Table>
        <Pagination>
          <PaginationItem>
            <PaginationLink first onClick={() => paginate(1)} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              previous
              onClick={() => paginate(currentPage - 1)}
            />
          </PaginationItem>
          {[...Array(Math.ceil(trainers.length / trainersPerPage)).keys()].map(
            (number) => (
              <PaginationItem
                key={number + 1}
                active={number + 1 === currentPage}
              >
                <PaginationLink onClick={() => paginate(number + 1)}>
                  {number + 1}
                </PaginationLink>
              </PaginationItem>
            )
          )}
          <PaginationItem>
            <PaginationLink next onClick={() => paginate(currentPage + 1)} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              last
              onClick={() =>
                paginate(Math.ceil(trainers.length / trainersPerPage))
              }
            />
          </PaginationItem>
        </Pagination>
      </Layout>
    </div>
  );
}

export default TableTrainer;

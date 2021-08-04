import React from "react";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {error && <div> {error} </div>}
      {isPending && (
        <ReactLoading
          type="spinningBubbles"
          color="#f1356d"
          height={333}
          width={480}
        />
      )}
      {data && <BlogList blogs={data} title="All Blogs!" />}
    </div>
  );
};

export default Home;

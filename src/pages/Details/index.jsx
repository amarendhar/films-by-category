import React from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { movieId } = useParams();

  return (
    <div>
      <div>movieId {movieId}</div>
    </div>
  );
};

export default Details;

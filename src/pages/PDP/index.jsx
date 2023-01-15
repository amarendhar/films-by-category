import React from "react";
import { useParams } from "react-router-dom";

// Details/Description/Product-Description-Page(PDP)
const PDP = () => {
  const { movieId } = useParams();

  return (
    <div data-testid="details-page">
      <div>movieId {movieId}</div>
    </div>
  );
};

export default PDP;

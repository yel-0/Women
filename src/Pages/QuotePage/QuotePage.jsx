import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";

const QuotePage = () => {
  const { name } = useParams();

  const { data, isLoading, isError } = useQuery("quotes", async () => {
    return axios.get("https://type.fit/api/quotes").then((res) => res.data);
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Error fetching data
      </div>
    );
  }

  return (
    <div className="bg-gray-900 h-screen overflow-auto snap-y snap-mandatory">
      {data.map((quote, index) => (
        <div
          className="snap-center p-8 h-screen flex justify-center items-center text-3xl text-white text-center"
          key={index}
          style={{ scrollSnapAlign: "center" }}
        >
          {quote.text}
        </div>
      ))}
    </div>
  );
};

export default QuotePage;

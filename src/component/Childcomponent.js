import React, { useEffect, useState } from "react";

export default function Childcomponent({ getData }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    console.log("child component - useEffect - get Data");

    getData("comments")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [getData]);

  return (
    <div>
      <p>Child Components</p>
      <p>{JSON.stringify(comments)}</p>
    </div>
  );
}

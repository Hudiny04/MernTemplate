import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Category1Details = () => {
  const { id } = useParams();
  const [record, setRecord] = useState(null);
  const [fetched, setFetched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch(`http://localhost:5000/api/workouts/${id}`);
      const data = await res.json();

      if (res.ok) {
        setRecord(data);
        setFetched(true);
      }
    };
    fetchWorkouts();
  }, [id]);

  const deleteWorkout = async () => {
    const res = await fetch(`http://localhost:5000/api/workouts/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);

    if (res.ok) {
      console.log("Workout deleted");
      navigate("/category1");
    }
  };

  console.log(record);

  return (
    fetched && (
      <div>
        <h1>{record.title} 1 Details</h1>
        <p>{record.load}</p>
        <p>{record.reps}</p>
        <button onClick={deleteWorkout}>Delete</button>
      </div>
    )
  );
};

export default Category1Details;

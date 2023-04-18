import { useForm } from "react-hook-form";
import React from "react";

const Category1Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const res = await fetch("http://localhost:5000/api/workouts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const json = await res.json();

    console.log(json);
    if (res.ok) {
      console.log("Workout created");
      reset();

    }
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Workout Title"
        {...register("title", {})}
      />
      <input type="number" placeholder="Load" {...register("load", {})} />
      <input type="number" placeholder="Reps" {...register("reps", {})} />

      <input type="submit" />
    </form>
  );
};

export default Category1Form;

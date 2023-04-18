import { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import Category1Form from "./Category1Form";

const Category1 = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await fetch("http://localhost:5000/api/workouts/");
      const data = await res.json();

      if (res.ok) {
        setWorkouts(data);
      }
    };
    fetchWorkouts();
  }, [workouts]);

  return (
    <div>
      <h1>Category 1</h1>
      {workouts && (
        <Row justify="center">
          <Col xs={20} sm={20} md={20} lg={20}>
          <Category1Form />
          </Col>
          {workouts.map((workout) => (
            <Col xs={20} sm={20} md={20} lg={20} key={workout._id}>
              <Link to={`/category1/${workout._id}`} className="link">
                <div className="record">{workout.title}</div>
              </Link>
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default Category1;

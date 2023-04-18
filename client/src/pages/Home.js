import { Row, Col } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <Row justify="center">
        <Col xs={20} sm={16} md={12} lg={8}>
          <Link to="/category1" className="link">
            <div className="category">Category 1</div>
          </Link>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8}>
          <Link to="/category2" className="link">
            <div className="category">Category 2</div>
          </Link>
        </Col>
      </Row>
      <Row justify="center">
        <Col xs={20} sm={16} md={12} lg={8}>
          <Link to="/category3" className="link">
            <div className="category">Category 3</div>
          </Link>
        </Col>
        <Col xs={20} sm={16} md={12} lg={8}>
          <Link to="/category4" className="link">
            <div className="category">Category 4</div>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Home;

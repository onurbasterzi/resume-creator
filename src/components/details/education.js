import { Col,ListGroup } from "react-bootstrap";

const Education = () => {
  return (
    <Col xs={12} className="p-2 mb-2 shadow">
      <h5 className="text-light p-2">
        <i className="bi bi-book"></i> EDUCATION
      </h5>
      <ListGroup>
        <ListGroup.Item>
          <strong>Anadolu Üniversitesi, Business | Bachelor Degree</strong> <br />
          <i>May 2012 ESKİŞEHİR, TURKEY</i>
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Celal Bayar Üniversitesi Mechatronics Engineering | Bachelor Degree</strong> <br />
          <i> June 2020 Manisa, TURKEY </i>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  );
};

export default Education;

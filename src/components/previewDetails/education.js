import { Col, ListGroup } from "react-bootstrap";

const Education = ({ educations }) => {
  return (
    educations &&
    <Col xs={12} className="p-2 mb-2 shadow">
      <h5 className="text-light p-2">
        <i className="bi bi-book"></i> {educations.title}
      </h5>
      <ListGroup>
        {educations.educations.map((item) => (
          <ListGroup.Item key={item.id}>
            <strong>
              {item.school}, {item.department} | {item.degree}
            </strong>
            <br />
            <i>{item.graduation}</i>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

export default Education;

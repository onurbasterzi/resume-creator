import { ListGroup, Col } from "react-bootstrap";
const Languages = () => {
  return (
    <Col xs={12} className="p-2 mb-2 shadow">
      <h5 className="text-light p-2">
        <i className="bi bi-globe"></i> LANGUAGES
      </h5>
      <ListGroup>
        <ListGroup.Item>
          <p>
            <strong> English</strong> : Writing: Good | Listening:Good | Speaking: Moderate
          </p>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  );
};

export default Languages;

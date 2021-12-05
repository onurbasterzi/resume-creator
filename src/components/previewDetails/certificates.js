import { Col, ListGroup } from "react-bootstrap";
const Certificates = ({ certificates }) => {
  return (
    certificates &&
    <Col xs={12} className="p-2 mb-2 shadow">
      <h5 className="text-light p-2">
        <i className="bi bi-patch-check"></i> CERTIFICATES
      </h5>
      <ListGroup>
        {certificates.certificates.map((item) => (
          <ListGroup.Item key={item.id}>
            <strong>
              {item.organization} | {item.courseName} <br />{" "}
            </strong>
            <i>
              {item.certification} - <u>{item.certificationDate}</u>{" "}
            </i>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};

export default Certificates;

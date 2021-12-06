import { Col, ListGroup } from "react-bootstrap";
const Certificates = ({ certificates,theme }) => {
  return (
    certificates &&
    <Col xs={12} className="p-2 mb-2 shadow">
       <h5 className={`text-light p-2 ${theme[0]}`}>
        <i className="bi bi-patch-check"></i> {certificates.title}
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

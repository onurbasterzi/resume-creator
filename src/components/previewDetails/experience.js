import { ListGroup, Col } from "react-bootstrap";

const Experience = ({ experiences }) => {
  console.log(experiences);
  return (
    experiences &&
    <Col xs={12} className="p-2 mb-2 shadow">
      <h5 className="text-light p-2">
        <i className="bi bi-briefcase"></i> {experiences.title}
      </h5>
      <ListGroup>
     
          {experiences.experiences.map((item) => (
            <ListGroup.Item key={item.id}>
              <strong>
                {" "}
                {item.jobTitle} | {item.company}{" "}
              </strong>
              <br />
              <i>
                {item.startDate} - {item.endDate} {item.city}, {item.country}
              </i>{" "}
              <br />
              {item.jobDescription}
            </ListGroup.Item>
          ))}
      </ListGroup>
    </Col>
  );
};

export default Experience;

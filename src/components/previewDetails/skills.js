import { ListGroup, Col } from "react-bootstrap";

const Skills = ({skills}) => {
  console.log(skills);
  return (
    skills &&
    <Col xs={12} className="p-2 mb-2 shadow">
      <h5 className="text-light p-2">
        <i className="bi bi-pc-display-horizontal"></i> {skills.title}
      </h5>
      <ListGroup>
        {skills.skills.map((item) => (
          <ListGroup.Item key={item.id}> {item.skill}</ListGroup.Item>
        ))}
      </ListGroup>
    </Col>
  );
};
export default Skills;

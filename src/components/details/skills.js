import { ListGroup,Col } from "react-bootstrap";

const Skills = () => {
    return ( <Col xs={12} className="p-2 mb-2 shadow">
    <h5 className="text-light p-2">
      <i className="bi bi-pc-display-horizontal"></i> SKILLS
    </h5>
    <ListGroup horizontal>
      <ListGroup.Item>Frontend Development</ListGroup.Item>
      <ListGroup.Item>Backend Development with ASP.NET C#</ListGroup.Item>
    </ListGroup>
    <ListGroup horizontal>
      <ListGroup.Item>Good knowledge on HTML,CSS and Javascript</ListGroup.Item>
      <ListGroup.Item>Good knowledge on Vue.JS</ListGroup.Item>
    </ListGroup>
    <ListGroup horizontal>
      <ListGroup.Item style={{ fontSize: "12px" }}>Good knowledge on ASP.NET MVC - ASP.NET WEB API</ListGroup.Item>
      <ListGroup.Item style={{ fontSize: "12px" }}>Moderate knowledge on React and Next.Js</ListGroup.Item>
    </ListGroup>
  </Col> );
}
 
export default Skills;
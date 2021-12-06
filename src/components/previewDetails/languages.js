import { ListGroup, Col } from "react-bootstrap";
const Languages = ({ languages,theme }) => {
  return (
    languages && (
      <Col xs={12} className="p-2 mb-2 shadow">
         <h5 className={`text-light p-2 ${theme[0]}`}>
          <i className="bi bi-globe"></i> LANGUAGES
        </h5>
        <ListGroup>
          {languages.languages.map((item) => (
            <ListGroup.Item key={item.id}>
              <strong> {item.language}</strong> : Writing: {item.writing} | Listening:{item.listening} | Speaking: {item.speaking}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    )
  );
};
export default Languages;

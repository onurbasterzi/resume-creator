import { Col } from "react-bootstrap";

const Summary = ({ summary }) => {
  return (
    summary && (
      <Col xs={12} className="p-2 mb-2 shadow">
        <h5 className="text-light p-2">
          <i className="bi bi-person-lines-fill"></i> {summary.title}
        </h5>
        <p>{summary.summary}</p>
      </Col>
    )
  );
};

export default Summary;

import { Row, Col } from "react-bootstrap";

const CvHeader = ({ header,theme }) => {
  // const header=data.resume[0].Header
   
  return (
    header &&
    <Row className="row justify-content-start">
      <Col xs={9} >
        <h1 className={theme[1]} >{header.name}</h1>
        <h4>{header.jobTitle}</h4>
        <p className="text-muted">
          {header.address} <br />
          <i className="bi bi-envelope"></i> {header.email} / <i className="bi bi-phone"></i>{header.phone} <br />
          {header.dateOfBirth}
        </p>
      </Col>
      <Col xs={3}>
        <img src={header.photo} className="shadow" style={{ width: "100%" }} alt="" />
      </Col>
      <hr />
    </Row>
  );
};

export default CvHeader;
